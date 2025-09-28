<script setup>
import SearchPokemon from "@/components/SearchPokemon.vue";
import PoKeTeam from "@/components/PoKeTeam.vue";
import PokeTeamCollection from "@/components/PokeTeamCollection.vue";
import Navbar from "@/components/Navbar.vue";

</script>

<template>
    <header style="text-align: center; color: white">
    <h1 style="font-size: 4rem; margin: 20px 0 10px 0;">My PokéTeam</h1>
    <h2 style="font-size: 1rem ; margin: 10px 0;">Discover and collect your favorite Pokémon</h2>
    <nav>
    <Navbar />
  </nav>
  </header>
  <PoKeTeam />
  <SearchPokemon />
  <PokeTeamCollection />
</template>

<style></style>