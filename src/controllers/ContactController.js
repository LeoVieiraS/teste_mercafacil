const knex = require('../database');

module.exports = {
  async insertVarejao(req, res){
    const {contacts} = req.body;
    var invalid_contacts = [];
    var valid_contacts = []

    const total_contacts = contacts.length;

     contacts.forEach(contact => {
      //Valida os parametros
      if(!contact.name || !contact.cellphone || contact.cellphone.length != 13){
        invalid_contacts.push(contact)
        return
      }


      //insere numa lista de contatos validos ja utilizando o mesmo nome da coluna na tabela para poder passar diretamente a lista ao knex
      valid_contacts.push({nome:contact.name,celular:contact.cellphone})

    }); 
    // insere a lista valida no banco
    await knex.knexVarejao('contacts')
        .insert(valid_contacts)
        .then(data => {})
        .catch(error => {
          return res.send(500).json({error:"Error at insert data"})
        });

    return res.status(200).json({
                                  success:valid_contacts.length,
                                  errors:invalid_contacts.length,
                                  invalid_contacts:invalid_contacts});
  },

  async indexVarejao(req, res){
    const contacts = await knex.knexVarejao('contacts').returning('*');
    return res.json(contacts);

  },
  
  async indexMacapa(req,res){
    const contacts = await knex.knexMacapa('contacts')
    return res.json(contacts);
  },
  async insertMacapa(req,res){
    invalid_contacts = [];
    valid_contacts = [];

    const {contacts} = req.body;

    contacts.forEach(contact =>{
      // valida os registros
      if(!contact.name || !contact.cellphone || contact.cellphone.length != 13){
        invalid_contacts.push(contact);
        return
      }
      
  
      const name = contact.name.toUpperCase();
      cellphone = contact.cellphone.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, "+$1 ($2) $3-$4");

      valid_contacts.push({nome:name,celular:cellphone});

    });
    //insere a lista valida no banco
    await knex.knexMacapa('contacts')
    .insert(valid_contacts)
    .then((data) => {})
    .catch((error)=>{
      return res.send(500).json({error:"Error at insert data"})
    });

    return res.status(200).json({
      success:valid_contacts.length,
      errors:invalid_contacts.length,
      invalid_contacts:invalid_contacts});
  }

}