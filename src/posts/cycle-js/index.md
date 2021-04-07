---
path: "/writings/pt/cycle-js"
date: 2013-09-26T02:00:00
title: "Cycle JS"
imageSlug: ""
lang: 'pt'
---

Hoje tirei o dia para falar do “meu amigo” [Cycle](http://jquery.malsup.com/cycle/). 

Ele é um plugin jQuery que quebra o galho quase que de vez em sempre, quando preciso fazer algumas coisas nos meus projetos, sem falar que você pode personalizar o quanto quiser, ele é super fácil de implementar e infelizmente muitas pessoas não o conhecem e é por isso que vim falar dele aqui hoje. 

Vejo direto nos grupos do facebook um ou outro perguntando: 

> Alguém conhece um plugin de slide legal e fácil? Me ajudem preciso de um slide pro meu site urgente!!!!!!!

Então pessoal, este post vai para vocês :P

Alguns vão falar: 

> Pô, mas se você sempre utiliza ele, isso faz com que seus projetos sempre tenham a mesma cara.

Não, ele disponibiliza vários efeitos diferentes. Vamos ver como ele funciona.

## HTML

No **HTML** é preciso definir o "alvo" do plugin `div` e dentro colocar o que vai receber o cycle, podendo ser qualquer coisa: `img`, `p`, `ul`, etc..

```html
<div>
    <ul>
        <li>Item 01</li>
        <li>Item 02</li>
        <li>Item 03</li>
    </ul>

    <ul>
        <li>Item 04</li>
        <li>Item 05</li>
        <li>Item 06</li>
    </ul>
</div>
```

## CSS

No **CSS** você faz o estilo que preferir no alvo e no conteúdo, lembrando de inserir no alvo `overflow:hidden`.

```css
div{
   width: 150px;
   height: 150px;
   overflow: hidden;
}

div li{
   display: inline-block;
   list-style-type: none;
   background: #f00;
   border: 1px solid #000;
   margin: 2px 0px;
   width: 100px;
   height: 20px;
}
```

## Javascript

No **JS** é correr pro abraço.

```js
$(“div”).cycle({
   // parâmetros
});
```

[Veja o exemplo acima em funcionamento](http://codepen.io/thulioph/full/DulsA)

Fácil em? Com isso você pode fazer vários tipos de combinações e ter vários efeitos legais, sem perder muito tempo. Basta observar os parâmetros do plugin para ver qual a melhor forma de você utiliza-lo. 

[Na página do Cycle](http://jquery.malsup.com/cycle/), tem muito exemplo que você pode se guiar, basta observar os [efeitos](http://jquery.malsup.com/cycle/browser.html), a página de [demonstração](http://jquery.malsup.com/cycle/more.html?v2.23) e a página de [opções](http://jquery.malsup.com/cycle/options.html) onde ensina o que cada parâmetro faz e como pode configura-lo.

Fiz alguns exemplos utilizando imagens e você pode conferir o código completo [aqui](https://gist.github.com/thulioph/6651019).

Cycle teve uma atualização e veio com umas melhorias e propõe uma maneira um pouco diferente da citada neste post, deixo o [link](http://jquery.malsup.com/cycle2/) caso se interesse.

*****

Espero que este plugin seja útil para vocês assim como sempre foi para mim. Dúvidas? Sugestões? Correções? Deixa nos comentários :D