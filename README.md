# Processo Seletivo Backend Mercafácil

## Como rodar


### Pré-requisitos
[Docker](https://www.docker.com/)

[Docker compose](https://docs.docker.com/compose/install/) 

  ## Comandos
  
  
  Clonando o repositório

    git clone https://github.com/LeoVieiraS/teste_mercafacil.git
    cd teste_mercafacil

  Criando arquivo .env

    cp .env.example .env

  Subindo os containers

    docker-compose up -d

  ## Configurando banco de dados dentro dos containers
  Criando tabela para o cliente macapa

    docker cp ./sql/create-table-macapa.sql dbmysql:/

    docker exec dbmysql /bin/bash -c 'mysql -u admin -padmin < /create-table-macapa.sql'

  Criando tabela para o cliente varejão


    docker cp ./sql/create-table-varejao.sql dbpostgres:/

    docker exec dbpostgres /bin/bash -c 'psql admin admin -f create-table-varejao.sql'

  Criando banco de dados de autenticação


    docker cp ./sql/create-database-auth.sql dbpostgres:/

    docker exec dbpostgres /bin/bash -c 'psql admin admin -f create-database-auth.sql'

Criando a tabela de usuarios e inserindo registros

    docker cp ./sql/create-table-auth.sql dbpostgres:/

    docker exec dbpostgres /bin/bash -c 'psql auth admin -f create-table-auth.sql'
***
Apos as configurações de banco de dados, estará disponivel para realizar o login dois usuários, 1 para cada cliente.

### usuario varejão
  email: email@varejao.com  
  senha: admin

  ### usuario macapa
  email: email@macapa.com  
  senha: admin

  ## ENDPOINTS
  Login

    POST /login

  Inserir Registro para o cliente macapa

    POST /macapa/contact

  Listar os registros inseridos no cliente macapa

    GET /macapa/contact

  Inserir Registro para o cliente varejao

    POST /varejao/contact

  Listar os registros inseridos no cliente varejao

    GET /varejao/contact
***
## LOGIN E JWT TOKEN
### Exemplo de login

    POST http://localhost:3333/login
  
  enviar JSON no corpo da requisição, exemplo:

      {
        "email":"email@macapa.com",
        "pass":"admin"
      }
  API ira retornar o JWT Token, exemplo de retorno:

       {
        "auth": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2MDUxOTYxOTMsImV4cCI6MTYwNTE5NjQ5M30.G8_hBf4C75kqWItaemnw3erkpYy6qeaSv6qFeDjija4"
      }

  Cada token tem a duração de 1 hora, após esse tempo é necessario realizar o login novamente.

  ### API ficará disponivel em http://localhost:3333