<template>
  <div class="container" v-if="studio">
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + studio.image" alt="Imagen del Estudio">
      </div>
      <div class="seven columns">
        <h1>{{ studio.name }}</h1>
        <p>País: {{ studio.country }}</p>
        <p>Fecha de fundación: {{ studio.founded_year }}</p>
        <h3>Películas producidas:</h3>
        <ul>
          <li v-for="movie in studio.movies" :key="movie.slug">
            <NuxtLink :to="{ name: 'movies-slug', params: { slug: movie.slug } }">
              {{ movie.name }}
            </NuxtLink>
            <!-- Botón de compra de Snipcart -->
            <button
              class="snipcart-add-item"
              :data-item-id="movie.slug"
              :data-item-name="movie.name"
              :data-item-price="movie.price"
              :data-item-url="`/movies/${movie.slug}`"
              :data-item-description="`Compra la película ${movie.name} producida por ${studio.name}`">
              Agregar al carrito
            </button>
          </li>
        </ul>
      </div>
    </div>
    <FooterView />
  </div>

  <div class="container" v-else>
    <HeaderView />
    <p>Cargando...</p>
    <FooterView />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const studio = await $content('studios', params.slug).fetch();
      return { studio };
    } catch (error) {
      console.error('Error al cargar el estudio:', error);
      return { studio: null };
    }
  }
};
</script>
