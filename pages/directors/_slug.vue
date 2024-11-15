<script>
export default {
  async asyncData({ $content, params }) {
    // Carga los datos del director según el parámetro 'slug' proporcionado
    const director = await $content('directors', params.slug).fetch();
    return { director }; // Retorna el objeto 'director' para que esté disponible en el template
  }
};
</script>

<template>
  <div class="container" v-if="director"> <!-- Se asegura de que 'director' exista antes de mostrar el contenido -->
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + director.image" alt="Imagen de {{ director.name }}">
      </div>
      <div class="seven columns">
        <h1>{{ director.name }}</h1>
        <p>País de origen: {{ director.country }}</p>
        <p>Fecha de nacimiento: {{ director.birthdate }}</p>
        <p>Películas:</p>
        <div v-for="movie in director.movies" :key="movie.slug">
          <NuxtLink :to="'/movies/' + movie.slug">{{ movie.name }}</NuxtLink>
        </div>

        <!-- Botón de Snipcart para comprar -->
        <button
          class="snipcart-add-item"
          :data-item-id="director.slug"
          :data-item-name="director.name"
          :data-item-price="0.00" <!-- Cambia el precio si es necesario -->
          :data-item-url="'/directors/' + director.slug"
          :data-item-description="'Biografía de ' + director.name"
          :data-item-image="'/images/' + director.image"
        >
          Comprar Biografía
        </button>
      </div>
    </div>
    <FooterView />
  </div>
  <div class="container" v-else>
    <HeaderView />
    <p>Cargando...</p> <!-- Muestra un mensaje mientras se cargan los datos -->
    <FooterView />
  </div>
</template>
