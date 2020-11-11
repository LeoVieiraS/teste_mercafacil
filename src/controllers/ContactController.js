const knex = require('../database');

module.exports = {
  async insertVarejao(req, res){
    const {contacts} = req.body;
    var invalid_contacts = [];

    const total_contacts = contacts.length;

    await contacts.forEach(async(contact) => {
      //console.log(contact);

      const insert = await knex.knexVarejao('contacts')
        .insert(
          {
            nome:contact.name,
            celular:contact.cellphone
          }
        )
        .then((data) => {
          return data;
          //console.log(`nome:${contact.nome} celular: ${contact.celular} inserido com sucesso`);
        })
        .catch((error)=>{
          return false;
        })

        console.log(`Resultado insert ${insert}`);

        !insert ? invalid_contacts.push(contact) : '';

        console.log(` invalidos dentro do foreach ${invalid_contacts}`);
      
    }); 
        
    console.log(` invalidos FORA do foreach ${invalid_contacts}`);
    const total_invalid = invalid_contacts.length;

    return res.status(200).json({total_contacts,total_invalid});
  },

  async indexVarejao(req, res){
    const contacts = await knex.knexVarejao('contacts').returning('*');
    return res.json(contacts);

  },
  async indexMacapa(req,res){
    return knex.knexMacapa('contacts').then((results) => res.json(results));
  },
  async insertMacapa(req,res){

    const {contacts} = req.body;

    contacts.forEach(async(contact) => {
      const name = contact.name.toUpperCase();
      var cellphone = contact.cellphone;
      cellphone = cellphone.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, "+$1 ($2) $3-$4");

      await knex.knexMacapa('contacts')
        .insert({
            nome:name,
            celular:cellphone}
        )
        .then((data) => {

        })
        .catch((error)=>{
          console.log(error)

        });
        ;

      //isValid = cellphone.length != 19 ? false: true
      //console.log(isValid);

      //console.log(name);
    });

    return res.status(200).json({status:"sufffccess"});

  }

}