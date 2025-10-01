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
          min: 2, 
          max: 10,
          acquireTimeoutMillis: 120000,
          createTimeoutMillis: 60000,
          destroyTimeoutMillis: 10000,
          idleTimeoutMillis: 300000,
          reapIntervalMillis: 1000,
          createRetryIntervalMillis: 500,
        },
        debug: false,
        useNullAsDefault: true,
        asyncStackTraces: true,
      },
    });