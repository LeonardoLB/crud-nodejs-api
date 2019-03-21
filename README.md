# Simples CRUD usando NodeJs

### Alguns softwares necessários

- Npm
- MongoDb
- NodeJS
- Docker

*Caso não queria utilizar o docker, se atente em somente manter os dados de autenticação corretos
 e lembre-se de alterar a string de conexão no arquivo server.js

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
