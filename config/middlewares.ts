module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://strapi-backend-app-8zq2.onrender.com',
            'https://*.render.com',
            'https://res.cloudinary.com',
            'https://*.cloudinary.com'
          ],
        },
      },
    },
  },
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '50mb',
      formLimit: '50mb',
      textLimit: '50mb',
      formidable: {
        maxFileSize: 50 * 1024 * 1024 // 50MB
      }
    }
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public'
];