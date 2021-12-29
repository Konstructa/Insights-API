<h1 align = "center">  📟 Insights API

<p align="center"> 
    <img alt = "Languages" src="https://img.shields.io/github/languages/count/SEU-USUARIO/NOME-DO-REPOSITORIO">
    <img alt = "Tamanho" src="https://img.shields.io/github/repo-size/SEU-USUARIO/NOME-DO-REPOSITORIO">
    <img alt = "Commit" src="https://img.shields.io/github/last-commit/SEU-USUARIO/NOME-DO-REPOSITORIO">
    <img alt = "Issues" src="https://img.shields.io/github/issues/SEU-USUARIO/NOME-DO-REPOSITORIO">
</p>

<p align="center"> 
    <a href="#-Tecnologias">Tecnologias</a>          |
    <a href="#-Projeto">Projeto</a>          |
    <a href="#-Instalação">Instalação</a>
</p>

## :rocket: Tecnologias

- NodeJS

- Express

- Typescript

- MySQL ou MariaDB

- ESLint

- Deploy no Heroku

## :computer: Projeto

Categorias: Back-end, Front-end, Mobile e Design.

Rotas da API:

**GET**

https://api-infoinsights.herokuapp.com/api/insight/1, exibe um único insight de acordo com o ID;

https://api-infoinsights.herokuapp.com/api/insights&page=1, exibe 10 insights por página ;

https://api-infoinsights.herokuapp.com/api/category, exibe todas as categorias disponíveis na API;

https://api-infoinsights.herokuapp.com/api/category/back-end&page=1, exibe todos os elementos da categoria requisitada, organizado em 10 elementos por página;

**POST**

https://api-infoinsights.herokuapp.com/api/insights&page=1

Modelo (image_url é opcional):

```
}
    "title": 
    "description_idea": 
     "classification":
     "ideia_url": 
     "image_url":
} 
```

Deploy desta API: https://api-infoinsights.herokuapp.com/
Front-End desta atividade: https://github.com/laisapereira/infojr-insights 

## :hammer: Instalação

Clone este repositório e utilize o seguinte comando no terminal:

```npm install```

Para rodar a aplicação:

 ```npm run dev```
