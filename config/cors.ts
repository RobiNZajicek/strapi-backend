module.exports = {
    origin: [
      'https://praguestrikingacademy.cz',
      'https://strapi-backend-app-8zq2.onrender.com',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    headers: [
      'Content-Type',
      'Authorization',
      'Origin',
      'Accept'
    ],
    keepHeaderOnError: true
  };