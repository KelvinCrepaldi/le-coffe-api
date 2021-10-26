<h1 align="center">HotWheels collection API</h1>

Essa API tem o intuito de que seus usuários cadastrem cada carro de sua coleção com dados como nome e ano de lançamento do modelo

## Endpoints

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

<h2 align="center">Entrando na API:</h2>

### Cadastro

>POST baseURL/register

Este endpoint irá cadastrar o usuário na lista de "Users", com campos obrigatórios de email, nome de usuário e senha.

### Login

>POST baseURL/signin

Já este endpoint fará o login do usuário, os dados necessários para o login são o email e a senha cadas tradas no endpoint anterior, como se pode ver no exemplo a seguir:

<b>Enviado o segintes dados</b></br>
```json
{
  "email": "newuser@mail.com",
  "password": "strongPassword"
}
```
<b>iremos ter como resposta:</b></br>
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

>GET baseURL/users

É possível ver a lista de usuários da api e suas respectivas listas de carrinhos sem nehuma barreira de autenticação:

<b>Exemplo de resposta:</b>
```json
[
  {
    "email": "newuser@mail.com",
    "password": "$2a$10$wy10V8dsaeMw/giBaD4WH.y9RzC/ugvHwWhipWAJ1XHj/IfU4onz6",
    "username": "NewOne",
    "id": 2,
    "userCars": []
  },
  {
    "email": "olie@mail.com",
    "password": "$2a$10$WiNl.4ArWndExwePnc9IquDXmsm9ZwPJDzNFjHdAUi0/nXnDtlCwS",
    "username": "olie",
    "id": 3,
    "userCars": [
      {
        "name": "firstcar",
        "year": "1999",
        "userId": 3,
        "id": 1
      }
    ]
  }
]
```
<h2 align="center">Adicionando carrinhos:</h2>

Para adicionar novos carros a coleção de um usuário, é necessario os dados de nome do modelo, ano de lançamento, e a quantidade de modelos, caso o usuário tenha mais de um. 

ALem disso todas os endpoits ralacionados as minituras necessitam de um token de autenticação.

> Headers: { Authorization: "Bearer + {token}" }

### Adicionando

>POST baseURL/userCars

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