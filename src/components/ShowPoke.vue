<script setup>
import { usePokeTeam } from "@/stores/usePokeTeam";

// Componente para mostrar la info de un pokemon

const { addPokemon, removePokemon } = usePokeTeam();

defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  inTeam: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="card">
    <div v-if="isLoading">Cargando...</div>
    <div v-else>
      <div class="header">
        <h2>{{ pokemon.name }}</h2>
        <p># {{ pokemon.id }}</p>
      </div>
      <img :src="pokemon.image" :alt="pokemon.name" />
      <p class="types"> {{ pokemon.types.join(' ') }} </p>
      <div class="details">
        <p>Altura: {{ pokemon.height / 10 }}m</p>
        <p>Peso: {{ (pokemon.weight / 10).toFixed(1) }}kg</p>
      </div>
    </div>
    <button v-if="!inTeam" class="add-button" @click="addPokemon(pokemon)">Add to team</button>
    <button v-else class="remove-button" @click="removePokemon(pokemon)">Remove from team</button>
  </section>
</template>

<style scoped>
.card {
  margin: 20px auto;
  padding: 15px;
  max-width: 300px;
  border-radius: 8px;
  background: rgba(250, 250, 250, 0.9);
}

.header h2,
p {
  text-transform: capitalize;
  margin: 5px;
}

.card img {
  max-width: 200px;
  height: auto;
  display: block;
  border-radius: 50%;
  margin: 10px auto;
  background-color: #fff;
}

.types {
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
  margin: 20px;
}

.details {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}

.details p {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
  width: 100px;
  text-align: center;
  font-weight: bold;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.add-button {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  border: 0;
  color: white;
  background-color: #42b883;
  border-radius: 20px;
  display: block;
  margin: 20px auto 10px auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #369870;
}

.remove-button {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  border: 0;
  background-color: firebrick;
  border-radius: 20px;
  color: white;
  display: block;
  margin: 20px auto 10px auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: darkred;
}
</style>
