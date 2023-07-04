# Infnet_Backend_NodeJS_SQL

Trabalho final da disciplina de Backend com NodeJS e SQL

**Banco de dados utilizado:** MySQL

## Rotas

* **[GET] Listar usuários:** http://localhost:3333/users
---
* **[POST] Criar usuário:** http://localhost:3333/users

```json
{
  "username": "Fulano",
  "password": "12345",
  "name": "Fulano de tal",
  "email": "fulano@gmail.com",
  "age": 25,
  "phoneNumber": "55999328754"
}
```
---
* **[GET] Listar cursos:** http://localhost:3333/courses
---
* **[POST] Criar curso:** http://localhost:3333/courses
```json
{
  "name": "Curso de NodeJS + SQL",
  "isAvailable": true
}
```
---
* **[GET] Listar inscrições:** http://localhost:3333/subscription
---
* **[POST] Criar inscrição:** http://localhost:3333/subscription
```json
{
  "UserId": 1,
  "CourseId": 1
}
```
---
* **[DELETE] Remover inscrição:** http://localhost:3333/subscription
```json
{
  "id": 1
}
```
---
* **[POST] Login:** http://localhost:3333/login
```json
{
  "username": "Fulano",
  "password": "12345"
}
```