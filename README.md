# Processo Seletivo Backend Mercafácil

## Como rodar


### Pré-requisitos
[Docker](https://www.docker.com/)

[Docker compose](https://docs.docker.com/compose/install/) 

  #### Comandos

    git clone https://github.com/LeoVieiraS/teste_mercafacil.git
    cd teste_mercafacil

    docker-compose up -d


    docker cp ./sql/create-table-macapa.sql dbmysql:/

    docker exec dbmysql /bin/bash -c 'mysql -u admin -padmin < /create-table-macapa.sql'


    docker cp ./sql/create-table-varejao.sql dbpostgres:/

    docker exec dbpostgres /bin/bash -c 'psql admin admin -f create-table-varejao.sql'


    docker cp ./sql/create-database-auth.sql dbpostgres:/

    docker exec dbpostgres /bin/bash -c 'psql admin admin -f create-database-auth.sql'


    docker cp ./sql/create-table-auth.sql dbpostgres:/

    docker exec dbpostgres /bin/bash -c 'psql auth admin -f create-table-auth.sql'
