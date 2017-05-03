---
title: Web-Components com Vue.js
date: 2017-03-29 17:05:07
tags: vuejs, javascript, frameworks
---

## Vuejs
Apontado como uma das alternativas no desenvolvimento de aplicações web, o [Vuejs](https://vuejs.org/, "Ir para o site do Vuejs") é um Framework que possui seu foco na camada **view**, facilitando o desenvolvimento de aplicações baseadas em componentes. Este post vai lhe mostrar um pouco do que a ferramenta é capaz, e como você pode começar a utilizá-la hoje no seu dia-a-dia.

Antes de começar a utilizar, desenvolver ou até mesmo falar sobre a ferramenta, tenha em mente que é necessário esclarecer alguns conceitos. Assim como tudo novo na vida, precisamos entender o porquê desta novidade existir, quais os problemas que ela se propõe a resolver e onde ela é útil.

## MVC

MVC é um acrônimo para Model-View-Controller, que nada mais é do que um **padrão de arquitetura** para desenvolvimento de software que consiste em dividir a sua aplicação em três camadas: View (camada de interação do usuário), Model (camada de manipulação dos dados) e Controller (camada de controle da aplicação).

Este padrão foi e vem sendo ainda adotado por muita gente, independente do tipo, linguagem e tamanho do projeto, ele se adequa de forma bem fácil. Alguns frameworks foram construídos com base nesta arquitetura, temos por exemplo o [Angularjs](https://angularjs.org/ "Ir para o site do AngularJS."), criado pelo Google em 2010.


## CBA

CBA é um acrônimo para **Component-Based-Architecture**, e este tipo de arquitetura encapsula partes individuais de uma interface (componentes) em sistemas independentes e auto-sustentáveis. As coisas podem ficar mais claras se você imaginar um componente como sendo um recurso que compõe parte da interface.

Os componentes precisam:

- Ser independentes;
- Interagir com outros componentes no mesmo espaço, sem afetar outro componente;
- Possuir sua própria estrutura, métodos e APIs;
- Ser reusáveis e podem ser “plugados” em qualquer lugar da aplicação;

Um bom exemplo de frameworks que se baseiam em componentes é o [React](https://facebook.github.io/react/ "Ir para o site do React."), criado pelo Facebook em 2013, que trouxe este novo conceito para o desenvolvimento web.


## Componentes

Após introduzir o conceito de uma aplicação component-based, acredito que você já esteja apto a fixar mais um conceito no seu cérebro que é o de que **toda aplicação tem um estado** e é através dele que acessamos as informações que serão lidas e/ou alteradas; onde cada componente possui seu próprio estado, ou apenas faz a leitura do estado de outro componente.

É neste momento que entram mais dois novos conceitos: **Stateful** e **Stateless**.


### Stateful

Um componente *stateful* possui informações sobre o estado da aplicação e pode alterá-lo, prevendo quais as mudanças que ocorreram ou que podem ocorrer.

```js
const hour = 21;

const increment = () => hour + 1;

increment(); // 22
```

Perceba que a função **increment** tem acesso a um estado que não faz parte do seu escopo. Esta é uma característica de algo que é **stateful**.


### Stateless

Já um component *stateless* não mantém informações do estado e não pode alterá-lo (mutar). Dada uma determinada entrada, espera-se que sempre tenhamos a mesma saída.

```js
const hour = 21;

const increment = (x) => x + 1;

increment(hour); // 22
```

Perceba que agora a função **increment** recebe um estado como parâmetro e não altera nenhum estado fora do seu escopo. Esta é uma característica de algo que é **stateless**.


## Web Components

Em meio a todas as siglas, termos e novidades existe um propósito por trás disso tudo que são os **Web Componentes**. Basicamente, web componentes são uma coleção de web APIs que permitem você criar novas tags HTML reusáveis e totalmente customizadas.

Para se trabalhar com Web Components é preciso entender as suas especificações, que são divididas em: **[Custom Elements](https://w3c.github.io/webcomponents/spec/custom/)**, **[HTML Imports](https://w3c.github.io/webcomponents/spec/imports/)**, **[HTML Templates](https://html.spec.whatwg.org/multipage/webappapis.html#scripting)** e **[Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/)**. Neste post eu não vou entrar em muitos detalhes sobre o que é cada coisa dessa e caso você tenha interesse, dá uma olhada na [documentação](https://www.webcomponents.org/ "Ir para a página dos WebComponents.org").

Alguns dos frameworks atuais utilizam fortemente duas especificações, são elas: **Custom Elements**, que é a especificação que permite utilizar novos tipos de elementos DOM, e **Shadow DOM** que define como você encapsula estilo e marcação no componente.


## Modularização

Muitos de vocês já devem ter ouvido falar sobre modularização, ou até mesmo já ter pesquisado algo: [como modularizar o meu código](https://www.google.com.br/?gws_rd=cr&ei=hPzbWKmhCoqdwgSxtpu4AQ#q=como+modularizar+o+meu+c%C3%B3digo&*). Este é o último conceito que precisamos entender.

Trabalhar com módulos permite que seu código seja dividido em pequenas partes, facilitando a organização e manutenção, e basicamente tudo que você precisa é **importar algo** e **exportar algo**.

```js
// bar.js

export default function bar() {
  console.log('Hi, bar');
}
```

```js
// app.js

import bar from './bar';

bar(); // Hi, bar
```

Basicamente você consegue exportar um módulo que está contido em um arquivo `bar.js` e utiliza-lo em outro lugar da sua aplicação `app.js`.

Infelizmente os browsers ainda não entendem nem suportam módulos, por isso se faz necessário ferramentas como [Webpack](https://webpack.github.io/ "Ir para o site do Webpack.") ou [Browserify](http://browserify.org/ "Ir para o site do Browserify.") que são chamadas de *module bundler*. Seu papel é pegar todos esse módulos e juntar em um único arquivo que é utilizado pela aplicação e compreendido pelos browsers.


## Hello World

Depois de uma introdução sobre alguns termos e conceitos, já está na hora de iniciarmos o Hello World com o Vue. Assim como em outros frameworks, é possível começar o desenvolvimento de duas maneiras, utilizando: Content Delivery Network ([**CDN**](https://unpkg.com/vue)) ou Command Line Interface ([**CLI**](https://github.com/vuejs/vue-cli)).

### CDN

```html
<!-- hello-world.html -->

<html>
  <head>...</head>

  <body>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>

    <script src="https://unpkg.com/vue"></script>
  </body>
</html>

<script>
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
</script>
```

Utilizando o CDN, basta você referenciar o script no seu HTML e iniciar uma nova instância do vue passando um objeto de opções. Observe que nada mais é necessário para realizar o hello world.

### CLI

```sh
$ npm install -g vue-cli

$ vue init webpack my-project
```

Utilizando o CLI, você terá uma estrutura inicial para começar o desenvolvimento seguindo alguns templates. Que templates são esses? **webpack**, **webpack-simple**, **browserify** e **browserify-simple**. A primeira grande decisão será em qual module bundler você irá utilizar, webpack ou browserify, e depois quais requisitos o projeto precisa.

Ao utilizar os templates sem o sufixo `-simple` você terá uma estrutura mais completa, contendo uma série de loaders configurados, **teste e2e** e **unitários**, **rotas**, **ESLint** e outros recursos mais avançados. Do contrário, caso você não tenha necessidade de iniciar um projeto com isso tudo configurado, opte por utilizar as opções com o `-simple`.

## Components

Aprofundando um pouco mais sobre a ferramenta, vamos conhecer agora como são construídos os componentes em Vue, que podem ser: **globais** ou **single file**.

### Globais

```js
Vue.component(tagName, options);
```

Componentes globais ficam disponíveis em toda a aplicação, e sua construção é dada seguindo a notação acima. O primeiro parâmetro **tagname** aceita uma string que deve conter a tag que será utilizada como marcação HTML, e o segundo parâmetro **options** aceita um objeto de opções para aquele componente.

```js
// my-component.js

Vue.component('my-component', {
  template: '<h1>Hello World!</h1>'
});

new Vue({
  el: '#app'
});
```

Como eu utilizo o componente previamente criado?


```html
<!-- my-component.html -->

<div id="app">
  <my-component></my-component>
</div>
```

### Single-File

Single-file componentes (ou simplesmente SFC) é uma maneira diferente de criar componentes que vão te auxiliar no desenvolvimento, sendo esta a principal diferença do Vue em relação aos atuais frameworks.

Como funciona um SFC?

- Sua extensão de arquivo deve ser **.vue**;
- Um single-file component contém: marcação (HTML), estilo (CSS) e comportamento (JS);
- Permite trabalhar com qualquer linguagem de marcação;
- Permite trabalhar com pré-processadores;
- Possibilita escopo no CSS;

Como seria este arquivo?

```html
<!-- my-component.vue -->

<template>
  <h1>{{ message }}</h1>
</template>

<script>
 export default {
  name: 'My Component',
  data() {
    return {
      message: 'Hello World'
    }
  }
};
</script>

<style scoped>
  h1 {
    color: red;
    font-size: 16px;
  }
</style>
```

Depois de passar um pouco pela estrutura e em como funcionam os componentes, vamos descer mais o nível.

### Data

O **data** é a parte mais básica de um componente, sendo responsável pelo seu estado, e deve ser uma função que retorne um objeto. Basta utilizar as famosas chaves dupla dentro do template para realizar o bind.

```html
<!-- component-data.vue -->

<template>
  <p>{{ isActive }}</p>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
}
</script>
```

### Lifecycle

O ciclo de vida ou **lifecycle** de um componente é importante para se ter um controle melhor das ações ou quando se deseja realizar alguma coisa em um dado momento. Para se acessar um determinado momento do ciclo de vida do componente, basta invocar a função correspondente ao ciclo.

```js
// component-lifecycle.js

export default {
  created() {
    console.warn('When the component was created.');
  },

  mounted() {
    console.warn('When the component was mounted.');
  },

  updated() {
    console.warn('When the component was updated.');
  },

  destroyed() {
    console.warn('When the component was destroyed.');
  }
};
```

Para uma abordagem mais detalhada e uma listagem completa dos lifecycle, consulte a [documentação](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks). Um bom exercício para fixar o entendimento do ciclo de vida, é invocar as funções apenas exibindo um log para visualizar as etapas corretamente.

### Props

São através das **props** que é realizada a comunicação de um componente pai com o seu filho. As props devem ser um objeto e você consegue realizar uma validação informando se é *required* e o *type* que é esperado.

```html
<!-- props.vue -->

<template>
  <div>
    <h4>{{ address }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      address: ''
    };
  }
};
</script>

<style></style>
```

Para uma abordagem mais detalhada sobre props, consulte a [documentação](https://vuejs.org/v2/guide/components.html#Prop-Validation).

### Diretivas

Assim como em outros frameworks o Vue também possui diretivas e a sua aplicação funciona de forma semelhante como em outros frameworks. Algumas diretivas mais conhecidas são: **v-model**, **v-on**, **v-bind**, **v-for**, **v-show**, **v-if**. Algumas diretivas podem ser declaradas utilizando a versão **shorthand**, que seria uma maneira mais declarativa para se escrever a diretiva, abaixo temos dois exemplos:

```html
<!-- v-on.html -->

<button v-on:click="doSomething">
  Click
</button>

<button @click="doSomething">
  Click
</button>
```

```html
<!-- v-bind.html -->

<a
  v-bind:href="url"
  v-bind:class="myClass">
  link
</a>

<a
  :href="url"
  :class="myClass">
  link
</a>
```

Você também pode criar novas diretivas. Para uma abordagem mais detalhada consulte a [documentação](https://vuejs.org/v2/guide/custom-directive.html).


### Methods

Os **methods** são um objeto de funções que compõe o componente. Se o componente tem algum clique, ou alguma função que é executada a partir de um evento, ela deverá ser inserida nos methods.

```html
<!-- methods.vue -->

<template>
  <button @click="toggle">
    Change Status
  </button>

  <p>{{ active }}</p>
</template>

<script>
export default {
  name: 'Toggle button',
  data() {
    return {
      active: false
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    }
  }
}
</script>
```

Para uma abordagem mais detalhada sobre methods, consulte a [documentação](https://vuejs.org/v2/api/#methods).

### Modifiers

O vue possui mais uma característica própria que é chamada de **modifier**, que nada mais são do que notações especiais que atribuem um comportamento diferente para determinado elemento.

Abaixo temos um exemplo bem comum, onde no evento de submit do formulário é utilizado o `preventDefault()` para cancelar a ação padrão de um formulário que é submeter a página.

```html
<!-- modifiers.html -->

<form id="myForm"></form>

<script>
  let myForm = document.getElementById('myForm');

  myForm.addEventListener('submit', doSomething, false);

  function doSomething(e) {
    e.preventDefault();
  }
</script>
```

O Vue provê uma sintaxe própria para trabalhar com esse tipo de caso.

```html
<!-- modifiers-2.html -->

<form @submit.prevent="doSomething"></form>
```

Existem modifiers para [keys](https://vuejs.org/v2/guide/events.html#Key-Modifiers), [events](https://vuejs.org/v2/guide/events.html#Event-Modifiers), [forms](https://vuejs.org/v2/guide/forms.html#Modifiers) e [diretivas](https://vuejs.org/v2/guide/syntax.html#Modifiers). Para uma abordagem mais detalhada sobre a sua utilização consulte a documentação.


## Testes

Testes são interessante de abordar, principalmente pelos diferentes tipos que existem: integração, frameworks, boas práticas, etc. Dos vários tipos de testes existentes daremos uma atenção especial para **unitários** e **end-to-end**. Para mais detalhes sobre cada tipo de teste ou para que serve, eu indico você a [ler este material](https://willianjusten.com.br/entendendo-testes-de-software/) que aborda de uma forma mais completa.


### Unit tests

O vue permite que você utilize o [Jasmine](https://jasmine.github.io/) como framework para escrever seus testes e utilize o [Karma](https://karma-runner.github.io/1.0/index.html) para executá-los, ambos são amplamente adotados pela comunidade em geral.

```html
<!-- MyComponent.vue -->

<template>
  <span>{{ message }}</span>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello!'
    }
  },
  created () {
    this.message = 'Bye!'
  }
}
</script>
```

```js
// MyComponent.test.js

import Vue from 'vue';
import MyComponent from '@/MyComponent.vue';

describe('MyComponent Spec', () => {
 it('Sets the correct default data', () => {
    const cpData = MyComponent.data();

    expect(cpData.message).toBe('Hello!');
  });
});
```

### End-to-End (E2E)

O vue permite que você utilize o [Nightwatch](http://nightwatchjs.org/) como framework de testes e2e, sendo bem aceito pela comunidade Nodejs. A ferramenta é bem simples e possui um código intuitivo.

```html
<!-- MyComponent.vue -->

<template>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World!',
    };
  }
};
</script>
```

```js
// MyComponent.test.js

const devServer = browser.globals.devServerURL;

browser
 .url(devServer)
 .waitForElementVisible('#app', 5000)
 .assert.containsText('h1', 'Hello World!')
 .end();
```

## Mobile, Desktop, Hybrid..

Se você estava se perguntando sobre apps híbridos e/ou desktops, chegou a hora! Com o Vue também é possível criar aplicações tanto desktop como híbridas, algumas das alternativas disponíveis no mercado são:

- [Framework 7](https://github.com/nolimits4web/framework7/)
- [Onsen UI](https://github.com/OnsenUI/OnsenUI)
- [Vonic](https://github.com/wangdahoo/vonic)


## Comunidade

Todo framework possui uma comunidade que o apoia, utiliza e faz o famoso jabá da ferramenta, tudo isso sem ganhar nada em troca. Mas o que a comunidade do Vue vem fazendo?

### [i18n](https://vuejs.org/ "Ir para o site do Vuejs")

A documentação está disponível em vários idiomas como: japonês, chinês, americano, coreano, russo e brasileiro (em desenvolvimento).

### [Debug](https://github.com/vuejs/vue-devtools "Ir para a página do vue devtools.")

Existe uma ferramenta de debugger que vai lhe auxiliar no desenvolvimento com vuejs. Basta realizar o download para o seu navegador e você terá um raio-x da sua aplicação, quais as props, state, commits e actions que existem na aplicação.

### [Awesome list](https://github.com/vuejs/awesome-vue "Ir para a página do awesome list.")

Como em vários seguimentos, o vuejs também possui uma lista do tipo awesome-lists, que lista diversas coisas relacionadas ao framework. Nesta lista você pode encontrar: Podcasts, Tutoriais, Componentes, Utilitários, Exemplos, Apps e Websites que utilizam o framework, etc.

### [Slack](https://slack.vuejs-brasil.com.br/ "Ir para a página do Slack.")

Se você gosta de participar ativamente de discussões envolvendo determinado assunto, tirar dúvidas ou fazer um network com outros devs da comunidade, recomendo a utilização do Slack como um dos canais de comunicação com a comunidade brasileira.

### [Email](https://vuejsfeed.com/, "Ir para a página do vuejs feeds.")

Gosta de receber as informações fresquinhas no seu e-mail? Newsletters são uma boa opção para se manter atualizado sobre o que acontece no mundo Vuejs.

### [Fórum](https://forum.vuejs.org/ "Ir para o fórum do vuejs.")

Está com alguma dúvida e não achou no stack overflow? O fórum do vue é bem movimentado e normalmente as respostas são bem rápidas. Quem sabe postando a sua dúvida lá você consegue resolver o seu problema e ajuda outros na mesma situação.

### [Artigos](http://www.vuejs-brasil.com.br/ "Ir para a página do Vuejs Brasil.")

Tem dificuldade no inglês, ou simplesmente prefere ler conteúdos em pt-br? A comunidade brasileira de Vuejs é bem ativa, sempre postando conteúdo de qualidade, tanto sobre códigos como sobre o próprio framework.


## Apenas para SPAs?

Se o seu projeto precisa de:

- Requisições HTTP? ([vue-resource](https://github.com/pagekit/vue-resource), [axios](https://github.com/mzabriskie/axios/))
- Rotas? ([vue-router](https://github.com/vuejs/vue-router))
- Gerenciamento de estados? ([vuex](https://github.com/vuejs/vuex))
- Componentes? ([ui-components](https://github.com/vuejs/awesome-vue#ui-components))

A ferramenta é útil tanto para projetos pequenos (**SPA**) como para projetos grandes (**!SPA**).

<br>

Este post não aborda tudo o que a ferramenta é capaz de fazer, apenas passa de forma resumida pelos principais tópicos exibindo pequenas partes de código. Espero que ao concluir a leitura eu tenha conseguido instigar você a aprender mais sobre esta incrível ferramenta.

Aproveito e deixo o convite para você dar uma olhada no [código deste projeto](https://github.com/starkland/veggiemap) que foi desenvolvido utilizando os conceitos abordados ao longo do artigo. Este artigo também conta com uma apresentação que você pode conferir os [slides aqui](https://speakerdeck.com/thulioph/vuejs).

## Referências

Todo o material criado e divulgado teve como base estes links, e caso você queira ler mais sobre a ferramenta, aconselho este material:

- https://medium.com/js-dojo/react-or-vue-which-javascript-ui-library-should-you-be-using-543a383608d#.4o5w4amuh
- https://laracasts.com/series/learn-vue-2-step-by-step
- http://devgirl.org/2017/01/10/phonegap-apps-with-vue-js-yes-please
- https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8#.r5yogq26a
- https://github.com/leonardovilarinho/newbie-webpack-simple
- https://tableless.com.br/conheca-o-vue-js-um-framework-javascript-para-criacao-de-componentes-web-reativos/
- http://www.vuejs-brasil.com.br/podcast-falando-sobre-vue-js-e-web-components-by-codecasts/
- https://github.com/codecasts/spa-starter-kit
- https://github.com/frontendbr/forum/issues/408
- http://imasters.com.br/framework/3-bibliotecas-javascript-para-ficar-de-olho-em-2017/
- https://css-tricks.com/intro-to-vue-1-rendering-directives-events/
- https://github.com/open-source/stories/yyx990803
- https://vuejsfeed.com/blog/how-to-write-good-and-reusable-components-in-vue-js
- https://github.com/pablohpsilva/vuejs-component-style-guide
- http://vue-loader.vuejs.org/pt/start/spec.html
- https://medium.com/the-vue-point/vue-in-2016-8df71d98bfb3#.oubstzcle
- https://medium.com/vuejs-tips

Cheers! 🍺

> Enquanto eu escrevia, eu ouvia..

<iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DX8T4RjuTOSH3" width="600" height="400" frameborder="0" allowtransparency="true"></iframe>