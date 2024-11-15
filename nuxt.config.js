export default {
    // Aquí puedes agregar las configuraciones globales de tu proyecto
    compatibilityDate: '2024-11-14',
    devtools: {
        enabled: false,  // Deshabilita las herramientas de desarrollo en producción
      },
    // Otras configuraciones
    build: {
      // Configuraciones relacionadas con la construcción del proyecto
    },
    plugins: [
      { src: '~/plugins/snipcart.js', mode: 'client' }
    ]
  }

  