---
path: "/writings/frontend-agil"
date: 2019-10-16T16:20:00
title: "Metodologia Ágil no Frontend"
imageSlug: "posts/frontend-agil-cover.png"
lang: 'pt'
---

Com a evolução de produtos digitais para web, é cada vez mais importante desenvolver um código que atenda a requisitos dinâmicos, permitindo a evolução na arquitetura do sistema para algo mais robusto ao mesmo tempo em que mantém um código simples e compreensível.

Neste blogpost, vamos entender mais sobre 3 práticas técnicas da metodologia de desenvolvimento ágil (Testes Automatizados, Integração e Entrega Contínua e Refatoração) e sua relação com o desenvolvimento de software no geral. Além disso, vamos falar sobre algumas ferramentas, boas práticas e caminhos que você pode usar para iniciar uma nova cultura de desenvolvimento.

## Desenvolvimento Ágil

Desenvolvimento Ágil é um conjunto de métodos e práticas que ajudam a construir um software melhor. Nele, o planeja	mento é revisado constantemente, levando em consideração o aprendizado durante o processo, o sucesso é baseado no valor entregue pelo software e o desenvolvimento é uma atividade primariamente humana. Essas práticas são guiadas por um manifesto com [12 princípios](http://agilemanifesto.org/principles.html). Não vamos falar de cada um deles neste artigo, mas vamos lembrar um dos mais importantes:


> Nossa maior prioridade é satisfazer o cliente, através da entrega adiantada e contínua de software de valor. — MÁ

Então vamos à pergunta que não quer calar: como o desenvolvedor front-end pode aplicar técnicas que impactem diretamente na satisfação dos clientes?

## Testes Automatizados

Como o próprio nome já sugere, é o processo de execução dos testes de maneira automatizada e isolada. Boas práticas são bem-vindas em todos os passos do desenvolvimento, então ter um [padrão de organização](http://wiki.c2.com/?ArrangeActAssert) e escrita vai ajudar na compreensão do que está acontecendo.

A [pirâmide de testes](https://martinfowler.com/bliki/TestPyramid.html) é um conceito que ajuda a entender os níveis e a relação custo-tempo entre tipos diferentes de testes automatizados. Tenha em mente que muitos testes unitários podem validar um teste de integração, e muitos testes de integração podem validar testes de UI.


![martinfowler.com/bliki/TestPyramid](https://martinfowler.com/bliki/images/testPyramid/test-pyramid.png)
*[martinfowler.com/bliki/TestPyramid](https://martinfowler.com/bliki/TestPyramid.html)*

No front, uma boa escolha é a utilização do [Jest](https://jestjs.io/) como framework de testes. Ele vai ser útil nas camadas de **testes unitários** e **serviço**. Basta instalar como dependência do projeto e, mesmo com zero configurações, você já consegue criar e executar testes. Para testes que estão no nível de UI, uma boa ferramenta é o [Cypress](https://www.cypress.io/). Uma outra ferramenta que ajuda a compreender melhor a cobertura de testes na sua aplicação é o [Coveralls](https://coveralls.io/), vale a pena testar.

Em um ambiente onde várias pessoas colaboram para o mesmo código, é interessante que existam configurações para executar os testes antes de um git push. Isso garante que nenhum código será versionado caso os testes não estejam passando. Para ajudar nesse tipo de ambiente, uma ferramenta que eu uso bastante é o [husky](https://github.com/typicode/husky).


## Integração e Entrega Contínua

Integração e entrega contínua são termos bastante usados e sugestivos.

Integração Contínua é uma [coleção de práticas](https://martinfowler.com/articles/continuousIntegration.html) na qual todo o trabalho desenvolvido é integrado de maneira frequente por membros de um time, de preferência diariamente.

Entrega Contínua é [um método](https://martinfowler.com/bliki/ContinuousDelivery.html) no qual o build gerado pode ser confiável e disponibilizado para produção a qualquer momento, para qualquer ambiente.

Se seu código está no [Github](https://github.com/), você pode configurar integrações com diversas ferramentas. Algumas delas, como [CircleCI](https://circleci.com/) e [Travis](https://travis-ci.org/), são bem completas e amplamente adotadas. O [Netlify](https://www.netlify.com/) também pode ser uma boa alternativa, especialmente para quem adota o Storybook.

A partir de um **merge** bem sucedido entre **branches**, ou mesmo de um **commit**, o processo de deploy é iniciado. Uma série de passos acontecem sequencialmente, desde de que todos os testes tenham passado, ou seja, [desde que tudo esteja verdinho](https://take.ms/cgTUC). A ferramenta de CI vai executar os testes, depois vai executar o build, e, em sequência, dar deploy para o seu servidor, podendo encadear outras ações como coletar o coverage, publicar algum pacote no NPM ou mandar uma mensagem no Slack.


[![todaysoftmag.com/article/1068/continuous-delivery](http://www.todaysoftmag.ro/tsm/images/articles/tsm27/a41.png)](todaysoftmag.com/article/1068/continuous-delivery)

*[todaysoftmag.com/article/1068/continuous-delivery](https://www.todaysoftmag.com/article/1068/continuous-delivery)*

Para uma integração e entrega de forma contínua é fundamental **testar em um ambiente que simule o de produção**, ter um processo de testes e de build rápidos e automatizados, além deixar claro para todos membros da equipe as novas regras e procedimentos adotados.


## Refatoração

Tecnicamente falando, refatorar significa [alterar a estrutura interna de uma parte do código, sem mudar seu comportamento externo](https://refactoring.com/). O objetivo é que o código comunique de maneira clara o que está sendo feito.

A refatoração não é uma tarefa especial que tem prioridade alta de entrega. Ela é parte do dia a dia de um programador. Quando estou adicionando uma nova funcionalidade em um código já existente, por exemplo, observo se sua estrutura permite receber a nova mudança. Caso não, eu atualizo o código para tornar a nova adição mais fácil. Uma vez feita essa mudança, adiciono o novo comportamento. Caso o código ainda não esteja tão claro como eu acho que ele deveria, eu faço uma refatoração para que da próxima vez que alguém for ler o código entenda mais facilmente o que ele faz. Uma excelente maneira de se evoluir um código já existente é através do **pareamento**. Com duas pessoas pensando na resolução de um problema, a qualidade tende a aumentar.

Uma observação muito importante a ser feita acerca da refatoração é a seguinte: Cada modificação deve ser pequena, o objetivo é fazer com que uma sequência de pequenas mudanças produzam uma reestruturação significativa no produto. Lembre-se, refatorar também reduz o custo das melhorias, afinal aplicar mudanças em um código compreensível e bem estruturado é menos custoso do que tentar mudar um código longo e complexo.


![refactoring](https://miro.medium.com/max/1400/0*jjASXWv5AnJ5SBuZ.jpg)
*[medium.com/justideas-io/explaining-the-joy-of-refactoring](https://medium.com/justideas-io/explaining-the-joy-of-refactoring-to-the-non-developer-72d97223359c)*

*****

E aí? O que achou dessas práticas? Já utiliza ou utilizou alguma? Se tiver alguma dúvida fique à vontade para comentar. 🙂

Algumas palavras deste texto estão [grifadas](#), elas são links com informações adicionais sobre os tópicos. Caso queira saber mais sobre práticas do desenvolvimento ágil, aconselho o site do [Martin Fowler](https://martinfowler.com/), que tem diversos artigos, além de livros sobre o assunto. Nos vemos por aí, se quiser dicas fale comigo no [Twitter](https://twitter.com/thulioph_) e até a próxima!