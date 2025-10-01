    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: 'aws-1-eu-central-1.pooler.supabase.com',
          port: 6543,
          database: 'postgres',
          user: 'postgres.lllnjfhbqpajydjuvgwh',
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