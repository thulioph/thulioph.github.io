---
title: Docker - Primeiros passos
date: 2017-06-11 21:02:24
tags: docker, estudos
---

# Primeiros passos

Já fazia um tempo que queria por a mão na massa com Docker e só recentemente tive a oportunidade. A necessidade veio quando precisei fazer um workshop e todo mundo precisava está com o mesmo ambiente de forma rápida.

Este post pretende falar sobre alguns comandos que foram úteis para chegar até onde eu cheguei e este caso pode ser ou não válido, mas de qualquer forma foi o responsável pelo interesse maior no conteúdo até a criação deste material.

Muito do conteúdo que se encontra aqui, foi retirado dos links no final do post.

## Docker

Docker é uma abstração do sistema operacional que permite você executar uma ou mais aplicações em instâncias virtualizadas do Linux. É uma virtualização de sistema operacional (SO), permitindo você levantar aplicações ou sistemas de forma bem rapida.

O docker é composto basicamente por 3 partes:

#### **Daemon**
Usado para geneciar os contêineres docker (LXC) no host onde ele roda.

#### **CLI**
Usado para comandar e se comuinicar com o docker daemon.

#### **Image Index**
Um repositório (público ou privado) para as imagens do docker.

## Iniciando

Como eu tinha a necessidade de ter um projeto em Nodejs rodando rapidamente, em um ambiente onde o setup poderia levar mais tempo que o previsto, então pesquisei sobre como rodar uma aplicação Nodejs em um container Docker.

Para iniciar, você precisa ter instalado o [Node.js](https://nodejs.org/en/), o [Docker](https://docs.docker.com/engine/installation/) e criar um [repositório git](https://help.github.com/articles/create-a-repo/).

Vamos dividir este post em duas partes, a primeira vai ser [Nodejs]() e a segunda [Docker]().

### Node.js

Na parte da minha aplicação, eu precisava ter ela rodando com tudo funcionando, como este post tem como foco o Docker, não vamos entrar em detalhes sobre como iniciar uma aplicação Nodejs. Caso você não tenha, um bom início é executar um `npm init` no seu terminal.

O que caracteriza que a minha aplicação roda 100%? É executar um `npm run dev` e tudo funcionar.

### Docker

Na raiz do repositório você precisa criar um arquivo chamado `Dockerfile`, ele é o responsável pelas configurações do seu container e vão automatizar todo o processo de construção das imagens.

```bash
$ touch Dockerfile
```

No final seu arquivo deve ficar parecido com esse:

<script src="https://gist.github.com/thulioph/79a09c21fcbdba4e2f7d3b84c17a69dc.js"></script>

Vamos entender o que está acontecendo, linha por linha.

### FROM node:boron

Nesta linha, você diz a partir de qual imagem você irá construir a sua, no caso estamos criando uma utilizando como base a **`node:boron`**.

### RUN mkdir -p /usr/src/veggiemap

Nesta linha o comando **`RUN`** é executado passando o **`mkdir - p`** que serve para criar uma pasta no path **`usr/src/veggiemap`**.

### WORKDIR /usr/src/veggiemap

O comando **`WORKDIR`** serve para setar como diretório de trabalho o path **`/usr/src/veggiemap`**.

### RUN git clone https://github.com/starkland/veggiemap.git .

Agora o **`RUN`** foi utilizado para executar um simples **`git clone`** passando como primeiro argumento a url e como segundo o local onde será realizado o clone.

### RUN npm install

Depois de realizar o clone, execute o **`RUN`** junto com o comando para instalar todas as dependências.

### RUN npm uninstall webpack --save-dev && npm install webpack@2.2.0 --save-dev

Testando uma variação de aplicações do **`RUN`**, desta vez removendo e atualizando alguns pacotes.

### COPY . /usr/src/veggiemap

Depois que tudo for instalado, você deve executar o comando **`COPY`** passando como primeiro argumento o local e como segundo argumento o destino **`usr/src/veggiemap`**.

### EXPOSE 8080

Para que a máquina se comunique com o container, é preciso expor uma porta deste container, o comando **`EXPOSE`** passando como argumento uma porta, realiza esse trabalho.

### CMD [ "npm", "start" ]

Para iniciar a aplicaçã de fato, é necessário executar um comando no **`CMD`** que é o **`npm start`**.

## Gerando a sua imagem

Neste passo, você já possui a sua aplicação em node rodando e o `Dockerfile` configurado, basta executar o comando:

```bash
$ docker build -t <your username>/node-web-app .
```

Isso vai fazer com que você gere uma imagem e permita que ela seja listada junto com as outras imagens. Para listar, basta executar o comando:

```bash
$ docker images
```

## Executando a imagem

Depois que sua aplicação já possui uma imagem, agora basta executa-la:

```bash
$ docker run -p 49160:8080 -d <your username>/node-web-app
```

Passando a flag `-p` permite você seta uma porta privada, que irá redirecionar uma pública dentro do container, neste caso a `49160:8080`.

Se tudo der certo e nennhuma mensagem de erro aparecer na tela, sua aplicação estará rodando em [`http://localhost:49160:8080`](http://localhost:49160:8080).

## Links

Todos os links que tem relação com o post, estão aqui:

- [https://www.digitalocean.com/community/tutorials/como-instalar-e-utilizar-o-docker-primeiros-passos-pt](https://www.digitalocean.com/community/tutorials/como-instalar-e-utilizar-o-docker-primeiros-passos-pt)

- [https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application](https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application)

- [https://nodejs.org/en/docs/guides/nodejs-docker-webapp/](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

- [https://hub.docker.com/u/thulioph/](https://hub.docker.com/u/thulioph/)

- [https://github.com/starkland/veggiemap](https://github.com/starkland/veggiemap)

- [https://gist.github.com/thulioph/79a09c21fcbdba4e2f7d3b84c17a69dc](https://gist.github.com/thulioph/79a09c21fcbdba4e2f7d3b84c17a69dc)

- [https://hub.docker.com/_/node/](https://hub.docker.com/_/node/)

> Enquanto eu escrevia, eu ouvia..

<iframe src="https://open.spotify.com/embed/album/7b6D3zdYbbxSjfYJ7pKge9" width="600" height="400" frameborder="0" allowtransparency="true"></iframe>