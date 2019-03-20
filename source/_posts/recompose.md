---
title: Functional Components with Recompose
date: 2019-03-19 16:20:00
tags: react, javascript, english
---

> The Lodash for React.

![main-image](/images/recompose/image.jpeg "https://unsplash.com/photos/Kw_zQBAChws")

This article will show a different way to create React components. We’ll discuss responsibilities, HOCs, functional components and Recompose.

In React’s world, we have different patterns and ways to structure folders, files and **manage responsibility**. As our father showed us:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Okay, I give in. I wrote a guide on the most scalable file structure for React projects. I’m using it every day. Best part: it works for Vue projects too. Hope it’s helpful! ✨ <a href="https://t.co/O2mNVx7vCs">https://t.co/O2mNVx7vCs</a></p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1027245759232651270?ref_src=twsrc%5Etfw">August 8, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Managing Responsibilities

One of the most common patterns is dividing your component into **presentation** and **behavior**. The first part will be responsible for the presentation and the looks of it, and the second for how you interact with them. This pattern was introduced by [Dan Abramov](https://twitter.com/dan_abramov) and it’s known as https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0, or https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43.

Other patterns, can be applied to different contexts like [Component Folder](https://medium.com/styled-components/component-folder-pattern-ee42df37ec68), [Redux Duck](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be) and [Controller and View](https://reactarmory.com/answers/how-should-i-separate-components). We won’t discuss them here, but you can find more information accessing the links.

## Higher-Order Components — HOCs

[Higher-Order Components](https://reactjs.org/docs/higher-order-components.html), are functions that accept a component as an argument and return a new one with the changed behavior. If you already used libraries like [*react-redux*](https://github.com/reduxjs/react-redux) or [*react-router*](https://github.com/ReactTraining/react-router), you’re probably acquainted with the HOCs `connect()` and `withRouter()`.

> “Reuse behavior through different components.”

## Stateless Functional Components — SFC

These are components without local state or lifecycle and all their data is provided by properties. You can take a look at [this post](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc) to understand the pros and cons of **functional components**.

> “Each component must be ease to test, without mock or unnecessary changes.”

## Recompose

Recompose is a collection of [tiny HOCs](https://github.com/acdlite/recompose/blob/master/docs/API.md#higher-order-components) that help the development guided by the functional paradigm. It’s known as the [Lodash](https://lodash.com/) for React.

The human behind this tool is [Andrew Clark](https://twitter.com/acdlite), that also created the [redux-router](https://github.com/acdlite/redux-router), and became a React *core team* member.

Here are some of the more important HOCs:

### withState()

This HOC allow us to add a state and a method to manipulate this state and an initial value. Everything will be available through properties.

[![withstate](/images/recompose/withState.png "withState()")](https://codesandbox.io/s/ryknvzjq4m?expanddevtools=1&hidenavigation=1)

### withHandlers()

This HOC is used to add *event handlers*, preventing the creation of new ones for each render of the component.

[![withHandlers](/images/recompose/withHandlers.png "withHandlers()")](https://codesandbox.io/s/n7mmkkl0l?expanddevtools=1&hidenavigation=1)

### lifecycle()

This HOC give us access to the lifecycle method of the component. Any state changes will be available through the properties.

[![lifecycle](/images/recompose/lifecycle.png "lifecycle()")](https://codesandbox.io/s/vqp57vnyml?expanddevtools=1&hidenavigation=1)

### branch()

This HOC is perfect to work with conditional rendering, receiving one method to test the condition and two components to render for each condition.

[![branch](/images/recompose/branch.png "branch()")](https://codesandbox.io/s/ryx2rr034m?expanddevtools=1&hidenavigation=1)

### nest()

This HOC, group components by the same context. It’s perfect to create interfaces like [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) with molecules and organisms.

[![nest](/images/recompose/nest.png "nest()")](https://codesandbox.io/s/18wl0x92p4?expanddevtools=1&hidenavigation=1)

### mapProps()

This HOC maps all of the properties from the component and transforms them into a new collection. It’s great to work with [derived properties](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state).

[![mapProps](/images/recompose/mapProps.png "mapProps()")](https://codesandbox.io/s/l7qm7zy74l?expanddevtools=1&hidenavigation=1)

### compose()

This HOC is to cluster multiples HOCs into one. Libraries like [redux](https://redux.js.org/api/compose) and [compose](https://github.com/kriszyp/compose) also use this implementation. It’s an alternative to creating functions composed by other functions.

[![compose](/images/recompose/compose.png "compose()")](https://codesandbox.io/s/3rm8597nn6?expanddevtools=1&hidenavigation=1)

Hey, what did you think about this method of development? You want to go deep and search more? The [documentation](https://github.com/acdlite/recompose/blob/master/docs/API.md) is always a good start. As a complement, the talk about [Recomposing React application](https://www.youtube.com/watch?v=zD_judE-bXk&t=2s) can give you a solid base, but remember that practice by coding is always the best way to understand.

All examples are in [codesandbox](http://codesandbox.io/), where you can change and see your changes in real-time. I made [this presentation](https://speakerdeck.com/thulioph/recompose) with more details about the subject. Any doubts or questions? Please leave a comment and share them with us.
