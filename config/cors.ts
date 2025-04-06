module.exports = {
    origin: [
      'https://praguestrikingacademy.cz',
      'https://strapi-backend-app-8zq2.onrender.com',
      'http://localhost:1337' // pro vývoj
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