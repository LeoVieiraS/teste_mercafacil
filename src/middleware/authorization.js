require("dotenv-safe").config();
const { decode } = require("jsonwebtoken");
const jwt = require('jsonwebtoken');
const knex = require("../database");

module.exports = {
  async verifyJWT(req, res, next){
    //console.log(req);
    const token = req.headers['authorization'];

    //pega o nome do endpoint para identificar o banco do cliente que o user está querendo acessar
    const client = req.url.split('/')[1];

    // retorna erro se nao tiver enviado token
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      //retorna erro se o token nao estiver mais valido/expirado
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      req.userId = decoded.user_id;
    });

    const [user] = await knex.knexAuth('users').where({
      token: token
    }).select('role');

    //retorna erro se o cliente de um banco tentar acessar dados de outro
    if(user.role != client){
      return res.status(401).json({ auth: false, message: 'Unauthorized' });
    }

    next();
  }
}
