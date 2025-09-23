<script setup>
// Componente para mostrar un pokemon en el equipo o un espacio vacío

defineProps({
    pokemon: {
        type: Object,
        default: null,
    },
});
</script>

<template>
    <figure v-if="pokemon">
        <img :src="pokemon.image" :alt="pokemon.name">
    </figure>
    <figure v-else>
        <p>Empty</p>
    </figure>
</template>

<style scoped>
figure {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    margin: 10px;
}

img {
    width: 100%;
    height: 100%;
}
p {
    font-size: 0.8rem;
    color: #666;
}
</style>