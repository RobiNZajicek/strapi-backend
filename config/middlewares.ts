module.exports = [
  // Povinné základní middlewares
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://strapi-backend-app-8zq2.onrender.com',
            'https://render.com'
          ],
        },
      },
    },
  },
  'strapi::cors', // CORS middleware (výchozí nastavení)
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public' // VŽDY poslední
];