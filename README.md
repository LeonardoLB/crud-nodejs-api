# Simples CRUD usando NodeJs

Este projeto é um simples exemplo para realizar um CRUD(create, read, update and delete)
feito utilizando NodeJs e MongoDb, para controlar as rotas utilizaremos um micro framework
conhecido como Express. O Intuito é manter o projeto o mais simples para facil entendimento.

O Banco de dados optei em manter no Docker, se tiver dificuldades em usar docker, tudo bem!
apenas cópie e cole as instruções que deixei e tudo vai ocorrer bem! ;D

### Vamos precisar de ...

- Npm
- MongoDb
- NodeJS
- Docker

*Caso não queria utilizar o docker, se atente em somente manter os dados de autenticação corretos
 e lembre-se de alterar a string de conexão no arquivo server.js! Good Lucky!

### Instale o mongodb no docker
Assim que o serviço do docker estiver funcionando corretamente em seu pc, execute:
```
docker pull mongo
```
pronto agora você já tem um conteiner com a imagem do mongodb!

### Configure seu usuario no docker
Cópie e cole o código abaixo
```
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=mypassword \
    -d \
    mongo:4 \
```

### Crie um database para inserir os documentos
Cópie e cole o código abaixo
```
docker exec -it mongodb \
    mongo --host localhost -u admin -p mypassword --authenticationDatabase admin \
    --eval "db.getSiblingDB('nodeapi').createUser({user: 'myuser', pwd: 'mypassword', roles: [{role: 'readWrite', db: 'nodeapi'}]})"
```

### Instalando node_modules
Na raíz do projeto execute o codigo abaixo
```
npm install
```

### Execute o arquivo server.js

Agora execute o comando:
```
node server.js
```

Nesse momento as rotas já estão funcionando

### Rotas
Verifique as rotas existentes no link abaixo:
```
https://documenter.getpostman.com/view/5267825/S17qSp7K
```
