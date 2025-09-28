
import { ref } from "vue";

export function usePokemonsAll() {
  const pokemons = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetchAllPokemons() {
    loading.value = true;
    error.value = null;
    try {
      // Obtener la lista de todos los pokémon (limit máximo actual: 1302)
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      // data.results es un array con { name, url }
      // Para cada pokémon, obtener detalles (height, weight, types)
      const results = data.results;
      // Limitar la cantidad si es necesario para pruebas: results.slice(0, 50)
      const detailedPokemons = await Promise.all(
        results.map(async (poke) => {
          try {
            const resPoke = await fetch(poke.url);
            if (!resPoke.ok) throw new Error('HTTP ' + resPoke.status);
            const pokeData = await resPoke.json();
            const id = pokeData.id;
            return {
              name: pokeData.name,
              id,
              image: pokeData.sprites.other["official-artwork"].front_default || '',
              types: pokeData.types.map(t => t.type.name),
              height: pokeData.height,
              weight: pokeData.weight,
            };
          } catch (e) {
            // Si falla, devolver datos mínimos
            const id = poke.url.split("/").filter(Boolean).pop();
            return {
              name: poke.name,
              id,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
              types: [],
              height: 0,
              weight: 0,
            };
          }
        })
      );
      pokemons.value = detailedPokemons;
    } catch (e) {
      console.log(e);
      error.value = "No se pudieron cargar los pokémon";
    } finally {
      loading.value = false;
    }
  }

  // Llamar automáticamente al cargar el composable
  fetchAllPokemons();

  return { pokemons, loading, error };
}
