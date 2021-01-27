---
path: "/writings/pt/security-101"
date: 2017-08-03T04:20:00
title: "Segurança em aplicações web - 101"
imageSlug: "posts/security-cover.png"
lang: 'pt'
---

Para aqueles que não sabem absolutamente nada.

Devido ao crescimento e necessidade cada vez maior de aplicações web compartilharem informações, se faz necessária a adoção de mecanismos para manter tais sistemas e dados seguros. Este artigo tem como objetivo apresentar algumas das principais vulnerabilidades encontradas em aplicações web. Nos próximo artigos iremos detalhá-las melhor e discutir técnicas para prevenir as brechas aqui comentadas.

> Questões de segurança acontecem principalmente porque desenvolvedores que sabem das coisas, esquecem ou ignoram.

## Vulnerabilidades

Todos os dias empresas sofrem com casos de invasão ou falhas de segurança e a maioria das vezes não sabemos porque não há divulgação na mídia.

Em 2016, companhias como [Snapchat](https://www.washingtonpost.com/news/the-switch/wp/2016/03/01/the-human-problem-at-the-heart-of-snapchats-employee-data-breach/), [Verizon](https://www.identityforce.com/blog/verizon-enterprise-data-breach), [LinkedIn](http://krebsonsecurity.com/2016/05/as-scope-of-2012-breach-expands-linkedin-to-again-reset-passwords-for-some-users/) e [Dropbox](https://motherboard.vice.com/en_us/article/nz74qb/hackers-stole-over-60-million-dropbox-accounts), tiveram diversos problemas de vulnerabilidade, desde phishing a vazamento de e-mails, senhas e outras informações sigilosas, obrigando as equipes a encontrarem estas brechas o mais rápido possível. Em 2017, o cenário não mudou muito e empresas como [E-Sports](http://www.csoonline.com/article/3155397/security/esea-hacked-1-5-million-records-leaked-after-alleged-failed-extortion-attempt.html), [Gmail](https://www.identityforce.com/blog/sophisticated-gmail-phishing-scam) e até a [Washington State University](http://kuow.org/post/one-million-people-affected-wsu-data-breach) continuam sofrendo com os mesmos problemas. Esses casos afetaram **+20 milhões de usuários**, que tiveram seus dados revelados. Você faz idéia do custo que isso teve para as gigantes? São muitos zeros!

## OWASP (**Open Web Application Security Project)**

Fundada em Dezembro de 2001, a OWASP é uma comunidade online que cria e disponibiliza de forma gratuita artigos, metodologias, documentação e ferramentas para educar desenvolvedores, designers, arquitetos e organizações sobre as consequências de falhas de segurança. Para ajudar outras organizações na redução dos riscos de suas aplicações, além de produzir conteúdo **free** e **open**, eles também lançam anualmente uma lista com as TOP 10 vulnerabilidades, baseada principalmente nos dados de 11 empresas especializadas em segurança de aplicações, totalizando mais de 50.000 aplicações e APIs em uso.

O material produzido e disponibilizado pela OWASP pode ser dividido em várias categorias, algumas são:

### [Cheat Sheet Series](https://www.owasp.org/index.php/OWASP_Cheat_Sheet_Series)

É uma coleção de dicas valiosas em tópicos específicos sobre aplicações web, provendo um excelente guia de segurança de fácil leitura e compreensão. Alguns tópicos abordados são [Ajax](https://www.owasp.org/index.php/AJAX_Security_Cheat_Sheet), [Autenticação](https://www.owasp.org/index.php/Authentication_Cheat_Sheet), [HTML5 Security](https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet), [Gerenciamento de sessões](https://www.owasp.org/index.php/Session_Management_Cheat_Sheet), entre outros.

### [Enterprise Security API](https://www.owasp.org/index.php/Category:OWASP_Enterprise_Security_API)

A ESAPI é uma biblioteca free e open-source que tem como objetivo tornar mais fácil a escrita de aplicações com baixo risco de vulnerabilidade. Ela foi desenhada para se adaptar a segurança de aplicações já existentes podendo ser implementada por várias linguagens.

### [Broken Web Applications Project](https://www.owasp.org/index.php/OWASP_Broken_Web_Applications_Project)

Coleção de vulnerabilidades conhecidas em aplicações web, distribuídas e executadas em uma máquina virtual, perfeita para quem deseja aprender mais sobre segurança em aplicações web, testar algumas ferramentas e observar como funciona o fluxo de ataques.

## Top 10 Riscos

A identificação dos riscos é feita pela coleta de informações sobre a **ameaça** **envolvida**, o **tipo de ataque** que será utilizado, a **vulnerabilidade** envolvida e o **impacto** dessa vulnerabilidade caso o atacante obtenha sucesso. Essa análise é calculada utilizando a seguinte fórmula:

![risco = probabilidade * impacto](https://cdn-images-1.medium.com/max/2000/1*pQbXjwbn8OySbUtVtZQ2GQ.png)

Os principais riscos de segurança para 2017 ainda não foram finalizados, mas vamos falar sobre os que estão sendo mais encontrados até o momento.
>  Caso você tenha algum interesse por determinado assunto em específico, os nomes estão em inglês para facilitar a busca.

### Denial of Service — DoS

Também conhecido como negação de serviço, é uma tentativa de tornar os recursos de um sistema indisponíveis, tendo como alvo principal os servidores web. Quando o ataque parte de diversas fontes ele recebe o nome de **D**istributed **D**enial **o**f **S**ervice.

### Password Guessing Attacks

Como o próprio nome já diz, tem como alvo senhas de acesso. O atacante utiliza de várias ferramentas como geradores de senhas randômicas, listas com passwords mais comuns, hashes e combinações existentes na web para ajudar neste ataque do tipo brute force (força bruta).

### Cross-Site Scripting — XSS

Esta vulnerabilidade consiste na inserção de scripts maliciosos que serão executados no momento em que a página for acessada. Existem várias abordagens, as mais utilizados são através da URL ou inputs. E uma dica, [tenha cuidado na utilização do **eval()**](http://devdocs.io/javascript/global_objects/eval) e [**output escaping** sempre que possível](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet#Output_Encoding_Rules_Summary).

### Insecure Direct Object References — Insecure DOR

Este tipo de ataque acontece quando um usuário mal intencionado obtém acesso a informações como **userID**, através da URL. Utilizando de um ID sequencial o usuário consegue obter acesso a informações de outros usuários alterando a URL.

### Sensitive Data Exposure

Este tipo de vulnerabilidade pode ser descoberta a partir do momento em que o servidor não protege os dados, como password, informações de cartão de crédito e e-mails, de forma adequada. Criptografia é indispensável e autenticação em dois fatores é o mínimo. [Aprenda com o Github](https://bounty.github.com/classifications/sensitive-data-exposure.html).

### Missing Function Level Access Control

A definição de um controle de acesso, impossibilita que usuários não autorizados alterem informações inadequadas. A partir do momento em que um usuário acessa informações que não tem permissão, há uma falha de segurança.

### Cross-Site Request Forgery — CSRF

O atacante engana o usuário e envia um link via e-mail ou chat com o intuito de executar ações sem o seu consentimento. Desta forma, é possível realizar uma requisição para o servidor se passando pelo usuário, utilizando o seu cookie de sessão. Evite este tipo de ataque utilizando o [CSRF Token](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet#Synchronizer_.28CSRF.29_Tokens).

### Utilizando componentes com vulnerabilidades conhecidas

Módulos, componentes, bibliotecas ou frameworks quase sempre são executados utilizando privilégios do usuário. Se algum pacote estiver desatualizado, a chance de ataque é maior. Pacotes node apresentam algumas vulnerabilidades conhecidas e podem ser encontradas [aqui](https://nodesecurity.io/advisories).

### Clickjacking

Este ataque consiste em obter os cliques do usuário e redireciona-los para outra ação. Ele se torna presente a partir do momento que uma aplicação permite ser exibida através de um Iframe. Mais informações sobre Clickjacking pode ser encontrada na documentação de [HTTP X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options).

A lista não se resume apenas às práticas citadas, outras vulnerabilidades são presentes e você pode saber mais sobre elas através [deste link](https://www.owasp.org/index.php/Top_10_2017-Details_About_Risk_Factors).

## Comunidade

Participar de eventos e trocar conhecimento é, com certeza, uma das partes mais legais de se trabalhar com comunidade. Ficou animado para participar do próximo evento em segurança? Dá uma conferida na programação do [Roadsec](http://roadsec.com.br/). Eles estão sempre rodando o país com palestras, workshops e campeonatos como o [Hackaflag](http://roadsec.com.br/hackaflag/), campeonato de Hacking que envolve vários conceitos de segurança.

Conhece algum outro evento ou comunidade da sua região? Compartilha com eles esse material.

## Material Complementar

- [https://github.com/chuckfw/owaspbwa](https://github.com/chuckfw/owaspbwa/)
- [https://lists.owasp.org/mailman/listinfo/owasp-cheat-sheets](https://lists.owasp.org/mailman/listinfo/owasp-cheat-sheets)
- [https://github.com/FallibleInc/security-guide-for-developers](https://github.com/FallibleInc/security-guide-for-developers/blob/master/security-checklist.md)
- [https://github.com/OWASP/Top10](https://github.com/OWASP/Top10/blob/master/2017/OWASP%20Top%2010%20-%202017%20RC1-English.pdf)
- [https://nodesecurity.io/advisories](https://nodesecurity.io/advisories)
- [https://www.identityforce.com/blog/2017-data-breaches](https://www.identityforce.com/blog/2017-data-breaches)
- [https://stackoverflow.com/a/477578/4008711](https://stackoverflow.com/a/477578/4008711)
- [https://speakerdeck.com/mathiasbynens/front-end-performance-the-dark-side-at-fronteers-spring-conference-2016](https://speakerdeck.com/mathiasbynens/front-end-performance-the-dark-side-at-fronteers-spring-conference-2016)
- [https://capec.mitre.org](https://capec.mitre.org/index.html)
- [https://javascript.info/frames-and-windows](https://javascript.info/frames-and-windows)
- [https://blog.apiki.com/2016/09/09/cross-site-scripting-xss/](https://blog.apiki.com/2016/09/09/cross-site-scripting-xss/)
- [https://mkw.st/r/csp](https://mkw.st/r/csp)
- [https://speakerdeck.com/mikewest/frontend-security-frontend-conf-zurich-2013-08-30](https://speakerdeck.com/mikewest/frontend-security-frontend-conf-zurich-2013-08-30)
- [https://www.owasp.org](https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project)
- [https://www.exploit-db.com](https://www.exploit-db.com/)

*****

Se ficou interessado pelo assunto, fica ligado no meu próximo artigo! Nele iremos discutir **técnicas para mitigar essas vulnerabilidades** e abordar com mais detalhes como se prevenir dos pontos citados, junto com demonstração em código.