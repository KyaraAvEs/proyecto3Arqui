<template>
  <div class="container">
    <HeaderView />
    <h3 style="margin-top: 15px; text-align: center;">Información de Películas Animadas</h3>
    <p style="margin-top: 15px; text-align: center;">Proyecto #1 - Carlos López y Kyara Ávalos</p>
    <FooterView />

    <!-- Snipcart -->
    <div id="snipcart" hidden>
      <snipcart data-api-key="M2VmZTNiMTItZTU5Mi00MGYzLWI0ZWQtOTAxMTg4MjdjNzZlNjM4NjY5NzAwMTI3MzE1MjU4" data-config="your-config"></snipcart>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Cargar el script y el CSS de Snipcart solo cuando esta página se haya montado
    const script = document.createElement('script');
    script.src = 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js';
    script.async = true;  // Carga asincrónica del script
    document.head.appendChild(script);
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css';
    document.head.appendChild(link);
  }
}
</script>
