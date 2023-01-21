---
title: i18next para internacionalização
author: "Thulio Philipe"
image: "i18next.jpg"
imageLink: ""
date: "20/10/2014"
---

Eu nunca me importei até que em um belo dia, um cliente teve essa necessidade e foi aí que precisei pensar, pesquisar e aprender sobre internacionalização.
Participei de um projeto para a copa do mundo e o conteúdo deveria ser suportado por no mínimo 3 linguas diferentes: o inglês, espanhol e o português.
Mas eu nunca tinha feito nada multilinguagem e nesse momento quase bateu o desespero.
Acho que a pior dificuldade foi de me expressar, porque até então eu não tinha noção de que o termo **internacionalização** seria a palavra chave pra isso tudo.

Os primeiros questionamentos que eu me fiz foram:

1. “Vou ter que fazer 3 sites diferentes?”
2. “Vou ter mais trabalho que o normal?”
3. “Como eu vou pesquisar sobre alguma lib que me ajude com isso? Será que existe?”

Antes de ir adiante, vamos ver o significado da coisa segundo o dicionário:

> Tornar-se internacional; Espalhar ou difundir por vários países.

Depois de toda essa introdução, finalmente apresento a vocês o maestro da orquestraque pode ser a solução para os seus problemas: O [i18next](https://www.i18next.com/)!

Algumas considerações sobre esta lib:$$

- Seu suporte não é só para JavaScript.
- Possui integração com o jQuery.
- Todo seu conteúdo textual é inserido em um JSON.
- Documentação completa, fácil e direta.
- Você pode traduzir todo e qualquer texto do seu projeto, seja ele um `title`, `alt`, ou de qualquer outro atributo.
- Você pode detectar a linguagem do usuário e inserir o conteúdo de acordo com seu idioma.
- Ativar a internacionalização no clique.

Vou descrever os passos para você conseguir chegar [neste resultado](https://thulioph.github.io/i18next-internacionalizacao/) que será acessível para **espanhol**, **inglês** e **português**.

## Como iniciar?

### Estrutura Básica

As traduções do conteúdo deverão ser subpastas da pasta **locales** e precisam conter um arquivo `translation.json` com o json das traduções.
Então para o nosso exemplo a estrutura fica desta forma:

```
|_locales
|_locales/en-US
|_locales/en-US/translations.json
|_locales/es
|_locales/es/translations.json
|_locales/pt-BR
|_locales/pt-BR/translations.json
```

#### Configurações básicas

Para o texto da tradução ser inserido no local desejado você deve utilizar o atributo `data-i18n` que permite vários valores, passando o objeto com chave e valor.
Caso o conteúdo traduzido seja um atributo, seu nome deverá ser inserido dentro de colchetes `[]` seguido de sua posição no `JSON`.
Algo assim:

```html
<a href="#" data-i18n="link.general;[title]attr.linkGeneral"></a>
```

O HTML fica sem nenhum conteúdo textual, pois todo conteúdo será inserido de acordo com a linguagem de forma dinâmica.
Seguindo os passos para o HTML, você agora está pronto para o JavaScript, onde é preciso setar algumas configurações de inicialização.
Algo como:

```javascript
i18n.init(
  {
    fallbackLng: "en-US",
    debug: true,
    fixLng: true,
    load: "current",
  },

  function (translation) {
    $("[data-i18n]").i18n();
    var appName = translation("app.name");
  }
);
```

#### Configuração detalhada

- fallbackLng: fallback para quando não for definida ou não for localizada a linguagem do usuário.
- debug: debug da lib, habilitando no console algumas informações que podem ser úteis para desenvolvimento.
- fixLng: preserva o cookie da linguagem setada pelo usuário para quando o mesmo for acessar novamente.
- load: faz o request apenas para a linguagem definida.
- $(‘[data-i18n]’).i18n(): todos os atributos data-i18n recebem a tradução.

#### Explicando

Por padrão a lib detecta a linguagem do navegador e insere o conteúdo de acordo, caso o idioma detectado não possua tradução, o que for definido em `fallbackLng` será o conteúdo inserido.

Se o idioma for definido a partir de um clique ou qualquer outra interação você seta uma nova linguagem, preserva o cookie e inicia a tradução:

```javascript
$("elemento").on("click", function () {
  i18n.setLng("es", { fixLng: true }, function (translation) {
    $("[data-i18n]").i18n();
  });
});
```

A lib é realmente bastante simples, não tem muito o que se fazer, seguindo os passos descritos, você consegue deixar seu conteúdo mais acessível e em vários idiomas.
[Aqui](https://github.com/thulioph/i18next-internacionalizacao/) você encontra o repositório com o exemplo que foi mostrado e todo o código comentado.

## Referências

- [https://www.i18next.com/](https://www.i18next.com/)

Qualquer dúvida, crítica ou sugestão você pode deixar nos comentários ou entrar em contato comigo 🙂
