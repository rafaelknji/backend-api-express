# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
JavaScript

- O que é Node.js?
É o ambiente que permite rodar JS fora do navegador, no servidor

- O que é NPM?
Node Packege Manager(NPM) é um gerenciador de pacotes do Node.js, utilizado para instalar e gerenciar dependências em projetos JavaScript

- O que é Express.js?
O Express.js é um framework para Node.js utilizado para facilitar a criação de servidores e APIs, permitindo lidar com rotas e requisições de forma simples.

- O que é uma API?
API (Application Programming Interface), é uma interface que permite sistemas diferentes se comunicarem, enviando pedidos e recebendo respostas (geralmente em JSON). Ela funciona como um “mensageiro” entre frontend, backend e banco de dados, permitindo que aplicativos usem dados ou funcionalidades de outros sistemas.

- Como mudar o formato de importação de "require"(padrão commonjs) para module?

- O que é HTTP?
Hypertext Transfer Protocol(HTTP), permite a comunicação entre cliente e servidor na web.
O cliente (navegador ou app) envia uma requisição para o servidor, o servidor processa a requisição e envia uma resposta de volta.

- Quais os métodos de requisição HTTP e para que serve cada um deles?
Os métodos HTTP são: 
GET: busca dados
POST: cria dados
PUT: atualiza totalmente um recurso
PATCH: atualiza parcialmente
DELETE: remove dados

- Para que serve o --watch ao rodar o servidor?
Observa alterações nos arquivos do projeto, reinicia o servidor automaticamente quando algum arquivo é salvo e evita precisar parar e iniciar o servidor manualmente durante o desenvolvimento.

- Para que serve o Router do Express?
É ma forma de organizar as rotas do servidor em módulos separados. Permite dividir o backend em partes menores e mais organizadas, facilitando a manutenção do código quando o projeto cresce. Cada Router pode ter suas próprias rotas e middlewares.

- O que é um padrão de projeto?
É uma solução pronta e reutilizável para problemas comuns de programação. Facilita o desenvolvimento e manutenção do código, ajuda a organizar o software de forma consistente e permite que outros programadores entendam seu código mais facilmente.

- O que é o padrão de projeto MVC?
Model-View-Controller(MVC), é um padrão de projeto que organiza o código separando responsabilidades em 3 partes:
1 - Model (Modelo)
    Representa os dados e regras de negócio da aplicação.
    Ex: classes que acessam o banco de dados.
2 - View (Visão)
    Responsável pelo que o usuário vê.
    Ex: páginas HTML, templates ou respostas JSON em uma API.
3 - Controller (Controlador)
    Faz a intermediação entre Model e View.
    Recebe requisições, chama o Model e envia a resposta para a View.

- Qual a responsabilidade de cada Camada?


- o que é ORM?


- Quais as vantagens de utilizar ORM?


- Como utilizar parâmetros de URL?


- O que é Middlerare? (Exemplo Logger)



# Comandos Prisma
Instalação

npm i prisma -D
npm i dotenv para Mysql e Mariadb npm install @prisma/client @prisma/adapter-mariadb mariadb
Inicia o Prisma

npx prisma init --datasource-provider mysql --output ../generated/prisma
Gera o banco de dados a partir do schema do prisma

npx prisma db push
Gera o schema do prisma a partir do banco de dados

npx prisma db push
Gerar as funções para interagir com os modelos mapeados no schema

npx prisma generate