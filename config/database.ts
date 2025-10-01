    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: 'lllnjfhbqpajydjuvgwh.supabase.co',
          port: 5432,
          database: 'postgres',
          user: 'postgres',
          password: 'CuLxRvYQIAdKRZel',
          ssl: {
            rejectUnauthorized: false,
          },
        },
        pool: { 
          min: 0, 
          max: 5,
          acquireTimeoutMillis: 300000,
          createTimeoutMillis: 120000,
          destroyTimeoutMillis: 5000,
          idleTimeoutMillis: 30000,
        },
        debug: false,
        useNullAsDefault: true,
        asyncStackTraces: true,
      },
    });