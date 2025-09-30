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
    team.value = team.value.filter(p => p.id !== pokemon.id)
    alert(`${pokemon.name} removed from your team!`)
    console.log(team.value)
  }

  function inTeam(pokemon) {
    if (!pokemon) return false;
    return team.value.some(p => p.id === pokemon.id);
  }

  function clearTeam() {
    if (team.value.length === 0) {
      alert("Your team is already empty.");
      return;
    } else {
      const confirmed = window.confirm("Are you sure you want to clear your team?");
      if (!confirmed) return;
      team.value = [];
      alert("Your team has been cleared!");
    }
  }

  return { team, addPokemon, removePokemon, inTeam, clearTeam }
})
