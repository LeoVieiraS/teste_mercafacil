// Update with your config settings.

module.exports = {

  varejao: {
    client: 'pg',
    connection: {
      host:"dbpostgres",
      database: "admin",
      user:"admin",
      password:"admin"
    }
  },
  macapa: {
    client: 'mysql',
    connection: {
      host:"dbmysql",
      database: "admin",
      user:"admin",
      password:"admin"
    }
  },
  auth: {
    client: 'pg',
    connection: {
      host:"dbpostgres",
      database: "auth",
      user:"admin",
      password:"admin"
    }

  }
  
};
