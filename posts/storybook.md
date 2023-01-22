---
title: Storybook como controle de qualidade da UI
author: "Thulio Philipe"
image: ""
imageLink: ""
date: "03/27/2018"
---

# Storybook como Controle de Qualidade da UI

Venho compartilhar a experiência utilizando o Storybook no dia-a-dia e em como ele ajudou a evoluir a qualidade das entregas.

## Nosso Problema

Alguns componentes que eram desenvolvidos estavam afetando a exibição de outros, era o famoso `side-effect` que vinha acontecendo. Existia um componente de `<Select />` em uma determinada tela da aplicação, onde o funcionamento e exibição em alguns momentos erão diferentes do esperado, dificultando a descoberta por ser um problema intermitente.

Após detectar a origem da dor de cabeça, chegou a hora de corrigir para que não aconteça novamente e começamos a pesquisar maneiras de isolar o desenvolvimento dos componentes. Conhecemos alguns padrões de desenvolvimento e arquitetura de aplicacões React como: **View, Containers e Components**, **Containers e Components**, [**Smart and Dumb Components**](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) e **Presentational and Container Components**. Entendemos a importância da utilização de ferramentas como o [Prop-Types](https://github.com/facebook/prop-types), fomos apresentados aos [Snapshots do Jest](https://facebook.github.io/jest/docs/en/snapshot-testing.html) e demos uma chance ao Storybook para entender o seu real potencial.

Mas uma dúvida comum, que surgiu durante o desenvolvimento foi:

> Até que ponto granularizar um componente?

Para este questionamento, um prévio entendimento sobre padrões e arquitetura faz-se necessário.

## Components vs Containers / HOC

Os **componentes** são responsáveis em como o conteúdo será exibido, não possuem dependências externas como por exemplo o `redux`, recebem todas as informacões e callbacks exclusivamente por `props` e não utilizam do ciclo de vida do componente. Os **containers** por outro lado, são responsáveis em como as coisas funcionam, fornecendo o dado para os componentes, realizando requisicões, utilizando do ciclo de vida, `redux`, `graphql`, etc. Ainda tem os [HOC's](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750), que são componentes com lógica compartilhada, mas eles não pertecem ao escopo do artigo.

Caso você queira se aprofundar mais sobre arquitetura e padrões tem esse [site aqui](https://reactpatterns.com) e [esse outro](https://lucasmreis.github.io/blog/simple-react-patterns/) que possuem uma grande quantidade de materiais.

Este artigo aborda conceitos a respeito dos **componentes**, que por sua vez, possui ligacões com o Storybook.

## Storybook

O [Storybook](https://storybook.js.org/) é uma ferramenta open-source que foi desenvolvida pelo time da Kadira e que caso você se interesse pela história deles, tem tudo aqui [neste post](https://medium.com/storybookjs/the-storybook-story-dd3c1ab0d2ce).

A ferramenta tem o objetivo de ser um ambiente de desenvolvimento da UI dos seus componentes, funcionando fora da sua aplicacão de maneira isolada, sem que você se preocupe com dependências externas, oferecendo suporte para ser utilizada pelos principais players da atualidade: [Angular](https://storybook.js.org/basics/guide-angular/), [React](https://storybook.js.org/basics/guide-react/) e [Vue](https://storybook.js.org/basics/guide-vue/). Existe também uma [CLI](https://storybook.js.org/basics/quick-start-guide/) onde você vai iniciar as coisas de maneira ainda mais rápida.

O ambiente fornece como configuracão padrão o Webpack, Babel, suporte para arquivos estáticos e para utilizar estilo interno no componente ou com arquivos CSS externos. E sua utilizacão se divide em: **stories** e **add-ons**.

Storybook consiste na criacão de histórias (stories), onde cada história (story), é uma funcão que retorna um elemento react. Ao escrever histórias para os seus componentes, você vai construir o seu **storybook**. Add-ons são plugins que trazem novas funcionalidades para o seu storybook, tornando-o mais útil.

Algumas empresas já adotam este tipo de ferramenta nos projetos, como é o caso do [Airbnb](http://airbnb.io/react-dates/), [Coursera](https://building.coursera.org/ui/), [Uber](https://uber.github.io/react-vis-force/), [e mais algumas](https://storybook.js.org/examples/).

---

---

## Como resolvemos?

Hoje quando desenvolvemos alguma aplicação, dividimos o front-end em duas etapas, primeiro desenvolvendo os componentes e depois os containers, possibilitando ter um fluxo de trabalho mais seguro, onde o próximo será dado com mais segurança.

O fluxo de desenvolvimento ganhou uma autonomia onde uma vez que o layout foi criado e é transformado em código, os testes já são executados e caso tudo passe, já acontece o deploy, gerando uma URL para qualquer um do time acessar, testar, utilizar e/ou melhorar.

Optamos por uma estrutura onde todos os arquivos relacionados ao componente se encontram na mesma pasta:

- marcacão em jsx
- folha de estilo SCSS (nem sempre)
- testes
- storie file (storybook)

Isso facilitou o reúso em diferentes situacões, desde uma prova de conceito até utilizacão em diferentes projetos, onde os componentes podem ser plugados na aplicacão de duas maneiras diferentes: **copiando a pasta** ou **instalando** via `npm i @labcodes/nome-do-componente`.

Adicionando os recursos de testes E2E, junto com os snapshots, conseguimos ter a garantia que todos os componentes estão funcionando corretamente, melhorando a qualidade da entrega.

Utilizamos alguns add-ons no storybook que nos ajudam com as acões dos componentes como `onClick` ou `onChange` por exemplo, o [knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs) que possibilita interagir com as propriedades dos componentes de forma dinâmica, o [notes](https://github.com/storybooks/storybook/tree/master/addons/notes) que permite escrever notas sobre o componente, e o [info](https://github.com/storybooks/storybook/tree/master/addons/info) que vai criar um style guide para você. Tem uma sessão dedicada aos [add-ons](https://storybook.js.org/addons/addon-gallery/) no site do storybook que vale a pena você conhecer.
