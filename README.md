# Le Coffe API

#Endpoints

Existem 3 endpoints que podem ser utilizados para cadastro e 2 para login, de acordo com a documentação do JSON-Server-Auth (https://www.npmjs.com/package/json-server-auth).

Tambem foram criados 4 endpoints que podem ser usados para manipular a base de dados da API, sendo possivel administrar produtos, carrinhos, comentarios e outros.

### Cadastro

Qualquer um desses endpoins pode ser usado para cadastrar um usuário na lista de "users".

Os dados obrigatórios são de email e password, também necessarios para fazer o login.

É possível adicionar outras informações no corpo da requisição do usuário.

POST /register <br />
POST /signup <br />
POST /users <br />

`Exemplo de requisição <br /> POST - https://le-coffe-api.herokuapp.com/signup`

```json
{
  "email": "user@mail.com",
  "password": "password123",
  "name": "User Name"
}
```

`Resposta - 201 Created`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2MzY0MDE4ODEsImV4cCI6MTYzNjQwNTQ4MSwic3ViIjoiNCJ9.hCcRPnE5643Cfsf-zMmpvbnjoDokb-YQoNCL9AyyUy4",
  "user": {
    "email": "user@mail.com",
    "name": "User Name",
    "id": 4
  }
}
```

### Login

Qualquer um dessesn 2 endpoins pode ser usado para realizar login com um dos usuários cadastrados da lista de "users"

POST /login <br/>
POST /signin <br/>

`Exemplo de requisição <br /> POST - https://le-coffe-api.herokuapp.com/login`

```json
{
  "email": "user@mail.com",
  "password": "password123"
}
```

`Resposta - 200 OK`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2MzY0MDE4ODEsImV4cCI6MTYzNjQwNTQ4MSwic3ViIjoiNCJ9.hCcRPnE5643Cfsf-zMmpvbnjoDokb-YQoNCL9AyyUy4",
  "user": {
    "email": "user@mail.com",
    "name": "User Name",
    "id": 4
  }
}
```
