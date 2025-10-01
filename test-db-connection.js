const { Client } = require('pg');

const client = new Client({
  host: 'lllnjfhbqpajydjuvgwh.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'CuLxRvYQIAdKRZel',
  ssl: {
    rejectUnauthorized: false,
  },
});

console.log('🔄 Testing Supabase connection...');
console.log('Host:', client.host);
console.log('Port:', client.port);
console.log('Database:', client.database);
console.log('User:', client.user);

async function testConnection() {
  try {
    console.log('⏳ Connecting...');
    await client.connect();
    console.log('✅ Connected successfully!');
    
    console.log('⏳ Testing query...');
    const result = await client.query('SELECT version()');
    console.log('✅ Query successful:', result.rows[0].version);
    
    await client.end();
    console.log('✅ Connection closed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error details:', error);
    process.exit(1);
  }
}

testConnection();
