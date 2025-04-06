module.exports = [
  {
    name: 'strapi::security',
    config: {
      origin: [
        'https://praguestrikingacademy.cz',
        'https://strapi-backend-app-8zq2.onrender.com'
      ],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'", 
            'data:', 
            'blob:', 
            'https:', 
            'https://strapi-backend-app-8zq2.onrender.com',
            'https://render.com'
          ],
        },
      },
    },
  }
];
