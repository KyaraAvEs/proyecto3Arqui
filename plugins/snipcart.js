import { useClient } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  // Verificar si estamos en el cliente antes de ejecutar el código
  if (useClient()) {
    // Cargar el script de Snipcart dinámicamente en el cliente
    const script = document.createElement('script');
    script.src = 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js';
    script.async = true;
    document.head.appendChild(script);

    // Cargar el CSS de Snipcart
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css';
    document.head.appendChild(link);
  }
});
