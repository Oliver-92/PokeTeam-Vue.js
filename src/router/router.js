import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import AllPokemonsView from '@/pages/AllPokemonsView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/All-Pokemons', component: AllPokemonsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router