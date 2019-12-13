// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/hackathon-portal.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    pool:{
    afterCreate: (conn, cb) =>
       conn.run('PRAGMA foreign_keys = ON', cb)
    }
  }
};
