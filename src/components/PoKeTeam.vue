<script setup>
import { usePokeTeam } from '@/stores/usePokeTeam';
import CardPokeTeam from './CardPokeTeam.vue';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

// Componente para mostrar el equipo de pokemones (My Dream Team)

const pokeTeam = usePokeTeam();
const { team } = storeToRefs(pokeTeam); // uso storeToRefs para mantener reactividad

const currentTeam = computed(() => [
    ...team.value,
    ...Array(6 - team.value.length).fill(null)
].slice(0, 6));
console.log(team);

</script>

<template>
    <section>
        <h2>My Dream Team</h2>
        <div>
            <CardPokeTeam v-for="(pokemon, index) in currentTeam" :key="index" :pokemon="pokemon" :empty="!pokemon" />
        </div>
        <p>Add more pokemons! Max: 6</p>
    </section>
</template>

<style scoped>
section {
    margin: 20px auto;
    padding: 20px;
    max-width: 800px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: rgba(250, 250, 250, 0.9);
    color: rgb(92, 91, 91);
}

div {
    display: flex;
    justify-content: center;
}
</style>