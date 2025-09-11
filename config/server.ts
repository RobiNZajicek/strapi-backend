export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  url: env('PUBLIC_URL', 'https://strapi-backend-806198347052.europe-west3.run.app'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
