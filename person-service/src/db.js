const Pool = require('pg-pool');

require('dotenv').config();

const POSTGRES_URI = new URL(process.env.POSTGRES_URI);

POSTGRES_USER = POSTGRES_URI.username;
POSTGRES_PASSWORD = POSTGRES_URI.password;

POSTGRES_HOST = POSTGRES_URI.hostname;
POSTGRES_PORT = POSTGRES_URI.port;

POSTGRES_DATABASE = POSTGRES_URI.pathname.split('/')[1];

const pool = new Pool({
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  database: POSTGRES_DATABASE,
});

module.exports = {
	pool
};
