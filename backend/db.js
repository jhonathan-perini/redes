// db.js

import pg from 'pg';


const {Pool} = pg
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'estoque',
  port: 5432,
});

export default pool;
