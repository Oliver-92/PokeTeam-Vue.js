
# PoKeTeam App

Aplicación práctica desarrollada con Vue 3 y Vite para gestionar tu propio equipo Pokémon.

## Descripción

Este proyecto permite buscar pokémon, agregarlos a un equipo personalizado (máximo 6 integrantes), visualizar detalles y eliminar pokémon del equipo. Utiliza Pinia para el manejo de estado global y la API pública de PokéAPI para obtener información de los pokémon.

## Screenshots

![PokeTeam](/public/screenshot.jpg)


## Estructura del Proyecto

```
src/
	App.vue
	main.js
	components/
		CardPokeTeam.vue        # Tarjeta visual de cada pokémon en el equipo
		PoKeTeam.vue            # Vista principal del equipo
		PokeTeamCollection.vue  # Colección y paginación de todos los pokémon
		SearchPokemon.vue       # Buscador de pokémon
		ShowPoke.vue            # Card de detalle de pokémon individual (con tipos y colores)
		ShowPokemon.vue         # Ejemplo básico de visualización
	pages/
		AllPokemonsView.vue     # Vista paginada de todos los pokémon
	composables/
		usePokemonSearch.js     # Composable para búsqueda individual
		usePokemonsAll.js       # Composable para obtener y paginar todos los pokémon
	stores/
		usePokeTeam.js          # Store Pinia para el equipo y gestión de acciones
	assets/
		pokemon-types.css       # Colores reutilizables para los tipos de pokémon
public/
	screenshot.jpg            # Captura de pantalla de la app
```

## Funcionalidades

- Buscar pokémon por nombre
- Agregar pokémon al equipo (máximo 6, sin duplicados)
- Eliminar pokémon del equipo
- Visualizar detalles de cada pokémon
- Equipo reactivo y persistente durante la sesión

## Instalación y uso

Instala las dependencias:
```sh
npm install
```

Ejecuta en modo desarrollo:
```sh
npm run dev
```

Compila para producción:
```sh
npm run build
```

## Dependencias principales

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)


## Actualizaciones recientes

- Se agregó paginación en la vista de todos los pokémon (máx. 14 por página).
- Ahora se muestran los tipos, altura y peso de cada pokémon en las cards.
- Los tipos de pokémon se visualizan con colores personalizados reutilizables mediante clases CSS.
- Mejoras en el manejo del equipo: confirmación al limpiar el equipo y mensajes de alerta más claros.
- Optimización del composable para listar todos los pokémon y obtener detalles completos desde la API.

## Recomendaciones

Usa [VSCode](https://code.visualstudio.com/) con la extensión [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para una mejor experiencia de desarrollo.

---
Desarrollado para prácticas y aprendizaje de Vue 3.
