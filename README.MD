# Criação de um Serviço RESTful

## Alunos

- [Maycon Felipe Mota](https://github.com/felipegaleao)
- [Vitor Oliveira](https://github.com/VitorORBrandao)

## 🎯 Objetivo

O objetivo é colocar em prática os conhecimentos relacionados às definições de serviços web e suas aplicações.

Para isso deve ser feito a implementação do serviço com base nas definições feitas em sala de aula usando a ferramenta [Swagger](https://swagger.io). Basicamente, o serviço inicialmente irá consistir de dois endpoints principais:

- [X]  Busca de repositórios: Endpoint que permite a busca de repositórios pelo nome e os resultados são paginados.
- [X]  Obtenção de dados de um repositório: Endpoint que permite obter os dados de um determinado repositório.

## 🔪 Ferramentas

Para a implementação do serviço, deve ser utilizado o framework [Express](https://expressjs.com) e [NodeJS](https://nodejs.org/en/).
Para a documentação do serviço, deve ser utilizado o [Swagger](https://swagger.io).

## 📑 Definição de endpoints

Abaixo segue o documento Swagger com as definições dos endpoints:

[swagger-doc.yaml](swagger-doc.yaml)

São essencialmente as definições feitas em sala de aula com a adição dos schemas dos dados.

## 📊 Composição da nota

A atividade será avaliada seguindo os seguintes critérios:

- [X]  **60% da nota** será com base na implementação básica do serviço, ou seja, se ele apresenta o comportamento definido e esperado.
- [ ]  **20%** será destinado a queles alunos que projetarem e implementarem o serviço usando dos conceitos do DDD (Domain Driven Design).
- [ ]  **10%** será destinado à organização e qualidade do código do projeto do serviço.
- [X]  **10%** será atribuído a queles grupos que integrarem a documentação no serviço.

## 🆘 Como executar o projeto?

O projeto foi desenvolvido utilizando a última imagem de [NodeJS](https://hub.docker.com/_/node) disponível no Docker Hub. Para executar o projeto, basta executar o comando abaixo:

```bash
docker-compose up --build
```

Para executar os testes, basta executar o comando abaixo:

```bash
npm test
```

```text
  GET /repos/find
    ✔ Buscar repo - Nome não informado

  GET /repos/find
    ✔ Buscar repo - Nome informado

  GET /repos/:repoId
    ✔ Buscar repo - Id informado
```

Para acessar a documentação do serviço, basta acessar o endereço [http://localhost:3000/docs](http://localhost:3000/docs) no navegador.
