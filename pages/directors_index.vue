<script>
export default {
  async asyncData({ $content }) {
    // Cargar todos los archivos de directores en la carpeta 'directors'
    const directors = await $content('directors').fetch();
    console.log(directors);  // Verifica que los datos estén correctos en la consola
    return {
      directors
    }
  }
}
</script>

<template>
  <div class="container">
    <HeaderView />
    <h3 style="margin-top: 25px; text-align: center;">Directores Registrados</h3>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">
      <div v-for="director in directors" :key="director.slug">
        <NuxtLink :to="{ name: 'directors-slug', params: { slug: director.slug } }" style="text-decoration: none;">
          <div style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; border: 1px solid #000000; border-radius: 10px;">
            <p style="font-size: 24px; font-weight: 700; text-align: center; color: darkmagenta;">{{ director.name }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <FooterView />
  </div>
</template>
