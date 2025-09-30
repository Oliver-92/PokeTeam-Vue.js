
<script setup>
import Navbar from '@/components/Navbar.vue';
import ShowPoke from '@/components/ShowPoke.vue';
import { usePokemonsAll } from '@/composables/usePokemonsAll';
import { usePokeTeam } from '@/stores/usePokeTeam';
import { ref, computed } from 'vue';
import Loader from '../components/Loader.vue';

const { pokemons, loading, error } = usePokemonsAll();
const { inTeam } = usePokeTeam();

const page = ref(1);
const perPage = 14;
const totalPages = computed(() => Math.ceil(pokemons.value.length / perPage));
const paginatedPokemons = computed(() => {
    const start = (page.value - 1) * perPage;
    return pokemons.value.slice(start, start + perPage);
});

function prevPage() {
    if (page.value > 1) page.value--;
}
function nextPage() {
    if (page.value < totalPages.value) page.value++;
}
</script>


<template>
    
    <Navbar />
    <h1>All Pokémons</h1>
        <section style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; padding: 10px;">
                <div v-if="loading"><Loader /></div>
                <div v-else-if="error">{{ error }}</div>
                <template v-else>
                    <ShowPoke
                        v-for="poke in paginatedPokemons"
                        :key="poke.id"
                        :pokemon="poke"
                        :is-loading="false"
                        :in-team="inTeam(poke)"
                        style="min-width: 250px;"
                    />
                </template>
        </section>
        <div v-if="!loading && !error && pokemons.length" style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0;">
            <button class="button" @click="prevPage" :disabled="page === 1">Anterior</button>
            <span>Página {{ page }} de {{ totalPages }}</span>
            <button class="button" @click="nextPage" :disabled="page === totalPages">Siguiente</button>
        </div>
</template>

<style>

h1 {
    text-align: center;
    color: white;
}

span {
    color: white;
}

.button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: tomato;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

</style>