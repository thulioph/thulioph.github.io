---
title: Releases de Segurança
date: 2017-07-18 16:20:00
tags: seguranca, nodejs
---

Com o Node e Webpack não foi diferente.

![releases](/images/security/releases.jpeg "11/07/2017")

Recentemente dois grandes projetos receberam releases de segurança por questões de vulnerabilidades. O primeiro foi o [Webpack](https://webpack.js.org/) que permitia um agente malicioso executar um ataque conhecido como man-in-the-middle e o segundo foi o [Nodejs](https://nodejs.org/en/), que desde a sua versão 4.x tinha problemas de DDOS e recentemente de Constant Hashtable Seeds.

Este artigo pretende levar o tema de Segurança para quem não tem muito conhecimento, e mostrar que casos de vulnerabilidade são mais comuns do que se imagina, fique esperto!

## Webpack & Preact CLI

A vulnerabilidade foi descoberta pelo [Mike North](https://twitter.com/michaellnorth) após o live streaming do Google I/O deste ano, onde o Addy Osmani apresentava uma série de ferramentas do ecossistema das Progressive Web Apps. Parte dessas ferramentas precisam que a aplicação seja servida sobre o protocolo do HTTP/2, que atualmente não requer criptografia e é aconselhado que seja implementado apenas para conexões TLS, na prática apenas para conexões seguras, as que utilizam **HTTPS**.

Para um perfeito funcionamento, conexões HTTPS precisam de um certificado.

E para que nao houvesse problemas na utilização da ferramenta, o [Jason Miller](https://twitter.com/_developit), criador do [preact-cli](https://github.com/developit/preact-cli), acabou gerando e incluindo um certificado ao projeto, porém contendo a sua chave privada. A mesma escolha de gerar um certificado foi tomada pelo pessoal do [webpack-dev-server](https://github.com/webpack/webpack-dev-server/) que também exibia a chave privada de quem gerou o certificado.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Vulnerability: some <a href="https://twitter.com/hashtag/preact?src=hash&amp;ref_src=twsrc%5Etfw">#preact</a> CLI and <a href="https://twitter.com/hashtag/webpack?src=hash&amp;ref_src=twsrc%5Etfw">#webpack</a> users open to undetectable <a href="https://twitter.com/hashtag/https?src=hash&amp;ref_src=twsrc%5Etfw">#https</a> <a href="https://twitter.com/hashtag/MITM?src=hash&amp;ref_src=twsrc%5Etfw">#MITM</a> attacks across all domains  <a href="https://t.co/aqiWlM5Sdl">https://t.co/aqiWlM5Sdl</a></p>&mdash; Mike North 🤯 (@michaellnorth) <a href="https://twitter.com/michaellnorth/status/877202039394230272?ref_src=twsrc%5Etfw">June 20, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


É ai que está a vulnerabilidade por trás do ataque!

## Man-in-the-Middle

O MITM como também é conhecido, consiste em um agente mal intensionado “se posicionando” entre duas partes que estão tentando se comunicar, interceptando as mensagens enviadas e depois se passando por uma das partes para ter acesso a informação transmitida.

No caso do Webpack e Preact, alguém com um pouco mais de experiência e conhecimento, poderia utilizar o certificado gerado para se passar como agente confiável, obtendo toda a troca de informações de quem utilizasse uma determinada rede. Este cenário poderia ser facilmente aplicado em redes fechadas, caso algum usuário mal intencionado tivesse acesso a um roteador configurado de forma errada.

![man-in-the-middle](/images/security/mitm.png "11/07/2017")

Esta vulnerabilidade permite que um agente mal intencionado possa facilmente observar e manipular todo o tráfego entre domínios sobre HTTPS sem que ninguém saiba, tornando todas as informações e dados inseguros.

### Como se prevenir?

Como tentativa de mitigação de ataques do tipo MITM, um bom começo seria a utilização de [HTTP Public Key Pinning](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning), que nada mais é do que um header que associa uma chave pública no cliente com um servidor. Evite a transação de informação sigilosa ao utilizar redes wifi públicas. Se possível utilize o [HTTP Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) para informar ao browser que a sua aplicação deve apenas se comunicar sobre HTTPS, sendo uma das funcionalidade de segurança implementadas pelo header.

## Nodejs

Alguns serviços como o [Heroku](https://heroku.com/), por exemplo, entraram em contato com quem tinha alguma aplicação node rodando, solicitando que atualizassem assim que possível.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">⚠️ If you are running <a href="https://twitter.com/nodejs?ref_src=twsrc%5Etfw">@nodejs</a> on <a href="https://twitter.com/heroku?ref_src=twsrc%5Etfw">@heroku</a> please update your Node version and redeploy your app <a href="https://t.co/SltCqueXls">https://t.co/SltCqueXls</a> <a href="https://t.co/FChg7NusHl">https://t.co/FChg7NusHl</a></p>&mdash; Jeremy Morrell (@JeremyMorrell) <a href="https://twitter.com/JeremyMorrell/status/884837533531734017?ref_src=twsrc%5Etfw">July 11, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Para um melhor entendimento do que aconteceu, faz-se necessário compreender alguns conceitos como o do **Hashtable**.

### Hashtable

É uma estrutura de dados que implementa um array associativo, podendo mapear chaves para valores. Basicamente é um grupo de listas linkadas ou *linked-lists* que devem ser pequenas para não comprometer seu desempenho, sendo utilizada em **HTTP headers**, **representações JSON** e em **Sets**, **Objects** e **Maps**.

Hashtables utilizam uma função *hash*, que mapeia dados com um tamanho arbitrário para um tamanho fixo e os valores retornados são chamados de *hashes*. A idéia é distribuir os pares de chave/valor em uma série de *buckets*, onde dada uma chave o algoritmo computa o index, que sugere onde a entrada pode ser encontrada.

![hash-table](/images/security/hash-table.png "https://en.wikipedia.org/wiki/Hash_table")

A brecha existia porque o suposto “random seed” que era utilizado na função *hash*, sempre era constante e nunca era alterado entre cada nova versão do Node. Durante o processo de compilação do node, o V8 obtém *snapshots* do contexto de onde foi inicializado e reutiliza no seu próximo *boot*, tudo isso para tornar as coisas mais rápidas.

Uma vez que o agente mal intencionado obteve acesso ao *seed*, ele pode facilmente saturar uma *linked-list*, acabando com seu desempenho.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🔈The security releases for ALL active <a href="https://twitter.com/hashtag/nodejs?src=hash&amp;ref_src=twsrc%5Etfw">#nodejs</a> release lines are available. Update ASAP.<br><br>New versions:<br>- 8.1.4<br>- 7.10.1<br>- 6.11.1<br>- 4.8.4</p>&mdash; Node.js (@nodejs) <a href="https://twitter.com/nodejs/status/884822255032823810?ref_src=twsrc%5Etfw">July 11, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Até que outra solução seja implementada, a melhor escolha até o momento foi desabilitar por default os *snapshots*, onde provavelmente irá resultar em uma regressão de performance.

O outro problema encontrado foi relacionado a DDOS que por se tratar de um ataque mais conhecido, não irei entrar em detalhes neste post.

### Como se prevenir?

A principal recomendação é para atualizar a versão do Node nos projetos que você trabalha, uma lista completa com os patches foi disponibilizada [no próprio site deles](https://nodejs.org/en/blog/vulnerability/july-2017-security-releases/).

Ambos os releases que corrigem essas brechas de segurança já foram disponibilizados. Para o Preact-CLI você pode acessar [este link](https://github.com/developit/preact-cli/releases/tag/1.1.2) para obter o release, já o Webpack-dev-server você pode utilizar [este link](https://github.com/webpack/webpack-dev-server/releases/tag/v2.5.0) e para o Nodejs você pode consultar [este link](https://nodejs.org/en/blog/release/) e procurar pelos releases lançados no dia **11 de julho de 2017**.

Caso queira consultar mais materiais na internet que estejam falando sobre este assunto, seguem alguns links:

- https://stackoverflow.com/questions/45068905/heroku-node-js-remote-dos-constant-hashtable-seeds-vulnerability
- https://medium.com/@ahmadbamieh/nodejs-constant-hashtables-seeds-vulnerability-f03bf70e3593
- https://security.stackexchange.com/questions/165166/what-is-the-constant-hashtables-seeds-vulnerability
- https://nodesource.com/blog/node-js-security-release-summary-july-2017
- https://en.wikipedia.org/wiki/Hash_table
- [https://events.ccc.de/congress/2011/Fahrplan/attachments](https://events.ccc.de/congress/2011/Fahrplan/attachments/2007_28C3_Effective_DoS_on_web_application_platforms.pdf)
- https://twitter.com/michaellnorth/status/876560926337490944

Se você leu até aqui, é porque parece que realmente se interessa pelo assunto. Deixo para você o convite de leitura do meu próximo artigo, que será uma introdução sobre **Segurança de Aplicações Web**, onde irei abordar conceitos iniciais sobre vulnerabilidades, quais as referências que você pode seguir e como dar os primeiros passos neste mundo.

> Gostou do texto? Já passou por alguns dos problemas mencionados? Clica no ❤ ou faz um comentário relatando e vamos bater um papo legal. Cheers! 🍺