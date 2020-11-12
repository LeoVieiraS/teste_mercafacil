const knexfile = require('../../knexfile');
const knexVarejao = require('knex')(knexfile.varejao);
const knexMacapa = require('knex')(knexfile.macapa);
const knexAuth = require('knex')(knexfile.auth);

//module.exports = knexVarejao;
// module.exports = knexMacapa;


const knex = {
  knexVarejao,
  knexMacapa,
  knexAuth
}
  
module.exports = knex