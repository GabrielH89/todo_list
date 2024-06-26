# TO DO List

## Lista de tarefas
![GitHub repo size](https://img.shields.io/github/repo-size/GabrielH89/todo_list)
![GitHub language count](https://img.shields.io/github/languages/count/GabrielH89/todo_list)

![project_image](https://github.com/GabrielH89/todo_list/assets/67241633/2f5488cc-5a1f-441b-b0cd-74301b9e2e37)

## Tecnologias usadas no projeto: 
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Descrição
Projeto simples que permite a inserção, alteração e remoção de tarefas pelo usuário.   

## Requisitos
Tenha o npm e o node Js instalados na sua máquina

## Instalação
1. Execute o comando: git clone git@github.com:GabrielH89/todo_list.git

#### No diretório backend
1. Estando no diretório backend, execute o comando $ npm install.

2. Crie um arquivo .env e insira as variáveis presentes no arquivo .env.example na raíz do diretório backend.

3. Com o mysql instalado na sua máquina, insira o seguinte comando para criar o banco de dados: $mysql -u seu_usuario_mysql -p -e "CREATE DATABASE IF NOT EXISTS nomedobanco"
Após isso, digite o comando: $mysql -u root -p todo_list2 -e "source ./config/connection_DB/create_table.sql", para criar a tabela tasks no banco de dados que você criou.

4. Execute o comando $ npm run dev 

#### No diretório frontend
1. Dentro do diretório frontend, execute o comando $ npm install.   
2. Lembre-se de manter a porta do frontend igual à do backend para garantir a conexão.
3. Após as dependências serem instaladas, através do comando anterior, o projeto está pronto para funcionar em sua própria máquina, com o comando $ npm run dev, que mostrará em qual porta está rodando a aplicação, geralmente a localhost:5173.

