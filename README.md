<div align="center" id="top"> 
  <img src="https://jurishand.com/_next/static/media/logo-jurishand-black.7fffda40.svg" alt="Jurishand" />

  &#xa0;

  <!-- <a href="https://jurishand.netlify.com">Demo</a> -->
</div>

<h1 align="center">Jurishand</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/RafaelCava/desafio-back-end?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/RafaelCava/desafio-back-end?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/RafaelCava/desafio-back-end?color=56BEB8">

  <!-- <img alt="License" src="https://img.shields.io/github/license/RafaelCava/desafio-back-end?color=56BEB8"> -->

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/RafaelCava/desafio-back-end?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/RafaelCava/desafio-back-end?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/RafaelCava/desafio-back-end?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Jurishand 🚀 Em construção...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-functionalities">Functionalities</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-pre-requirements">Pre-requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-coverage">Coverage</a> &#xa0; | &#xa0;
  <!-- <a href="#memo-license">License</a> &#xa0; | &#xa0; -->
  <a href="https://github.com/RafaelCava" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Project developed for Jurishand's Back-end Challenge

## :sparkles: Functionalities ##

:heavy_check_mark: Functionality 1: Returns all articles\
:heavy_check_mark: Functionality 2: Filters the articles by category\
:heavy_check_mark: Functionality 3: Filters the articles by a term key in the title or content

## :rocket: Technologies ##

The following tools were used in the construction of the project:

- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/pt-BR/)
- [Docker](https://www.docker.com/)
- [Mysql](https://www.mysql.com/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Commitlint](https://commitlint.js.org/)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [MockDate](https://www.npmjs.com/package/mockdate)
- [PrismaORM](https://www.prisma.io/)
- [Yarn](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Pre-requirements ##

Before you start: checkered_flag:, you need to have [git](https://git-scm.com) and [docker](https://www.docker.com/) installed on your machine.

## :checkered_flag: Starting ##
## Please use Docker in everything
```bash
# Clone this repository
$ git clone https://github.com/RafaelCava/desafio-back-end jurishand

# Enter the folder
$ cd jurishand

# Declare the network
$ docker network create kong-fc

# Install the dependencies and start the project
$ docker compose up -d

# The app will initialize in <http://localhost:3000>
# The migrations will start to climb the application
# To see documentation access <http://localhost:3000/api-docs>
```

## :checkered_flag: Coverage ##
```bash
# With application running and the bank are up
# Run this command
$ docker compose exec -it jurishand yarn test:cov
```

## :checkered_flag: Script Python ##
```bash
# With application running and the bank are up
# Run this commands
$ docker build -t script-python -f ./.docker/dockerfiles/Dockerfile.python .
$ docker run --network kong-fc -v ./scripts:/usr/src/app script-python
# These commands will build a docker image with python and the script
# And starts a container with the script and generate a csv file on ./script
```

<!-- ## :memo: License ## -->

<!-- Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes. -->


Made with :heart: by <a href="https://github.com/RafaelCava" target="_blank">Rafael Cavalcante</a>

&#xa0;

<a href="#top">Go back to the top</a>
