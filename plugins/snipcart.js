export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    // Verifica que Snipcart solo se cargue en el cliente
    const script = document.createElement('script');
    script.src = 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js';
    script.async = true;
    script.onload = () => {
      console.log('Snipcart script loaded');
    };
    document.head.appendChild(script);

    // Verifica que el enlace de Snipcart se cargue
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css';
    document.head.appendChild(link);

    // Agregar el div de Snipcart con la clave pública
    const snipcartElement = document.createElement('div');
    snipcartElement.id = 'snipcart';
    snipcartElement.setAttribute('data-api-key', 'M2VmZTNiMTItZTU5Mi00MGYzLWI0ZWQtOTAxMTg4MjdjNzZlNjM4NjY5NzAwMTI3MzE1MjU4'); // Asegúrate de reemplazar esto con tu clave
    document.body.appendChild(snipcartElement);
  }
});
