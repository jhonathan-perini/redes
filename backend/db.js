// db.js

import pgPromise from 'pg-promise';

const pgp = pgPromise();

const initDb = () => {
  const db = pgp('postgres://user:password@db:5432/yourdbname');
  return db;
};

export default initDb;
