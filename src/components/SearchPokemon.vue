<script setup>
import { usePokemonSearch } from "@/composables/usePokemonSearch";
import ShowPoke from "./ShowPoke.vue";
import { usePokeTeam } from "@/stores/usePokeTeam";

// Componente para buscar pokemones y mostrar su info

const { query, onSearch, pokemon, loading } = usePokemonSearch();
const { inTeam } = usePokeTeam();


</script>

<template>
  <nav>
    <form @submit.prevent="onSearch">
      <input v-model="query" placeholder="Ej: Ditto" />
      <button type="submit">Search</button>
    </form>
  </nav>

  <ShowPoke v-if="pokemon" :pokemon="pokemon" :is-loading="loading" :inTeam="inTeam(pokemon)" />
</template>

<style scoped>
nav {
  margin: 20px auto;
  padding: 15px;
  max-width: 800px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: rgba(250, 250, 250, 0.9);
  text-align: center;
}
form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 70%;
  margin-right: 10px;
}
form button {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
  padding: 10px 15px;
  border: 0;
  color: white;
  margin: 10px 0px;
  background-color: #42b883;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
form button:hover {
  background-color: #369870;
}

</style>
