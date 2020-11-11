// Update with your config settings.

module.exports = {

  varejao: {
    client: 'pg',
    connection: {
      host:"mercafacil_postgresql_1",
      database: "admin",
      user:"admin",
      password:"admin"
    }
  },
  macapa: {
    client: 'mysql',
    connection: {
      host:"mercafacil_mysql_1",
      database: "admin",
      user:"admin",
      password:"admin"
    }
  },
    migrations: {
      tableName: 'knex_migrations'
    }
};
