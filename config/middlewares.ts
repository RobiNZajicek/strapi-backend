module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // Přidána URL Strapi backendu do connect-src pro povolení API volání
          'connect-src': ["'self'", 'https:', 'https://strapi-backend-806198347052.europe-west3.run.app'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'https://strapi-backend-806198347052.europe-west3.run.app'],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://strapi-backend-806198347052.europe-west3.run.app',
            // process.env.NEXT_PUBLIC_STRAPI_URL
          ],
        },
      },
    },
  },
  {
    name: 'strapi::body',
    config: {
      formLimit: '20mb',
      jsonLimit: '20mb',
      textLimit: '20mb',
    },  
  },
  // Zde je upravená konfigurace pro CORS
  {
    name: 'strapi::cors',
    config: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: '*',
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// Tyto bloky patří do jiných konfiguračních souborů (např. config/server.js a config/plugins.js)
// a neměly by být v config/middleware.js.
// Ujisti se, že máš tyto konfigurace ve správných souborech.

/*
// Příklad pro config/server.js
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
*/

/*
// Příklad pro config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
  },
});
*/
