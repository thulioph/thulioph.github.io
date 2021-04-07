---
path: "/writings/pt/upgrade-sublime-text-2"
date: 2013-09-04T09:00:00
title: "Upgrade Sublime Text 2"
imageSlug: ""
lang: 'pt'
---

Ultimamente tenho pesquisado muito sobre o sublime, pois passo a maior parte do meu tempo admirando-o e conversando com o mesmo, e toda minha concentração é nele, para digitar qualquer coisa, rascunho, briefing, post, comentário, testes, etc.. então nada mais justo com ele (e comigo também) do que melhora-lo um pouco mais facilitando meu uso e meu rendimento. Deixando de conversa, vou dar um upgrade no sublime através do Preferences -> Settings-Users.

## Estilo do Cursor

Particularmente não curto muito o estilo padrão do cursor piscando rápido, agora posso deixar ele alternando fade-in / fade-out, é uma frescura mas já me acostumei com ele alterado.

```js
"caret_style": "phase"
```

As opções para o estilo são: “smooth”, “phase”, “blink”, “wide” e “solid”.

## Tamanho da Fonte

Cansei de ver pessoas utilizando o sublime com uma fonte enorme, não sou cego por isso não curto, então utilizo como padrão o tamanho:

```js
"font_size": 8
```

## Highlight fudicore

Esta foi a melhor descoberta de todas.. Nos códigos enormes sempre é difícil encontrar o cursor, então insira a linha de código abaixo e serás mais feliz assim como eu. Esta opção faz com que a linha onde se encontra o cursor, ganhe um destaque.

```js
"highlight_line": true
```

## Padding para melhorar a visibilidade

Só após utilizar é que vi a diferença que realmente faz, pra alguns pode ser sutil, para outros uma grande diferença..Adicione um padding no top e bottom facilmente para melhorar sua visibilidade no código;

```js
"line_padding_bottom": 1,
"line_padding_top": 1
```

## Show/Hide folding

Você pode recolher seu código para melhorar a visualização, caso esteja focado em determinada parte, mas nem sempre você sabe como fazer isso pelo teclado, adicione:

```js
"fade_fold_buttons": false
```
Desta forma, o **triângulo** com - ou + para expandir ou recolher seu código, estará sempre visível ao lado do número da linha.

## Pastas do projeto em "destaque"

O painel lateral do sublime, não destaca folders dos arquivos; Com esta opção, as pastas agora ficaram em bold, facilitando a visualização.

```js
"bold_folder_labels": true
```

## Destaque na identação

Novamente.. Quando seu código está grande demais, você pode se perder na identação, se ajude inserindo uma cor na linha onde se encontra a identação;

```js
"indent_guide_options”: ['draw_normal', 'draw_active']
```

## Salve sem querer

Você pode salvar a modificação feita no arquivo, sem precisar do ctrl + s , insira esta linha e apenas alterne entre as abas do projeto e veja que a modificação foi salva au-to-ma-ti-ca-men-te.

```js
"save_on_focus_lost": true
```

## Destaque na aba do projeto

Se você não utiliza nenhum tema no st, pode ser de grande ajuda. Eu nunca sabia quando tinha alterado um arquivo ou não, e por desencargo de consciência sempre salvava, com esta linha de código, o "x" tradicional que existia quando alterava, é alterado, melhorando a visualização.

```js
"highlight_modified_tabs": true
```

## Desabilita o drag and drop de seleção de textos

As vezes você sem querer consegue utilizar o drag-and-drop do sublime (poucos devem saber que existe rsrs), com esta configuração não vai te atrapalhar mais.

```js
"drag_text": false
```

## Exibe caracteres em branco

Acho ele útil por questão de organização e alinhamento, habilitando esta opção você consegue visualizar os espaços em branco no seu código.

```js
"draw_white_space": "all"
```

## Ignorar arquivos

Na pasta do seu projeto existem uns arquivos que você não quer visualiza-los no sublime, passe a extensão dos arquivos como um array e acabe com isso. Cola esse código lá e volte ao trabalho!

```js
"file_exclude_patterns": ["*.lib",".DS_Store","*~","*.db","*.eot","*.ttf","*.woff","*.tmp"]
```

## Ignorar Pastas

Não basta ignorar os arquivos, tem um pasta que você não quer visualiza-la no projeto?

```js
"folder_exclude_patterns": ["arquivos","$RECYCLE.BIN"]
```

*****

No final meu arquivo ficou com [essa cara](https://gist.github.com/thulioph/6665879). 
No gist está todo comentado para quem quiser utilizar. No arquivo existe uma linha onde tem o tema que utilizo, quem se interessar em saber mais segue o [link](https://github.com/MarkHMorrison/nexus-theme).

Essas foram as configurações que descobri, e você tem alguma que queira mostrar para todos? Se conhecer alguma legal posta nos comentários :D

