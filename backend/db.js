// db.js

import pg from 'pg';


const {Pool} = pg
const pool = new Pool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'estoque',
  port: 5432,
});

export default pool;
