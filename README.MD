<h1 align = "center">  📟 Insights API

<h2 align="center"> 
    <img alt = "Languages" src="https://img.shields.io/github/languages/count/Konstructa/Insights-API">
    <img alt = "Tamanho" src="https://img.shields.io/github/repo-size/Konstructa/Insights-API">
    <img alt = "Commit" src="https://img.shields.io/github/last-commit/Konstructa/Insights-API">
    <img alt = "Issues" src="https://img.shields.io/github/issues/Konstructa/Insights-API">
</h2>

<h2 align="center"> 
    <a href="#rocket-tecnologias">Tecnologias</a>          |
    <a href="#computer-projeto">Projeto</a>          |
    <a href="#hammer-instalação">Instalação</a>
</h2>

## :rocket: Tecnologias

- NodeJS

- Express

- Typescript

- MySQL

- ESLint

- Deploy no Heroku

## :computer: Projeto

Categorias: Back-end, Front-end, Mobile e Design.

Rotas da API:

**GET**

- https://api-infoinsights.herokuapp.com/api/vitrine, exibe 5 elementos, sendo cada um/dois mais recente de cada categoria;

- https://api-infoinsights.herokuapp.com/api/insight/:id, exibe um único insight de acordo com o ID;

- https://api-infoinsights.herokuapp.com/api/insights&page=:page, exibe 10 insights por página ; 

- https://api-infoinsights.herokuapp.com/api/category, exibe todas as categorias disponíveis na API;

- https://api-infoinsights.herokuapp.com/api/category/:category&page=:page, exibe todos os elementos da categoria requisitada, organizado em 10 elementos por página;

**POST**

- https://api-infoinsights.herokuapp.com/api/insights&page=1

**DELETE**

- https://api-infoinsights.herokuapp.com/api/insight/:id

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
