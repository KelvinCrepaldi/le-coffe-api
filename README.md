# Le Coffe API

Esse é o repositório com base de JSON-Server + Json-Server-Auth, feita para ser usada no desenvolvimento do projeto Le Coffe, para o Capstone do Q2.

# Endpoints

Existem 3 endpoints que podem ser utilizados para cadastro e 2 para login, de acordo com a documentação do JSON-Server-Auth (https://www.npmjs.com/package/json-server-auth).

Tambem foram criados 4 endpoints que podem ser usados para manipular a base de dados da API, sendo possivel administrar produtos, carrinhos, comentarios e outros.

## Cadastro e Login de Usuário

### Cadastro

Qualquer um desses endpoins pode ser usado para cadastrar um usuário na lista de "users".

Os dados obrigatórios são de email e password, também necessarios para fazer o login.

É possível adicionar outras informações no corpo da requisição do usuário.

POST /register <br />
POST /signup <br />
POST /users <br />

`Exemplo de requisição`
`POST - https://le-coffe-api.herokuapp.com/signup`

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

Qualquer um desses 2 endpoins pode ser usado para realizar login com um dos usuários cadastrados da lista de "users"

POST /login <br/>
POST /signin <br/>

`Exemplo de requisição`
`POST - https://le-coffe-api.herokuapp.com/login`

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

## Produtos

É possivel acessar a lista de produtos disponíveis

GET /products <br />

### GET products

`Exemplo de requisição`
`GET - https://le-coffe-api.herokuapp.com/products`

```json
[
  {
    "id": 1,
    "name": "Caffezero",
    "category": "Moido",
    "price": 29.99,
    "description": "Café moido por moinhos de vento de Minas Gerais",
    "sca": 80
  },
  {
    "id": 2,
    "name": "Kopi Luwak",
    "category": "Grão",
    "price": 150.99,
    "description": "Café exótico oriundo do sul e sudeste da Ásia",
    "sca": 55
  }
]
```

## Avaliação dos produtos

É possivel administrar a avaliação dos produtos com pontuação e comentário.

GET /productsRating
POST /productsRating
DELETE /productsRating

### GET productsRating

`Exemplo de requisição`
`GET - https://le-coffe-api.herokuapp.com/productsRating`
`Resposta - 200 OK`

```json
[
  {
    "userId": 1,
    "productsId": 1,
    "text": "Muito bom esse café, nota 10",
    "rating": 5
  },
  {
    "userId": 2,
    "productsId": 1,
    "text": "Não gostei muito, amargo demais",
    "rating": 3
  },
  {
    "userId": 3,
    "productsId": 2,
    "text": "Entrega super rapida, e o café muito bom",
    "rating": 4
  }
]
```

### POST ratingProducts

`Exemplo de requisição`
`POST - https://le-coffe-api.herokuapp.com/ratingProducts`

```json
{
  "userId": 4,
  "productsId": 2,
  "text": "message",
  "rating": 5
}
```

`Resposta - 200 OK`

```json
{
  "userId": 4,
  "productsId": 2,
  "text": "message",
  "rating": 5,
  "id": 4
}
```

`Possível erro - 403 Forbidden`
É necessario identificar o Id do usuário que está fazendo a avaliação do produto, caso coloque outro Id ou nenhum a resposta será o erro:

```json
"Private resource creation: request body must have a reference to the owner id"
```

### DELETE ratingProducts

`Exemplo de requisição`
`DELETE - https://le-coffe-api.herokuapp.com/ratingProducts/1`

`Resposta - 200 OK`

<br />
`Possivel erro - 401 Unauthorized`

O recurso só pode ser deletado se o usuário possuir o mesmo Id do dono do recurso, ou se o recurso existir.

```json
"Cannot read properties of undefined (reading 'userId')"
```
