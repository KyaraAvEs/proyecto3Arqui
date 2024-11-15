<script>
export default {
  async asyncData({ $content }) {
    // Cargar todos los archivos de películas en la carpeta 'movies'
    const movies = await $content('movies').fetch();
    console.log(movies);  // Verifica que los datos estén correctos en la consola
    return {
      movies
    }
  }
}
</script>

<template>
  <div class="container">
    <HeaderView />
    <h3 style="margin-top: 25px; text-align: center;">Películas Registradas</h3>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">
      <div v-for="movie in movies" :key="movie.slug">
        <NuxtLink :to="{ name: 'movies-slug', params: { slug: movie.slug } }" style="text-decoration: none;">
          <div style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; border: 1px solid #000000; border-radius: 10px;">
            <p style="font-size: 24px; font-weight: 700; text-align: center; color: darkmagenta;">{{ movie.title }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <FooterView />
  </div>
</template>

<!-- <script>
  export default {
    async asyncData({ $content, params }) {
      const movies = await $content('movies').fetch();
      console.log(movies);
      return {
        movies
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 25px; text-align: center;">Películas Registradas</h3>
     <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">

       <div v-for="movie of movies" :key="movie.slug" >
         <NuxtLink style="text-decoration: none;" :to="{ name: 'movies-slug', params: { slug: movie.slug } }">
          <div style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; border: 1px solid #000000; border-radius: 10px;">
            <p style="text-decoration: none; font-size: 24px; font-weight: 700; text-align: center; color: darkmagenta;">{{ movie.title }}</p>
          </div>
         </NuxtLink>
       </div>
     </div>
   <FooterView />
 </div>
</template> -->