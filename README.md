<h1 align="center">Hot Wheels collection API</h1>

<h5>URL base para as requisições:</h5>
<a href="https://hw-collection-api.herokuapp.com">https://hw-collection-api.herokuapp.com</a></br>
<a href="https://hw-collection-api.herokuapp.com/users?_embed=userCars">Lista de usuários</a></br>
</br>
Essa API tem o intuito de que seus usuários cadastrem cada carro de sua coleção com dados como nome e ano de lançamento do modelo

## Endpoints

A API conta com 6 endpoints que vão desde o cadastro, login de novos usuários, listagem de dados como os próprios usuários e carrinhos destes, até a adição e remoção das miniaturas.

<h2 align="center">Entrando na API:</h2>

### Cadastro

> POST baseURL/register

Este endpoint irá cadastrar o usuário na lista de users, com campos obrigatórios de email, nome de usuário e senha.

<b>Exemplo de cração de usuário:</b>

```json
{
  "email": "newuser@mail.com",
  "username": "NewOne",
  "password": "123456"
}
```

### Login

> POST baseURL/signin

Já este endpoint fará o login do usuário, os dados necessários para o login são o email e a senha cadas tradas no endpoint anterior, como se pode ver no exemplo a seguir:

<b>Enviado o segintes dados</b></br>

```json
{
  "email": "newuser@mail.com",
  "password": "strongPassword"
}
```

<b>iremos ter como resposta:</b>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzZXJAbWFpbC5jb20iLCJpYXQiOjE2MzUyNjg0MzMsImV4cCI6MTYzNTI3MjAzMywic3ViIjoiMiJ9.fD52Jmf80FJLjRFW3QMB5Cl3InQbDthcyGPVAOeDP2I",
  "user": {
    "email": "newuser@mail.com",
    "username": "NewOne",
    "id": 1
  }
}
```

<h2 align="center">Listando usuários:</h2>

> GET baseURL/users?_embed=userCars

É possível ver a lista de usuários da api e suas respectivas listas de carrinhos sem nehuma barreira de autenticação:

<b>Exemplo de resposta:</b>

```json
[
  {
    "email": "olie@mail.com",
    "password": "$2a$10$OJwEsBRlbiTJwO6vyEidE.2tqIPTgJitOWAx8BSHquGike/bp2vg.",
    "name": "olie",
    "id": 1,
    "userCars": [
      {
        "name": "Datsun 240z",
        "year": "2006",
        "userId": 1,
        "id": 3
      }
    ]
  },
  {
    "email": "jenny@mail.com",
    "password": "$2a$10$0KowRBxMnOot8I4l9grJeetncK7pZuf7KZVZn9bXuUTZ.F4Mx4Pqy",
    "name": "jenny",
    "id": 2,
    "userCars": [
      {
        "name": "70 RoadRunner",
        "year": "1998",
        "quantity": 1,
        "userId": 2,
        "id": 1
      }
    ]
  }
]
```

<h2 align="center">Adicionando carrinhos:</h2>

Para adicionar novos carrinhos a coleção de um usuário, é necessario os dados de nome do modelo, ano de lançamento, e a quantidade de modelos, caso o usuário tenha mais de um.

Alem disso todas os endpoits ralacionados aos carrinhos necessitam de um token de autenticação.

> headers: { Authorization: "Bearer + {token}" }

### Listando

> GET baseURl/userCars

Com esse endpoint é possível listar todos os carrinhos adicionados na API

<b>Resposta:</b>

```json
[
  {
    "name": "thirdcard",
    "year": "2011",
    "userId": 2,
    "id": 1
  },
  {
    "name": "fourthcard",
    "year": "2013",
    "userId": 2,
    "id": 2
  }
]
```

### Adicionando

> POST baseURL/userCars

Junto com os dados do modelo também é necessesário o id do usuário para relacionar o item ao dono

<b>Exemplo:</b>

```json
{
  "name": "firstcar",
  "year": "1999",
  "quantity": "2",
  "userId": 1
}
```

### Removendo

> DELETE baseURL/usercars/${IdDoCarro}

Para remover carros da lista do usuário é nescessario no fim da url incluir o id do objeto, e lembrando de que além disso é necessário o token de autenticação