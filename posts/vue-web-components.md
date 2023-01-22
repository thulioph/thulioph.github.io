---
title: Web-Components with Vuejs
author: "Thulio Philipe"
image: "vuejs.jpg"
imageLink: ""
date: "09/20/2018"
---

# Pointed as an alternative to develop web applications, Vuejs is a framework which focuses on the view layer, helping the development of applications based on components.

In this post I’ll show you the power of this tool.

Before talking about it, some concepts must be made clear.
It’s necessary to understand why this framework was created, what problems it solves, and where it’s useful.

## MVC

MVC is an acronym to Model-View-Controller, which is a **software architectural pattern** that splits your application into three layers: View (user interaction layer), Model (data manipulation layer) and Controller (application control layer).

This pattern has been used by many teams and companies, no matter what type, language or size of the project.
Some popular frameworks were built following this architecture. [Angularjs](https://angularjs.org/), created by Google team in 2010, is an example.

## CBA

CBA is an acronym to **Component-Based-Architecture**. It takes small parts of the interfaces as independent components and reuses it inside other systems. Things will be clearer if you imagine a component as a resource that is part of the interface.

Components need to:

1. Be independent.
2. Interact with other components at the same space, without affecting them.
3. Have their own structure, methods, and APIs.
4. Be reusable and “plugged” in any place of the application.

A good example of a framework based on components is [React](https://facebook.github.io/react/).
It was created by Facebook in 2013, following this “new approach” to web development.

## States

After introducing you to component-based architecture, you need to understand one more concept, according to which **every application has a state** and it’s through it that we access the information that will be read and/or edited. Every component has its own state or just reads the state of another component.

That is when you need to be introduced to the concepts of **stateful** and **stateless** components.

### Stateful

A stateful component has information about the state of the application and can edit it, predicting what changes may or will occur.

```javascript
const hour = 21;

const increment = () => hour + 1;

increment(); // 22
```

See that the **increment** function has access to a state out of its own scope. It’s a characteristic of a **stateful** code.

### Stateless

On the other hand, a **stateless** component hasn’t got information about the state itself and can’t change it. A certain input is always expected to have the same output. Translating it into code:

```javascript
const hour = 21;

const increment = (x) => x + 1;

increment(hour); // 22
```

Notice that now, the **increment** function receives a state as a parameter and does not change anything out of its own scope. It’s a **stateless** code.

## Web Components

All these concepts and terms are related to **Web Components**.
Basically, the web components are a collection of APIs that allow you to create new reusable and fully-customized HTML tags.

To work with web components, it’s necessary to understand their specifications, which are divided into [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/), [HTML Imports](https://w3c.github.io/webcomponents/spec/imports/), [HTML Templates](https://html.spec.whatwg.org/multipage/webappapis.html#scripting) and [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/).
The purpose of this post isn’t to discuss Web Components, but if you are interested on the topic, take a look at the [documentation](https://www.webcomponents.org/).

Some of the most recent frameworks widely use two specifications: **Custom Elements**, which allow you create new DOM elements and **Shadow DOM**, which defines how you encapsulate style and markup into the component.

## Modularization

Working with modules allow us to divide the code into little parts, providing better management and organization, so all you have to do is basically **import** and **export** something.

Exporting one module:

```javascript
export default function bar() {
  console.log("Hi, bar");
}
```

Importing and using my module:

```javascript
import bar from "./bar";

bar();
```

Basically, you can export a module inside the `bar.js` file and use it inside another `app.js` file.

Unfortunately, not all the browsers don’t recognize modules like this yet, so it’s necessary to use tools such as [Webpack](https://webpack.github.io/) or [Browserify](http://browserify.org/), called module bundle.
They take all modules and put them into just all modules and putting them into just one file that the browsers can understand.

## Hello World

Now you are familiar with the concepts, it’s time to start coding with Vue!

So as in other frameworks, it is possible to start the development in two ways: via Content Delivery Network ([CDN](https://unpkg.com/vue@2.2.6)) or Command Line Interface ([CLI](https://github.com/vuejs/vue-cli)).

### CDN

Using CDN, all you need to do is to add the script into the HTML file and initialize a new Vue instance assigning an object as its arguments. Notice that nothing else is necessary to write your first **Hello World**.

Hello world using CDN:

```html
<html>
  <head>
    ...
  </head>

  <body>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>

    <script src="https://unpkg.com/vue"></script>
  </body>
</html>

<script>
  new Vue({
    el: "#app",
    data: {
      message: "Hello Vue!",
    },
  });
</script>
```

### CLI

```bash
$ npm install -g vue-cli
$ vue init webpack my-project
```

If you prefer to use CLI, there will be a basic structure to start the development following some templates. What templates are these? **webpack**, **webpack-simple**, **browserify** and **browserify-simple**.
The first decision you will have to make is which module bundle to use, webpack or browserify.
After this, you will have to decide which are the requirements the project needs.

By using templates without the suffix **-simple**, you will have a more complete structure, with pre-configured loaders, test environment to e2e and unit, routes, ESLint and other more advanced resources. Otherwise, if you don’t need these requirements to start the project, do for the options with -simple.

## Components

Now, we are going to explain how the components in Vue are built.

### Globals

```javascript
Vue.component(tagName, options);
```

Global components will be available in all the application, and its notation is described above.
The first parameter `tagName` accept a string that contains the HTML tag.
The second parameter accepts an object of `options` to the component.

The example of one global component:

```javascript
Vue.component("my-component", {
  template: "<h1>Hello World!</h1>",
});

new Vue({
  el: "#app",
});
```

How do I use my component?

```html
<div id="app">
  <my-component></my-component>
</div>
```

### Single-File

Single-file components (or just SFC) is a different approach to creating components and it’s the main difference from Vue to other frameworks.

How does a SFC work?

- The file extension needs to be `.vue`
- One single-file component has: markup (HTML), style (CSS) and behavior (JS)
- It allows you to work with any markup language
- It allows you work with pre and/or post-processors
- It adds scope to your CSS

What would this file look like?

```html
<template>
  <h1>{{ message }}</h1>
</template>

<script>
  export default {
    name: "My Component",
    data() {
      return {
        message: "Hello World",
      };
    },
  };
</script>

<style scoped>
  h1 {
    color: red;
    font-size: 16px;
  }
</style>
```

After giving you a general idea about the structure and how the component works, let’s go down to the dark side.

## Data

The **data** are the most basic part of the component, being responsible for its state, and it should be a function that returns an object.
You just need to use the famous `{{ }}` inside your template to bind it.

```html
<template>
  <p>{{ isActive }}</p>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },
  };
</script>
```

## Lifecycle

The component’s **lifecycle** is important to get a better control of some actions or when you want to do something at a specific moment.
To access a specific lifecycle, just call the cycle’s equivalent function.

```javascript
export default {
  created() {
    console.warn("When the component was created.");
  },

  mounted() {
    console.warn("When the component was mounted.");
  },

  updated() {
    console.warn("When the component was updated.");
  },

  destroyed() {
    console.warn("When the component was destroyed.");
  },
};
```

To understand with more details and see the complete lifecycle list, check the [documentation](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks).
A good exercise to improve the lifecycle concept is calling all functions just with `console.log` to visualize each step.

## Props

**Props** are used in communication between parent components and child components. They need to be an object that allows validation by informing whether is it required and its expected type.

```html
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
        required: true,
      },
    },
    data() {
      return {
        address: "",
      };
    },
  };
</script>

<style></style>
```

If you have any question about how to use props, check the [documentation](https://vuejs.org/v2/guide/components.html#Prop-Validation).

## Directives

As in many frameworks, Vue has directives and their application works similarly to other frameworks’ ones.
Some directives are more famous than others, as **v-model**, **v-on**, **v-bind**, **v-for**, **v-show**, **v-if**.
Some directives can be registered using the **shorthand** version, which would be a more declarative way to write the directive.

```html
<button v-on:click="doSomething">Click</button>

<button @click="doSomething">Click</button>
```

```html
<a v-bind:href="url" v-bind:class="myClass"> link </a>

<a :href="url" :class="myClass"> link </a>
```

You can also create new directives. To more details, check the [documentation](https://vuejs.org/v2/guide/custom-directive.html).

## Methods

The **methods** are an object of functions that make up the component.
If the component has any click, or another function is called from an event, it will be put on methods object.

```html
<template>
  <button @click="toggle">Change Status</button>

  <p>{{ active }}</p>
</template>

<script>
  export default {
    name: "Toggle button",
    data() {
      return {
        active: false,
      };
    },
    methods: {
      toggle() {
        this.active = !this.active;
      },
    },
  };
</script>
```

For more details about methods, the [documentation](https://vuejs.org/v2/api/#methods) can help you.

## Modifiers

Vue has another specific characteristic that is called **modifier**, which works as a special notation that attaches a different behavior to a certain element.
We have a common example below in which `preventDefault()` is used in the submit event of the form to cancel the form’s default action, which is submitting the page.

```html
<form id="myForm"></form>
```

```javascript
  <script>
    let myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', doSomething, false);

    function doSomething(e) {
      e.preventDefault();
    }
  </script>
```

Vue has its own special syntax to work with this sort of case.

```html
<form @submit.prevent="doSomething"></form>
```

There are useful modifiers to [keys](https://vuejs.org/v2/guide/events.html#Key-Modifiers), [events](https://vuejs.org/v2/guide/events.html#Event-Modifiers), [forms](https://vuejs.org/v2/guide/forms.html#Modifiers) and [directives](https://vuejs.org/v2/guide/syntax.html#Modifiers).
To more details, check the documentation.

## Tests

Tests are an interesting subject to discuss, mainly because of different types, integrations and frameworks, for example.
We will focus on two types of tests: **unit** and **end-to-end**. For more details about each type of test or what they are used for, I suggestion you to read [this material](https://willianjusten.com.br/entendendo-testes-de-software/) that explains each of them.

### Unit tests

Vue allows you to use [Jasmine](https://jasmine.github.io/) as a test framework and [Karma](https://karma-runner.github.io/1.0/index.html) to run them.
Both are amongst the most used by the community.

```html
<template>
  <span>{{ message }}</span>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hello!",
      };
    },
    created() {
      this.message = "Bye!";
    },
  };
</script>
```

```javascript
import Vue from "vue";
import MyComponent from "@/MyComponent.vue";

describe("MyComponent Spec", () => {
  it("Sets the correct default data", () => {
    const cpData = MyComponent.data();
    expect(cpData.message).toBe("Hello!");
  });
});
```

### End-to-End (e2e)

Vue allows you to use the [Nightwatch](http://nightwatchjs.org/) as an e2e framework, being one of the most used by the Nodejs community.
The tool is very simple and works with an intuitive code.

```html
<template>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hello World!",
      };
    },
  };
</script>
```

```javascript
const devServer = browser.globals.devServerURL;

browser
  .url(devServer)
  .waitForElementVisible("#app", 5000)
  .assert.containsText("h1", "Hello World!")
  .end();
```

## Mobile, Desktop, Hybrid..

If you were wondering about hybrid and/or desktop apps, it’s time! You can also use Vue to build desktop or hybrid apps. Some alternatives available on Github are:

- [Framework 7](https://github.com/nolimits4web/framework7/)
- [Onsen UI](https://github.com/OnsenUI/OnsenUI)
- [Vonic](https://github.com/wangdahoo/vonic)

## Comunity

Every framework has a community behind it — people who work together with other members to enhance to the tool. What’s the Vue community doing?

### [i18n](https://vuejs.org/)

The documentation is available in some languages as: Japanese, Chinese, American English, Korean, Russian and Brazilian Portuguese (under development).

### [Debug](https://github.com/vuejs/vue-devtools)

To help the developers, Vue has a tool for the debugger. Just download the browser extension and you will have more information about its components, the props, the state flow, the actions and the commits present in the application.

### [Awesome List](https://github.com/vuejs/awesome-vue)

Probably you have already heard of the awesome-lists, and Vue also has a list where you can find podcasts, tutorials, components, utilities, examples, apps, websites and companies that are using Vue in their production or in their own experiments.

### [Slack](https://slack.vuejs-brasil.com.br/)

If you would like to participate in group discussions about the framework or have any questions, I recommend using Slack to build a network that can help you solve your problems and allow you to interact with the Brazilian community.

### [Email](https://vuejsfeed.com/)

Do you prefer to receive information in your inbox? A newsletter is a good option to keep updated about the technology world.

### [Forum](https://forum.vuejs.org/)

It’s normal for developers to use the stack overflow, right? Vue has a forum with thousands of questions, and you can find the solution to your problem more quickly there.

### [Articles](http://www.vuejs-brasil.com.br/)

The Brazilian community of Vuejs is very active, always posting high quality content about coding or about the framework.

## Just for SPAs?

If your project needs:

- HTTP requests? ([vue-resource](https://github.com/pagekit/vue-resource), [axios](https://github.com/mzabriskie/axios/))
- Routes? ([vue-router](https://github.com/vuejs/vue-router))
- State management? ([vuex](https://github.com/vuejs/vuex))
- UI components? ([ui-components](https://github.com/vuejs/awesome-vue#ui-components))

This tool is useful to **small projects** or **big projects**, SPA or not.

This post doesn’t address everything the tool is used for, it just gives a general overview of some topics with examples.
I hope that you have questions about what I said here and search for more about this awesome tool.

I invite you to see the [code](https://github.com/starkland/veggiemap) and [slides](https://speakerdeck.com/thulioph/vuejs) of this project, in which I’m using the concepts covered throughout of the post.

## References:

This post used the links below as reference. If you want to know more about this tool, please check these materials:

- [Space Shuttle Endeavour’s Control Panels](https://www.reddit.com/r/pics/comments/2xyuch/space_shuttle_endeavours_control_panels/?st=j12c9vnp&sh=71b68ec3)
- [https://medium.com/js-dojo/react-or-vue-which-javascript-ui-library-should-you-be-using-543a383608d](https://medium.com/js-dojo/react-or-vue-which-javascript-ui-library-should-you-be-using-543a383608d)
- [https://laracasts.com/series/learn-vue-2-step-by-step](https://laracasts.com/series/learn-vue-2-step-by-step)
- [http://devgirl.org/2017/01/10/phonegap-apps-with-vue-js-yes-please](http://devgirl.org/2017/01/10/phonegap-apps-with-vue-js-yes-please)
- [https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8](https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8)
- [https://github.com/leonardovilarinho/newbie-webpack-simple](https://github.com/leonardovilarinho/newbie-webpack-simple)
- [https://tableless.com.br/conheca-o-vue-js-um-framework-javascript-para-criacao-de-componentes-web-reativos/](https://tableless.com.br/conheca-o-vue-js-um-framework-javascript-para-criacao-de-componentes-web-reativos/)
- [http://www.vuejs-brasil.com.br/podcast-falando-sobre-vue-js-e-web-components-by-codecasts/](http://www.vuejs-brasil.com.br/podcast-falando-sobre-vue-js-e-web-components-by-codecasts/)
- [https://github.com/codecasts/spa-starter-kit](https://github.com/codecasts/spa-starter-kit)
- [https://github.com/frontendbr/forum/issues/408](https://github.com/frontendbr/forum/issues/408)
- [http://imasters.com.br/framework/3-bibliotecas-javascript-para-ficar-de-olho-em-2017/](http://imasters.com.br/framework/3-bibliotecas-javascript-para-ficar-de-olho-em-2017/)
- [https://css-tricks.com/intro-to-vue-1-rendering-directives-events/](https://css-tricks.com/intro-to-vue-1-rendering-directives-events/)
- [https://github.com/open-source/stories/yyx990803](https://github.com/open-source/stories/yyx990803)
- [https://vuejsfeed.com/blog/how-to-write-good-and-reusable-components-in-vue-js](https://vuejsfeed.com/blog/how-to-write-good-and-reusable-components-in-vue-js)
- [https://github.com/pablohpsilva/vuejs-component-style-guide](https://github.com/pablohpsilva/vuejs-component-style-guide)
- [http://vue-loader.vuejs.org/pt/start/spec.html](http://vue-loader.vuejs.org/pt/start/spec.html)
- [https://medium.com/the-vue-point/vue-in-2016-8df71d98bfb3](https://medium.com/the-vue-point/vue-in-2016-8df71d98bfb3)
- [https://medium.com/vuejs-tips](https://medium.com/vuejs-tips)
