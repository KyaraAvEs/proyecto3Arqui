<!-- pages/index.vue -->
<template>
  <div class="container">
    <HeaderView />
    <h3 style="margin-top: 15px; text-align: center;">Información de Películas Animadas</h3>
    <p style="margin-top: 15px; text-align: center;">Proyecto #1 - Carlos López y Kyara Ávalos</p>
    <FooterView />
  </div>
</template>

<script>
export default {
  mounted() {
    // Cargar el script y el CSS de Snipcart solo cuando esta página se haya montado
    const script = document.createElement('script');
    script.src = 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js';
    document.head.appendChild(script);
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css';
    document.head.appendChild(link);
  }
}
</script>
