
import { ref } from "vue";

export function usePokemonsAll() {
  const pokemons = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetchAllPokemons() {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      const results = data.results;
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

  fetchAllPokemons();

  return { pokemons, loading, error };
}
