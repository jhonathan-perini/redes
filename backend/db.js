// db.js

import pgPromise from 'pg-promise';

const pgp = pgPromise();

const initDb = () => {
  const db = pgp(process.env.POSTGRES_URI);
  return db;
};

export default initDb;
