# Instalação

O banco de dados utilizado foi o postgres devido a grande quantidade de dados de endereços.
o database.js possui as credenciais e as configurações de bancos de dados.
Dentro do diretório docs existe a documentação da API para uso


#passos
1. baixar o projeto ou cloná-lo
2. executar o comando "yarn install" no diretório raíz
3. rodar o comando "yarn sequelize db:migrate" para migrar as tabelas do banco de dados
4. rodar o comando "yarn sequelize db:seed:all" para popular o banco de dados
5. rodar o comando "yarn dev" para iniciar o projeto, será iniciado na porta 3333.


# Ferramentas Utilizadas
-Express
-Eslint
-Sequelize
-Insomnia
-Postgres
