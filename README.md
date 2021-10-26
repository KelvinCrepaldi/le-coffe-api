<h1 align="center">HotWeels collection API</h1>

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
    "id": 2
  }
}
```