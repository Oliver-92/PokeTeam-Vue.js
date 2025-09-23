<script setup>
import SearchPokemon from "./components/SearchPokemon.vue";
import ShowPokemon from "./components/ShowPokemon.vue";
import PoKeTeam from "./components/PoKeTeam.vue";
import PokeTeamDetail from "./components/PokeTeamDetail.vue";
</script>

<template>
  <header style="text-align: center; color: white">
    <h1 style="font-size: 4rem; margin: 20px 0 10px 0;">My PokéTeam</h1>
    <h2 style="font-size: 1rem ; margin: 10px 0;">Discover and collect your favorite Pokémon</h2>
  </header>
  <PoKeTeam />
  <SearchPokemon />
  <PokeTeamDetail />
</template>

<style>
body {
  background-color: tomato;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}
</style>
