<script>
export default {
  async asyncData({ params, $content }) {
    // Obtener la película a partir del slug
    const movie = await $content('movies', params.slug).fetch();

    // Retornar la película para que esté disponible en el template
    return { movie };
  }
}
</script>

<template>
  <div class="container" v-if="movie">
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + movie.image" alt="Movie Image">
      </div>
      <div class="seven columns">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.description }}</p>
        <p>Duración: {{ movie.duration }}</p>
        <p>Género: {{ movie.genre }}</p>
        <p>Rating: {{ movie.rating }}</p>
        <p>
          Estudio:
          <NuxtLink :to="'/studios/' + movie.studio.slug">{{ movie.studio.name }}</NuxtLink>
        </p>
        <p>
          Director:
          <NuxtLink :to="'/directors/' + movie.director.slug">{{ movie.director.name }}</NuxtLink>
        </p>

        <!-- Botón para Snipcart -->
        <button
          class="snipcart-add-item"
          :data-item-id="movie.slug"
          :data-item-name="movie.title"
          :data-item-price="movie.price"
          :data-item-url="'/movies/' + movie.slug"
          :data-item-image="'/images/' + movie.image"
        >
          Comprar {{ movie.title }} por {{ movie.price }} USD
        </button>
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
<!-- <template>
  <div class="container" v-if="movie">
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + movie.image" alt="Movie Image">
      </div>
      <div class="seven columns">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.description }}</p>
        <p>Duración: {{ movie.duration }}</p>
        <p>Género: {{ movie.genre }}</p>
        <p>Rating: {{ movie.rating }}</p>
        <p>
          Estudio:
          <NuxtLink :to="'/studios/' + movie.studio.slug">{{ movie.studio.name }}</NuxtLink>
        </p>
        <p>
          Director:
          <NuxtLink :to="'/directors/' + movie.director.slug">{{ movie.director.name }}</NuxtLink>
        </p>

         Botón para Snipcart -->
        <!-- <button
          class="snipcart-add-item"
          :data-item-id="movie.slug"
          :data-item-name="movie.title"
          :data-item-price="movie.price"
          :data-item-url="'/movies/' + movie.slug"
          :data-item-image="'/images/' + movie.image"
        >
          Comprar {{ movie.title }} por {{ movie.price }} USD
        </button>
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
 --> 