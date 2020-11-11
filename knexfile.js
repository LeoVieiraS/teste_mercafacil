// Update with your config settings.

module.exports = {

  varejao: {
    client: 'pg',
    connection: {
      host:"dbvarejao",
      database: "admin",
      user:"admin",
      password:"admin"
    }
  },
  macapa: {
    client: 'mysql',
    connection: {
      host:"dbmacapa",
      database: "admin",
      user:"admin",
      password:"admin"
    }
  }
  
};
