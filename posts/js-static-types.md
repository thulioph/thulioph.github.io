---
title: Tipagem Estática
author: "Thulio Philipe"
image: ""
imageLink: ""
date: "03/30/2018"
---

## O que é type-checking?

Verifica e garante que um tipo de dado bate com o que você especificou. Assumindo com seguranca que erros não iram ocorrer em tempo de execucão **(runtime)**.

## Flow vs Typescript

O `Flow` é um **type checker**, ele apenas checa se o código possui uma sintaxe específica para os tipos, bastando apenas adicionar no topo do código o comentário `// @flow`. Enquanto o Typescript é um **compiler**, ele compila o código para Javascript, bastando apenas alterar o nome do arquivo para `.ts`.

## Tipos

A palavra `types` refere-se ao tipo de dado que está sendo definido. As linguagens podem ser definidas como sendo de tipagem estática ou de tipagem dinâmica.

### Tipos estáticos

- linguagem estaticamente tipada
- a checagem de tipos ocorre em tempo de compilação
- Java, Scala, C++
- requer que você declare o tipo do dado antes de utiliza-lo
- a aplicacão só é compilada, quando os erros de tipos são resolvidos

### Tipos dinâmicos

- linguagem dinamicamente tipada
- a checagem de tipos ocorre em tempo de execução
- Javascript, Python
- o contexto da declaracão, é quem estabelece o tipo do dado
- a aplicacão pode ser compilada, mesmo com erros de tipos

---

## Flow e sua sintaxe

Para especificar um tipo, a sintaxe utilizada precisa respeitar a fórmula **: Type** ou (dois pontos + espaco + tipo).

### boolean

```js
const isFetching: boolean = false;
```

### number

O tipo **number**, engloba todos os tipos diferentes como integers, short, long and floating points.

```js
const isFetching: boolean = false;
```

### string

```js
const name: string = "Michael";
```

### null

```js
const data: null = null;
```

### void

O tipo **void** descreve um tipo de dado como indefinido.

```js
const data: void = undefined;
```

### array

A sintaxe para declarar array, é `Array<T>` onde **T** é o tipo.

```js
const fruits: Array<string> = ["Orange", "Banana"];
```

### object

```js
const userInfo: Object = {};
```

### functions

A maneira mais comum de se adicionar tipos para uma funcão, é adicionando tipos para os argumentos e quando necessário para o valor retornado.

```js
const sum = (a: number, b: number): number => a + b;
```

### Type

A palavra `type`, permite compor novos tipos utilizando os já existentes.

```js
type User = {
  name: string,
  age: number,
};

const UserObj: User = {
  name: "Douglas",
  age: 50,
};
```

### Generics

Uma maneira de abstrair os tipos.

```js
type GeneriInfo<T> = { key: T };

const userToken: GeneriInfo<number> = { key: 1 };
const userToken2: GeneriInfo<string> = { key: "dsdsds" };
const userToken3: GeneriInfo<Arra<number>> = { key: [1, 2, 3] };
```

### Maybe

O tipo `maybe` é representado pelo sinal de **?** que deve ser adicionado antes da declaracão do tipo e indica que o valor pode ser `null` ou `undefined` ou o valor do tipo **(T|void|null)**.

```js
const message: ?string = null;
```

O sinal de **?**, também pode indicar que um campo do objeto é opcional:

```js
type User = {
  name: string,
  age: number,
  city?: string,
};
```

### Disjoint Unions

Uma maneira poderosa de se modelar dados, quando se tem diferentes tipos em um só, ou quando o modelo do dado muda de acordo com a situacão.

```js
type Ford = { id: number, type: "Ford" };
type Fiat = { id: number, type: "Fiat" };
type Chevrolet = { id: number, type: "Chevrolet" };

type CarModel = Ford | Fiat | Chevrolet;
```

## Vantagens e Desvantagens de tipos estáticos

### vantagens

- Descoberta de bugs e erros de maneira rápida
- Especificacão exata do tipo do input e do output de uma funcão
- Os tipos servem como uma documentacão para o seu código
- Reduz o tratamento de erros
- Traz a seguranca de poder refatorar algum método ou parte do código, sem side effects
- Separacão de dados do comportamento, antes da implementacão você pensa no input e no output da funcão
- Eliminacão de algumas categorias de bugs como por exemplo o famoso `TypeError: Cannot read property ‘length’ of undefined`
- Reduz o número de testes unitários
- Provê uma ferramenta de modelagem de domínio [link](https://medium.freecodecamp.org/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60#2290)

### desvantagens

- Necessita de um investimento no aprendizado
- O código se torna pouco mais verboso
- Tipos levam tempo para serem dominados
- Tipos estáticos podem diminuir a velocidade do desenvolvimento

## Referência

Estes pontos foram retirados de uma série de 3 artigos sobre tipagem estática.

- [Why use static types in JavaScript?](https://medium.freecodecamp.org/why-use-static-types-in-javascript-part-1-8382da1e0adb)
- [The Advantages and Disadvantages](https://medium.freecodecamp.org/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60)
- [Should we use them or not?](https://medium.freecodecamp.org/why-use-static-types-in-javascript-part-4-b2e1e06a67c9)
