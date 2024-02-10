# Challange: Nginx with Node.js

## PT

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.
Suba tudo em um repositório e faça a entrega.
* A linguagem de programação para este desafio é Node/JavaScript.

### Passos para execução

- clone o repo
- Execute o comando: `docker-compose up`
- Acesse `http://localhost:8080`

## PT

In this challenge you will put into practice what we learned about using nginx as a reverse proxy. The main idea is that when a user accesses nginx, it will make a call to our node.js application. This application will in turn add a record to our mysql database, registering a name in the people table.
The return from the node.js application to nginx should be:

<h1>Full Cycle Rocks!</h1>
- List of names registered in the database.
Generate docker-compose in a way that we just need to run: docker-compose up -d and everything should be working and available on port: 8080.
Upload everything to a repository and deliver it.
* The programming language for this challenge is Node/JavaScript.

### Run stpes

- clone the repo
- Run the command: `docker-compose up`
- Access `http://localhost:8080`
