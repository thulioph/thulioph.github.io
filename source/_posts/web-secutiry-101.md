---
title: Segurança de Aplicações Web — 101
date: 2017-08-03 16:38:17
tags: seguranca, web
---

[![imagem-principal](/images/web-security/elliot.jpeg "Elliot de Mr. Robot")](http://mrrobot.wikia.com/wiki/Elliot_Alderson)

# Segurança de Aplicações Web — 101

Devido ao crescimento e necessidade cada vez maior de aplicações web utilizarem o compartilhamento de informações, se faz necessária a adoção de mecanismos para manter tais aplicações e informações seguras. Este artigo mostra algumas das principais vulnerabilidades encontradas em aplicações web e como você pode conhece-las melhor.

> Questões de segurança acontecem principalmente porque desenvolvedores que sabem das coisas, esquecem ou ignoram.

## Vulnerabilidades

Todos os dias empresas sofrem com casos de invasão ou vulnerabilidade e a maioria não cai na mídia, companhias como [Snapchat][snapchat], [Verizon][verizon], [LinkedIn][linkedin] e [Dropbox][dropbox], tiveram diversos problemas de vulnerabilidade desde, phishing, combinações de e-mails e senhas reveladas e vazamento de informações sigilosas, obrigando as equipes a encontrarem as vulnerabilidades o mais rápido possível.

Em 2017, o cenário não mudou muito e empresas como [E-Sports][esports], [Gmail][gmail] e organizações como [Washington State University][wsu] sofreram com vazamento de informações sensíveis, phishing ou brechas de segurança. Recentemente, tivemos o caso [Wannacry][wannacry] que era uma espécie de vírus que solicitava pagamento em bitcoin para liberar os arquivos da máquina infectada.

As brechas de segurança das empresas citadas, afetaram mais de **20 milhões de usuários** que tiveram seus dados revelados, e você faz idéia do custo que isso teve para as gigantes? São muitos zeros!

## OWASP

Fundada em Dezembro de 2001, o OWASP é uma comunidade online que cria e disponibiliza de forma gratuita artigos, metodologias, documentação e ferramentas para educar desenvolvedores, designers, arquitetos e organizações sobre as consequências das vulnerabilidades.

Todo ano eles lançam uma lista com as TOP 10 vulnerabilidades, baseadas principalmente na grande massa de dados de 11 empresas especializadas em segurança de aplicações, totalizando mais de 50.000 aplicações e APIs em produção.

## Recursos

Para ajudar organizações e desenvolvedores na redução dos riscos de suas aplicações, foram produzidos recursos **free e open** para que você possa utiliza-los como guia na segurança de sua aplicação, eles são divididos em várias categorias, algumas são:

### [Cheat Sheet Series][cheat-sheet-series]

É uma coleção de dicas valiosas em tópicos específicos sobre aplicações web, provendo um excelente guia de segurança de fácil leitura e compreensão. Alguns tópicos mais conhecidos são [Ajax][ajax], [Autenticação][authentication], [HTML5 Security][html5-sec], [Gerenciamento de sessões][session-manegement], entre outros.

### [Enterprise Security API][enterprise-security-api]

A ESAPI é uma biblioteca free e open-source que tem o objetivo de tornar mais fácil a escrita de aplicações com baixo risco de vulnerabilidade, foi desenhada para se adaptar a segurança de aplicações já existentes podendo ser implementada por várias linguagens.

### [Broken Web Applications Project][broken-web-application-project]

Coleção de vulnerabilidades conhecidas em aplicações web, distribuídas e executadas em uma máquina virtual, perfeito para quem deseja aprender mais sobre segurança em aplicações web, testar algumas ferramentas e observar como funciona o fluxo de ataques.

## Riscos

A identificação dos riscos é feita pela coleta de informações sobre a **ameaça envolvida**, o **tipo de ataque** que será utilizado, a **vulnerabilidade** envolvida e o **impacto** dessa vulnerabilidade caso o atacante obtenha sucesso. Essa análise é calculada utilizando a seguinte fórmula:

<br>

![formula-dos-riscos](/images/web-security/formula-dos-riscos.png "risco = probabilidade * impacto")

<br>

Os principais riscos de segurança para 2017 ainda não foram finalizados, mas vamos introduzir alguns dos que estão sendo bastante cotados até o momento.

### Denial of Service — DoS

Também conhecido como negação de serviço, é uma tentativa de tornar os recursos de um sistema indisponíveis, tendo como alvo principal os servidores web. Quando o ataque parte de diversas fontes ele recebe o nome de Distributed Denial of Service.

### Password Guessing Attacks

Como o próprio nome já diz, tem como alvo senhas de acesso. O atacante utiliza de várias ferramentas como geradores de senhas randômicas, listas com passwords mais comuns, hashes e combinações existentes na web para ajudar neste ataque do tipo brute forte.

### Cross-Site Scripting— XSS

Esta vulnerabilidade consiste na inserção de scripts maliciosos que serão executados no momento em que a página for acessada. Existem várias abordagens, os mais utilizados são através da URL ou inputs. E uma dica, [tenha cuidado na utilização do eval()!][eval]

### Insecure Direct Object References — Insecure DOR

Este tipo de ataque acontece quando um usuário mal intencionado obtém acesso a informações como userID, através da URL. Utilizando de um ID sequencial o usuário consegue obter acesso a informações de outros usuários alterando a URL.

### Sensitive Data Exposure

Este tipo de vulnerabilidade pode ser descoberta, a partir do momento em que o servidor não protege os dados, como password, informações de cartão de crédito e e-mails de forma adequada. Criptografia é indispensável e autenticação em dois fatores é o mínimo, [aprenda com o Github][github-sensitive-data].

### Missing Function Level Access Control

Controle de acesso é importante para definir níveis de acesso, impossibilitando que usuários não autorizados alterem informações inadequadas. A partir do momento em que ocorre a quebra, a vulnerabilidade foi descoberta.

### Cross-Site Request Forgery — CSRF

O atacante engana o usuário, enviando um link via e-mail ou chat com o intuito de executar ações sem o consentimento do mesmo. Podendo realizar uma requisição para o servidor se passando pelo usuário, utilizando o seu cookie de sessão. Ao realizar a verificação do [header Referer][header-referer] você já está começando bem.

### Utilizando componentes com vulnerabilidades conhecidas

Módulos, componentes, bibliotecas ou frameworks quase sempre são executados utilizando privilégios do usuário, caso algum pacote esteja desatualizado, pode facilmente aumentar o range de ataque. Algumas vulnerabilidades em pacotes node, você encontra aqui. Wordpress, estou falando de você!

### Clickjacking

Obter os cliques do usuário e redirecionar para outra ação. Este tipo de vulnerabilidade se torna presente a partir do momento que uma aplicação permite ser exibida através de um Iframe, procure por [HTTP X-Frame-Options][http-x-frame] no final da leitura.

A lista não se resume apenas as que foram citadas, outras vulnerabilidades são presentes e você pode saber mais sobre elas acessando [através deste link][lista-completa].

## Comunidade

Uma das partes mais legais de se trabalhar com comunidade, com certeza são os eventos e a troca de conhecimento. O artigo nem acabou e você já está querendo ir para o primeiro evento em segurança? Dá uma conferida na programação do [Roadsec][roadsec], eles estão sempre rodando o país com palestras, workshops e campeonatos como o [Hackaflag][hackaflag] envolvendo vários conceitos de segurança.

Conhece alguma comunidade da sua região? Deixa o link nos comentários.

## Material Complementar

- https://github.com/chuckfw/owaspbwa
- https://lists.owasp.org/mailman/listinfo/owasp-cheat-sheets
- https://github.com/FallibleInc/security-guide-for-developers
- https://github.com/OWASP/Top10
- https://nodesecurity.io/advisories
- https://www.identityforce.com/blog/2017-data-breaches
- https://stackoverflow.com/a/477578/4008711
- https://speakerdeck.com/mathiasbynens/front-end-performance-the-dark-side-at-fronteers-spring-conference-2016
- https://capec.mitre.org
- https://javascript.info/frames-and-windows
- https://blog.apiki.com/2016/09/09/cross-site-scripting-xss/
- https://mkw.st/r/csp
- https://speakerdeck.com/mikewest/frontend-security-frontend-conf-zurich-2013-08-30
- https://www.owasp.org
- https://www.exploit-db.com

> Enquanto eu escrevia, eu ouvia..

<iframe src="https://open.spotify.com/embed/album/4prye0ZPTfcHO2rNpQWYnG" width="600" height="400" frameborder="0" allowtransparency="true"></iframe>

[snapchat]: https://www.washingtonpost.com/news/the-switch/wp/2016/03/01/the-human-problem-at-the-heart-of-snapchats-employee-data-breach/?utm_term=.59fbb0841c5b
[verizon]: https://www.identityforce.com/blog/verizon-enterprise-data-breach
[linkedin]: http://krebsonsecurity.com/2016/05/as-scope-of-2012-breach-expands-linkedin-to-again-reset-passwords-for-some-users/
[dropbox]: https://motherboard.vice.com/en_us/article/nz74qb/hackers-stole-over-60-million-dropbox-accounts
[gmail]: https://www.identityforce.com/blog/sophisticated-gmail-phishing-scam
[wsu]: http://kuow.org/post/one-million-people-affected-wsu-data-breach
[esports]: http://www.csoonline.com/article/3155397/security/esea-hacked-1-5-million-records-leaked-after-alleged-failed-extortion-attempt.html
[wannacry]: https://www.google.com.br/search?q=wannacry&oq=wannacry&aqs=chrome..69i57j0l5.1644j0j1&sourceid=chrome&ie=UTF-8
[cheat-sheet-series]: https://www.owasp.org/index.php/OWASP_Cheat_Sheet_Series
[ajax]: https://www.owasp.org/index.php/AJAX_Security_Cheat_Sheet
[authentication]: https://www.owasp.org/index.php/Authentication_Cheat_Sheet
[html5-sec]: https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet
[session-manegement]: https://www.owasp.org/index.php/Session_Management_Cheat_Sheet
[enterprise-security-api]: https://www.owasp.org/index.php/Category:OWASP_Enterprise_Security_API
[broken-web-application-project]: https://www.owasp.org/index.php/OWASP_Broken_Web_Applications_Project
[eval]: http://devdocs.io/javascript/global_objects/eval
[github-sensitive-data]: https://bounty.github.com/classifications/sensitive-data-exposure.html
[header-referer]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer
[http-x-frame]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
[lista-completa]: https://www.owasp.org/index.php/Top_10_2017-Details_About_Risk_Factors
[roadsec]: http://roadsec.com.br/
[hackaflag]: http://roadsec.com.br/hackaflag/