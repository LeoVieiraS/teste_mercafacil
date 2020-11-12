require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const knex = require('../database');

module.exports = {

  async login(req,res) {

    const {email, pass} = req.body;

    // busca o usuario no banco de dados
    const [id] = await knex.knexAuth('users').where({
      email: email,
      pass:  pass
    }).select('id');

    //retorna erro se nao encontrar o usuario
    if(!id){
      return res.status(401).json({error:"Not Allowed"});
    }
    const user_id = id.id;

    // cria o JWT
    const token = jwt.sign({ user_id }, process.env.SECRET, {
      expiresIn: 300 // expira em 5 minutos
    });

    await knex.knexAuth('users').where('id', '=',user_id).update({token});
    return res.json({ auth: true, token: token });

  }
}