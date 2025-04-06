module.exports = [
  // Povinné middlewares (musí být na začátku)
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
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://strapi-backend-app-8zq2.onrender.com'
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public', // Tento musí být vždy poslední
];