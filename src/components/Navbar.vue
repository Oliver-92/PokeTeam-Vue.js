<script></script>

<template>
    <nav>
        <RouterLink class="RouterLink" to="/">Home</RouterLink>
        <RouterLink class="RouterLink" to="/All-Pokemons">All Pokémons</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: center;
}
.RouterLink {
    margin: 10px;
    text-decoration: none;
    color: white;
    font-weight: bold;
}
</style>