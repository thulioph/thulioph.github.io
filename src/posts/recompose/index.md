---
path: "/writings/recompose"
date: 2020-06-08T23:11:50
title: "Recompose"
imageSlug: "posts/recompose-cover.jpg"
lang: 'en'
---

This article will show you a different way to create React components. We’ll discuss responsibilities, HOCs, functional components and Recompose.

In React’s world, we have different patterns and ways to structure folders, files and **manage responsibility**. 

As our father showed us: [https://twitter.com/dan_abramov/status/1027245759232651270](https://twitter.com/dan_abramov/status/1027245759232651270)

### **Managing Responsibilities**

One of the most common patterns is dividing your component into **presentation** and **behavior**. The first part will be responsible for the presentation and the looks of it, and the second for how you interact with them. This pattern was introduced by [Dan Abramov](https://twitter.com/dan_abramov) and it’s known as [Presentational and Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), or [Smart and Dumb](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43).

Other patterns, can be applied to different contexts like [Component Folder](https://medium.com/styled-components/component-folder-pattern-ee42df37ec68), [Redux Duck](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be) and [Controller and View](https://reactarmory.com/answers/how-should-i-separate-components). We won’t discuss them here, but you can find more information accessing the links.

### **Higher-Order Components — HOCs**

[Higher-Order Components](https://reactjs.org/docs/higher-order-components.html), are functions that accept a component as an argument and return a new one with the changed behavior. If you already used libraries like [react-redux](https://github.com/reduxjs/react-redux) or [react-router](https://github.com/ReactTraining/react-router)*,* you’re probably acquainted with the HOCs **connect()** and **withRouter()**.

> “Reuse behavior through different components.”

### **Stateless Functional Components** — **SFC**

These are components without local state or lifecycle and all their data is provided by properties. You can take a look at [this post](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc) to understand the pros and cons of **functional components**.

> “Each component must be ease to test, without mock or unnecessary changes.”

### **Recompose**

Recompose is a collection of [tiny HOCs](https://github.com/acdlite/recompose/blob/master/docs/API.md#higher-order-components) that help the development guided by the functional paradigm. It’s known as the [Lodash](https://lodash.com/) for React.

The human behind this tool is [Andrew Clark](https://twitter.com/acdlite), that also created the [redux-router](https://github.com/acdlite/redux-router), and became a React **core team** member.

Here are some of the more important HOCs:

#### **withState()**

This HOC allow us to add a state and a method to manipulate this state and an initial value. Everything will be available through properties.

![https://codesandbox.io/s/ryknvzjq4m](https://cdn-images-1.medium.com/max/800/1*rVFzjoTsY6w6v58YZ7Abxw.png)
*https://codesandbox.io/s/ryknvzjq4m*

#### withHandlers()

This HOC is used to add **event handlers**, preventing the creation of new ones for each render of the component.

![https://codesandbox.io/s/n7mmkkl0l](https://cdn-images-1.medium.com/max/800/1*LcDitstDZjjPLQ3FuFZ2pQ.png)
*https://codesandbox.io/s/n7mmkkl0l*

#### lifecycle()

This HOC give us access to the lifecycle method of the component. Any state changes will be available through the properties.

![https://codesandbox.io/s/vqp57vnyml](https://cdn-images-1.medium.com/max/800/1*rXh09LedxeFrjedJAEEPzQ.png)
*https://codesandbox.io/s/vqp57vnyml*

#### branch()

This HOC is perfect to work with conditional rendering, receiving one method to test the condition and two components to render for each condition.

![https://codesandbox.io/s/ryx2rr034m](https://cdn-images-1.medium.com/max/800/1*GAFPk9PcvllnML2aZbtf1g.png)
*https://codesandbox.io/s/ryx2rr034m*

#### nest()

This HOC, group components by the same context. It’s perfect to create interfaces like [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) with molecules and organisms.

![https://codesandbox.io/s/18wl0x92p4](https://cdn-images-1.medium.com/max/800/1*2Z6WQBTPA7-r95_PsXzjFg.png)
*https://codesandbox.io/s/18wl0x92p4*

#### mapProps()

This HOC maps all of the properties from the component and transforms them into a new collection. It’s great to work with [derived properties](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state).

![https://codesandbox.io/s/l7qm7zy74l](https://cdn-images-1.medium.com/max/800/1*60DxuD7F6u8wpN-hRXzlFA.png)
*https://codesandbox.io/s/l7qm7zy74l*

#### compose()

This Higher Order Function is used for performing right-to-left function composition. Libraries like [redux](https://redux.js.org/api/compose) and [compose](https://github.com/kriszyp/compose) also use this implementation. It’s like a reverse [pipe](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator).

![https://codesandbox.io/s/3rm8597nn6](https://cdn-images-1.medium.com/max/800/1*-Yzpnjjcw7mxvdJu_vPtFA.png)
*https://codesandbox.io/s/3rm8597nn6*

*****

Hey, what did you think about this method of development? You want to go deep
and search more? The [documentation](https://github.com/acdlite/recompose/blob/master/docs/API.md) is always a good start. As a complement, the talk about [Recomposing React application](https://www.youtube.com/watch?v=zD_judE-bXk&t=2s)can give you a solid base, but remember that practice by coding is always the best way to understand.

All examples are in [codesandbox](http://codesandbox.io/), where you can change and see your changes in real-time. I made [this presentation](https://speakerdeck.com/thulioph/recompose) with more details about the subject. Any doubts or questions? Please leave a comment and share them with us.
