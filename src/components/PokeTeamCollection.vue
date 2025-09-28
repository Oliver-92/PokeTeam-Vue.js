<script setup>
import { usePokeTeam } from '@/stores/usePokeTeam';
import { storeToRefs } from 'pinia';
import ShowPoke from './ShowPoke.vue';

// Componente para mostrar el equipo de pokemones en detalle (colección)

const pokeTeam = usePokeTeam();
const { team, loading } = storeToRefs(pokeTeam);


</script>

<template>
    <section>
        <h2>Collection</h2>
        <div class="container" v-if="team.length > 0">
            <ShowPoke v-for="(pokemon, index) in team" :key="index" :pokemon="pokemon" :is-loading="loading"
                :inTeam="true" :style="{
                    '--max-width-card' : '230px',
                    '--padding-card' : '5px 10px',
                    '--max-width-img' : '160px',
                    '--width-details' : '70px',
                    '--font-size' : '0.75rem',
                    '--margin' : '5px auto'
                }" />
        </div>
        <button class="clear-button" @click="pokeTeam.clearTeam">Clear collection</button>
    </section>
</template>

<style scoped>
section {
    margin: 20px auto;
    padding: 20px;
    max-width: 800px;
    width: 90%;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: rgba(250, 250, 250, 0.9);
    color: rgb(92, 91, 91);
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

div {
    display: flex;
    justify-content: center;
}

.clear-button {
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: tomato;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.clear-button:hover {
    background-color: #f84f31;
}
</style>