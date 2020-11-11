# TESTE BACKEND MERCAFACIL

## Como rodar

### Pré-requisitos
[Docker](https://www.docker.com/)

[Docker compose](https://docs.docker.com/compose/install/) 

  #### Comandos

    git clone https://github.com/LeoVieiraS/teste_mercafacil.git
    cd teste_mercafacil
    docker-compose up -d

    docker cp ./create-table-macapa.sql dbmacapa:/
    docker exec dbmacapa /bin/bash -c 'mysql -u root -padmin < /create-table-macapa.sql'

    docker cp ./create-table-varejao.sql dbvarejao:/
    docker exec dbvarejao /bin/bash -c 'psql admin admin -f create-table-varejao.sql'
