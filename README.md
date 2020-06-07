<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src="https://raw.githubusercontent.com/julionery/ecoleta-web-react/42df1319f325b073d306f70b6e4bd643b8bb959e/src/assets/logo.svg">
</h3>
<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
  <a>
  <img alt="License" src="https://img.shields.io/github/license/vitorserrano/ecoleta?color=%237519C1">
</p>

<p align="center">
  <a href="#api">API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#web">WEB</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-melhorias">Melhorias</a>&nbsp;&nbsp;&nbsp;
</p>

<h2 align="center">Rocketseat - Next Level Week #01</h2>

<p>O <b>Ecoleta</b> é uma aplicação Web e Mobile elaborada para ajudar pessoas a encontrarem pontos de coleta para reciclagem em sua cidade.</p>

Este projeto foi elaborado na trilha <b>Booster</b> da <b>Next Level Week #01</b> fornecida gratuitamente pela [Rocketseat](https://rocketseat.com.br/).

<h3 align="center">
    <img alt="Web" title="Web" src="https://github.com/julionery/docs/blob/master/NLW-01/ecoleta-web.gif?raw=true">
 </h3>   
 <h3 align="center">
<img alt="Mobile" title="Mobile" width="300px" src="https://github.com/julionery/docs/blob/master/NLW-01/ecoleta.gif?raw=true">
        
</h3>

<i id="api"></i>

# :cloud: [Servidor - API](https://github.com/julionery/ecoleta-server-nodejs)
### :rocket: Tecnologias:
 - [NodeJS](https://nodejs.org/en/)
 - [TypeScript](https://www.typescriptlang.org/)
 
### :computer: Bibliotecas e ferramentas:
- [Knex](http://knexjs.org/) - Construtor de consultas SQL para Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle e Amazon Redshift.
- [Express](https://expressjs.com/) - Utilizada para auxiliar na construção da api.
- [Multer](https://github.com/daryl/mutter) - Utilizada para upload de imagens.
- [Celebrate](https://github.com/arb/celebrate) - Utilizada para fazer as validações dos campos.

### :information_source: Como Usar:

Para executar corretamente esta aplicação você precisará do [Git](https://git-scm.com) e [NodeJS](https://nodejs.org/en/) já instalados. 

No seu terminal digite os comandos:

```bash
# Clone este repositório
$ git clone https://github.com/julionery/ecoleta-server-nodejs.git

# Vá para a pasta do repositório
$ cd ecoleta-server-nodejs/

# Instale as dependências
$ npm install

# Crie o banco de dados
$ npm run knex:migrate
$ npm run knex:seed

# Inicie a aplicação
$ npm run dev

```

<i id="web"></i>

# :earth_americas: [Aplicação WEB](https://github.com/julionery/ecoleta-web-react)
### :rocket: Tecnologias:
 - [React](https://reactjs.org/ "ReactJS")
 - [TypeScript](https://www.typescriptlang.org/)

### :computer: Bibliotecas e ferramentas:
 - [Axios](https://github.com/axios/axios "Axios")
 - [React Icons](https://react-icons.github.io/react-icons/)
 - [React Router](https://reacttraining.com/react-router/)
 - [API - IBGE](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1)
 - [React Dropzone](https://github.com/react-dropzone/react-dropzone)
 - [Yup - Validations](https://github.com/jquense/yup)
 - [Toastfy](https://github.com/fkhadra/react-toastify)
 
### :earth_americas: Maps:
 - [Leaflet](https://leafletjs.com/)
 - [React-Leaflet](https://react-leaflet.js.org/)

### :information_source: Como Usar:

Para executar corretamente esta aplicação você precisará do [Git](https://git-scm.com) e [NodeJS](https://nodejs.org/en/) já instalados. E da aplicação [(Servidor - API)](https://github.com/julionery/ecoleta-server-nodejs) devidamente configurada.  

No seu terminal digite os comandos:

```bash
# Clone este repositório
$ git clone https://github.com/julionery/ecoleta-web-react.git

# Vá para a pasta do repositório
$ cd ecoleta-web-react/

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start

```

<i id="mobile"></i>
 
# :iphone: [Aplicação Mobile](https://github.com/julionery/ecoleta-mobile-react-native)
### :rocket: Tecnologias:
 - [React Native](https://reactnative.dev/ "React Native")
 - [TypeScript](https://www.typescriptlang.org/)

### :computer: Bibliotecas e ferramentas:
 - [Expo](https://expo.io/ "Expo")
 - [React Navigation](https://reactnavigation.org/ "React Navigation")
 - [Axios](https://github.com/axios/axios "Axios")
 - [MailComposer](https://docs.expo.io/versions/latest/sdk/mail-composer/)

### :information_source: Como Usar:

Para executar corretamente esta aplicação você precisará do [Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) já instalados. E da aplicação [(Servidor - API)](https://github.com/julionery/ecoleta-server-nodejs) devidamente configurada e é essencial ter o [Expo](https://expo.io/) instalado de forma global na máquina.  

No seu terminal digite os comandos:

```bash
# Clone este repositório
$ git clone https://github.com/julionery/ecoleta-mobile-react-native.git

# Vá para a pasta do repositório
$ cd ecoleta-mobile-react-native/

# Instale as dependências
$ npm install
$ expo install

# Inicie a aplicação
$ npm start

```

# :computer: Melhorias
:heavy_check_mark: Melhorado as validações do cadastro no servidor e no aplicação web.

:heavy_check_mark: Adicionado as mensagens de erro na aplicação web.

:heavy_check_mark: Atualizado as campos de UF e Cidade na aplicação mobile para um campo de seleção buscando os dados da API do IBGE.

---

<h4 align="center">
    Feito com ❤ por <a href="https://www.linkedin.com/in/julio-nery/" target="_blank">Júlio Nery</a>!
    <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png">👋</g-emoji>
</h4>
