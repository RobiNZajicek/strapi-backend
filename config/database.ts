    // strapi-api/config/database.js
    module.exports = ({ env }) => {
      console.log('🔧 Database config loading...');
      console.log('📊 DB_HOST:', env('DATABASE_HOST'));
      console.log('📊 DB_PORT:', env('DATABASE_PORT'));
      console.log('📊 DB_NAME:', env('DATABASE_NAME'));
      console.log('📊 DB_USER:', env('DATABASE_USERNAME'));
      console.log('📊 DB_SSL:', env('DATABASE_SSL'));
      
      return {
        connection: {
          client: 'postgres',
          connection: {
          host: env('DATABASE_HOST'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME'),
          user: env('DATABASE_USERNAME'),
          password: env('DATABASE_PASSWORD'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        pool: { 
          min: 0, 
          max: 10,
          acquireTimeoutMillis: 60000,
          createTimeoutMillis: 30000,
          destroyTimeoutMillis: 5000,
          idleTimeoutMillis: 30000,
        },
        debug: true,
      },
    };
  };