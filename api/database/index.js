const path = require('path')

module.exports = {
  client: 'pg',
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 5432,
    host: process.env.DB_HOST,
    ssl: true
  },
  pool: { min: 1, max: 100 },
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds')
  }
}
