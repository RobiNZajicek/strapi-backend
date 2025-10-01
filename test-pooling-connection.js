const { Client } = require('pg');

const client = new Client({
  host: 'aws-1-eu-central-1.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
  user: 'postgres.lllnjfhbqpajydjuvgwh',
  password: 'CuLxRvYQIAdKRZel',
  ssl: {
    rejectUnauthorized: false,
  },
});

console.log('🔄 Testing Supabase POOLING connection...');
console.log('Host:', client.host);
console.log('Port:', client.port);

async function testConnection() {
  try {
    console.log('⏳ Connecting to pooler...');
    await client.connect();
    console.log('✅ Pooler connected successfully!');
    
    const result = await client.query('SELECT version()');
    console.log('✅ Pooler query successful:', result.rows[0].version);
    
    await client.end();
    console.log('✅ Pooler connection closed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Pooler connection failed:', error.message);
    console.error('❌ Error code:', error.code);
    process.exit(1);
  }
}

testConnection();
