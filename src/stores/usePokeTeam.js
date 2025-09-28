import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePokeTeam = defineStore('team', () => {
  const team = ref([])

  function addPokemon(pokemon) {
    if (team.value.length >= 6) {
      alert("Team is full. You can't add more than 6 pokemons.")
      return
    } else if (team.value.some(p => p.id === pokemon.id)) {
      alert("This pokemon is already in your team.")
      return
    } else {
      console.log(team.value)
      alert(`${pokemon.name} added to your team!`)
      team.value.push(pokemon)
    }
    console.log(team.value)
  }
  function removePokemon(pokemon) {
    alert(`${pokemon.name} removed from your team!`)
    team.value = team.value.filter(p => p.id !== pokemon.id)
    console.log(team.value)
  }

  function inTeam(pokemon) {
    if (!pokemon) return false;
    return team.value.some(p => p.id === pokemon.id);
  }

  function clearTeam() {
    if (team.value.length === 0) {
      alert("Your team is already empty!");
      return;
    } else {
      team.value = [];
      alert("Your team has been cleared!");
    }

  }
  return { team, addPokemon, removePokemon, inTeam, clearTeam }
})
