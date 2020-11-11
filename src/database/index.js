const knexfile = require('../../knexfile');
const knexVarejao = require('knex')(knexfile.varejao);
const knexMacapa = require('knex')(knexfile.macapa);

//module.exports = knexVarejao;
// module.exports = knexMacapa;


const knex = {
  knexVarejao,
  knexMacapa
}
  
module.exports = knex