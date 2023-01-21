---
title: API Google Maps V3
author: "Thulio Philipe"
image: "google-maps-api-v3.jpeg"
imageLink: https://unsplash.com/photos/FyvE6XPs5gk
date: "10/01/2014"
---

Neste post irei falar um pouco sobre a [API Google Maps V3](https://developers.google.com/maps/documentation/javascript/?hl=pt-BR), que sofreu atualizações e veio com algumas melhorias e recursos adicionais para dispositivos móveis e desktops.

No último projeto que participei, o designer incluiu no layout um mapa com width: 100%. Até ai nada demais, não é? Fui no Google Maps, digitei o endereço do local e incorporei o mapa ao meu projeto com aquele iframe lindo cheio de tags inúteis. Não é errado usar o embed do Google. É simples de incorporar no seu projeto, é relativamente fácil de manipular e deixar as dimensões do jeito que quiser, mas o código não é aquela coisa linda.

Vamos ao que interessa. Irei descrever abaixo o passo a passo de como eu cheguei [neste resultado](https://thulioph.github.io/mapa/). Depois de ler este post você conseguirá brincar bastante, personalizando o quanto quiser o seu mapa.

# HTML

No HTML eu criei uma div que receberá o mapa.

```html
<div id="mapa"></div>
```

# CSS

Estilizei minha div determinando uma largura, altura e uma borda para melhor visualizá-la.

```css
#mapa {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}
```

# JS

Criei um arquivo com o nome de **mapa.js** onde terá todas as configurações e parâmetros do mapa e executei a chamada no html, que agora está com essa cara:

```html
<!doctype html>
 <html lang=”pt,BR”>
  <head>
   <meta charset=”UTF-8”>
   <title>API Google Maps V3</title>
   <link rel="stylesheet" href="css/mapa.css" >
   <script src=”js/mapa.js”></script>
  </head>

<body>
  <div id=”mapa”></div>
</body>
</html>
```

## Criando minha chave API

Para começar a brincar será preciso criar uma chave de API, de acordo com as normas do Google, esta chave é necessária para suas aplicações serem monitoradas e terem um “cadastro”, assim o google poderá entrar em contato com você com relação a sua aplicação caso seja necessário. Como crio uma chave?

1. Entre no site de [Console de APIs]()
2. Clique no lado esquerdo em **Serviços**
3. Ative o serviço **API do Google Maps v3**
4. No menu esquerdo clique no link **acesso á api**, a chave de acesso estará disponível nesta página na sessão **Acesso Simples a API**.

## Exibindo um mapa simples

Agora que você já tem uma chave pode iniciar a brincadeira, e a primeira coisa a se fazer é mostrar o mapa do local no html. Como funciona?

```js
function initialize() {

// Exibir mapa;
  var myLatlng = new google.maps.LatLng(-8.0631495, -34.87131120000004);
  var mapOptions = {
  zoom: 17,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

// Exibir o mapa na div #mapa;
  var map = new google.maps.Map(document.getElementById(“mapa”), mapOptions);

}
```

O que foi feito?

#### initialize()

Função que engloba todos os parâmetros e configurações do mapa.

#### myLatlng

Variável onde passo a latitude, longitude (nesta ordem) do local do mapa.

#### mapOptions

Objeto onde contém as variáveis de inicialização do mapa.

#### zoom

Define a resolução inicial do mapa, o quanto perto ou longe ele será, os valores podem ir de 0 até qualquer número.

#### center

Define que o mapa será em um ponto específico, ponto este passado na variável **myLatlng**.

#### mapTypeId

Define o tipo de mapa que será exibido: **ROADMAP** mapa padrão, **SATELLITE** blocos fotográficos, **HYBRID** rodovias, cidades, etc.., **TERRAIN** exibe montanhas, rios, etc..

#### map

Variável, atribui a ela um novo objeto **Map** passando as opções definidas no **mapOptions**;

Para o mapa aparecer de fato no seu projeto, é preciso inserir o script da api do google maps, mas não vou declarar no html o script vou inseri-lo no meu **mapa.js** onde ele será carregado de forma assíncrona, melhorando o desempenho. Como faz?

```js
// Função para carregamento assíncrono
  function loadScript() {
  var script = document.createElement(“script”);
  script.type = “text/javascript”;
  script.src =”https://maps.googleapis.com/maps/api/js?key=SUA_API_KEY&sensor=true_or_false&callback=initialize”;

  document.body.appendChild(script);
}

  window.onload = loadScript;
```

O que foi feito?

#### loadScript

Função que faz este procedimento, ela cria através do js a tag script no seu documento html com todos os parâmetros passados abaixo.
Criei um elemento script definindo o **type** e o **src** do mesmo.

> Para os parâmetros do **script.src** onde em `key` você terá que inserir a sua chave de API, em `sensor=true/false` você informa se sua aplicação usa algum sensor para determinar a localização do usuário gps e em `callback=initialize` você instrui a api para só executar a função `initialize()` após a api ser totalmente carregada.

Até agora você conseguiu mostrar o mapa na div que foi declarada no html e carregou de forma assíncrona a API do Google Maps, está duvidando?
Veja como ficou o [código até aqui](https://gist.github.com/thulioph/8150735) e teste na sua aplicação. \o/

## Modificando os controles do usuário

Quando acessamos algum mapa no [Google Maps](https://www.google.com.br/maps/preview) ele nos mostra alguns controles como: **controle de zoom**, **panorâmico**, **controle de escala**, **controle de giro** e **mapa da visão geral**, mas você pode personalizar e escolher o que quer disponibilizar para seu usuário. Caso não queira personalizar nada e deixar seu usuário com todas as configurações padrão, possibilitando que o Google futuramente adicione mais controles, não especifique nada, se você se parece comigo e gosta de “ser do contra” no bom sentido rsrs e quer personalizar, vamos lá!

Para desabilitar todas as configurações automáticas do Google Maps defina a propriedade `disableDefaultUI: true` no objeto `Map` options.
Você também pode escolher quais controles seu usuário terá acesso, os controles só aceitam valores **boolean** e todos definidos dentro de `Map` options, esses controles são:

#### panControl

Controle Panorâmico, seus valores são `true` or `false`.

#### zoomControl

Controle de zoom, seus valores são `true` or `false`.

#### mapTypeControl

Controle de tipo de mapa, seus valores são `true` or `false`.

#### scaleControl

Controle de escala, seus valores são `true` or `false`.

#### streetViewControl

Controle do street view, seus valores são `true` or `false`.

#### overviewMapControl

Controle da visão geral, seus valores são `true` or `false`.

No meu exemplo eu desativei o **controle panorâmico** e agora meu `mapOptions` ficou desta forma:

```js
var mapOptions = {
  zoom: 17,
  center: myLatlng,
  panControl: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};
```

Até este momento, você já consegue visualizar o mapa e escolher quais controles seu usuário terá acesso.
Não duvide, apenas [veja como está ficando](https://gist.github.com/thulioph/8151176) e teste! \o

## Inserindo Pin Personalizado

O marcador do Google Maps é padrão, e você pode alterá-lo e inserir um pin personalizado e dar um efeito a ele.
Imagine que você quer colocar no seu site pessoal um mapa do bairro onde você mora e marcar a sua casa com um pin que será uma imagem sua pra que isso? rsrs vamos lá!

```js
// Marcador personalizado;
  var image = ‘https://cdn1.iconfinder.com/data/icons/gpsmapicons/blue/gpsmapicons01.png’;
  var marcadorPersonalizado = new google.maps.Marker({
  position: myLatlng,
  map: map,
  icon: image,
  title: ‘Marco Zero - Recife/PE’,
  animation: google.maps.Animation.DROP
});
```

O que foi feito?

#### new google.maps.Marker

O construtor capaz de fazer isto.

#### marcadorPersonalizado

Variável que recebe algumas propriedades:

- position: especifica a localização do marcador e como eu quero que ele fique na minha localização, informo a variável que contém estas informações **myLatlng**.
- map: Especifica onde o marcador vai ser posicionado. Caso eu utilize o pin em mais algum local, criei uma variável **image** informando o caminho do meu pin. (valor opcional)
- icon: Especifica a imagem que será o marcador, aqui você inclui o caminho da imagem podendo ser absoluto ou relativo. A própria api irá redimensionar a imagem para o tamanho padrão.
- title: Especifica o texto que irá aparecer ao encostar o mouse em cima do pin.
- animation: Define alguma animação já definida pela api do google maps, os possíveis valores são **DROP** o marcador “cai do céu” para o local indicado e **BOUNCE** o marcador fica pulando no local indicado.

Até aqui você está mostrando o mapa, personalizando os controles e modificando o pin para um de seu gosto e de quebra ainda consegue animá-los.
[Veja como está ficando](https://gist.github.com/thulioph/8151788) até agora. /o/

## Janela de informações no mapa

Em alguns mapas quando o usuário clica no pin do local é aberto uma espécie de balão de texto sobre aquele pin, com algumas informações tipo telefone, e-mail, ou qualquer coisa do gênero. Esta “janela” que se abre é chamada de janela de informações ou `InfoWindow` nome bastante óbvio rsrs, agora vamos inseri-la no nosso mapa. Dando continuidade ao exemplo anterior, agora você quer que quando o usuário clique na sua foto do mapa, apareça seus dados para contato, e-mail, telefone, etc. Mãos a obra!

```js
// Parâmetros do texto que será exibido no clique;
  var contentString = ‘<h2>Marco Zero</h2>’ + ‘<p>Praça Rio Branco, Recife/PE.</p>’ + ‘<a href=”https://pt.wikipedia.org/wiki/Pra%C3%A7a_Rio_Branco_(Recife)” target=”_blank”>clique aqui para mais informações</a>’;

  var infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 700
});

// Exibir texto ao clicar no pin;
google.maps.event.addListener(marcadorPersonalizado, ‘click’, function() {
  infowindow.open(map,marcadorPersonalizado);
});
```

O que foi feito?

#### new google.maps.InfoWindow

Realiza toda a mágica.

#### content

Deverá ter uma string de texto ou nó no DOM para exibir na janela. Aqui dentro será inserido o conteúdo que você deseja que apareça no balão de informações. Caso queira utilizar esta string em outro local, criei uma variável com o nome `contentString` onde inseri as informações do balão.

#### maxWidth

Especifica em pixels a largura máxima do balão de informações. Por padrão a janela se expande para incluir o conteúdo e o texto é quebrado automaticamente, quando se aplica um valor no `maxWidth` você força um determinado tamanho para ela.

> É preciso atribuir um evento ao método `infowindow.open` caso contrário ele não será aberto no clique.
> O `google.maps.event.addListener` adiciona um evento de ‘click’ ao `marcadorPersonalizado`, isso irá disparar o método `infowindow.open` no `map` e no `marcadorPersonalizado`.
> Agora quando você clicar no pin irá abrir o balão de informações com o conteúdo da variável `contentString`.

Mais um nível e esse foi tranquilo hein? Agora você já está mostrando o mapa, personalizando os controles e o pin, animando o pin e inseriu um balão de informações no clique do usuário.
Confere [como está ficando](https://gist.github.com/thulioph/8152405) o código e vamos para o último passo! \o\ /o/

## Modificando a cor do mapa

Pra completar o design do seu site, você queria pintar o mapa do seu bairro com sua cor favorita que é azul, para isso você precisará criar seu estilo e para inserir um estilo personalizado no seu mapa você precisa saber como é a matriz de estilos padrão para quando combinar os estilos obter o resultado que deseja. Vamos lá?

#### featureType

Especifica o tipo de mapa.

#### elementType

Especifica o tipo de elemento que será exibido no mapa, os valores suportados são:

- geometry: todos os elementos geométricos
- geometry.fill: seleciona apenas o preenchimento da geometria
- geometry.stroke: seleciona apenas a textura da geometria
- labels: seleciona apenas rótulos textuais
- labels.icon: seleciona apenas o ícone do rótulo
- labels.text seleciona apenas o texto do rótulo
- labels.text.fill seleciona apenas o preenchimento do rótulo
- labels.text.stroke seleciona apenas a textura do texto

#### stylers

É desta combinação de estilos que a cor irá se originar, os valores que você pode trabalhar são:

- hue: String hexadecimal RGB que indicará a cor básica.
- lightness: Indica o brilho do elemento, valores negativos aumentam a escuridão, este valor varia de -100 e 100.
- saturation: Intensidade da cor básica a ser aplicada, este valor varia de -100 e 100.
- gamma: Modificam a luminosidade das matizes, utilizados para modificar o contraste dos elementos, este valor varia entre 0.01 e 10.0.
- inverse_lightness: Se `true`, inverte a luminosidade existente.
- visibility: `on`, `off` ou `simplified`, indica como um elemento aparece no mapa.

```js
// Criando um array com os estilos
var styles = [
{
  stylers: [
   { hue: “#41a7d5” },
   { saturation: 60 },
   { lightness: -20 },
   { gamma: 1.51 }
  ]
},
 {
  featureType: “road”,
  elementType: “geometry”,
  stylers: [
   { lightness: 100 },
   { visibility: “simplified” }
  ]
 },
 {
  featureType: “road”,
  elementType: “labels”
 }
];
```

O que foi feito?

Criei uma matriz de estilos descrita acima, que nada mais é do que um array com os estilos do mapa, onde neste array é passado as cores e os estilos para exibição.
Agora crio um novo objeto `google.maps.StyledMapType` passando a **matriz que foi criada** e um nome para o novo tipo de mapa.

```js
var styledMap = new google.maps.StyledMapType(styles, {
  name: “Mapa Style”
});
```

Crie o objeto do mapa e nas opções do mapa `mapOptions` inclua um identificador para o novo tipo de mapa `map_style`.
Isto irá possibilitar o usuário a visualizar o mapa tradicional do Google `google.maps.MapTypeId.ROADMAP` e o seu mapa `map_style`.
Para visualizar isto, observe no canto superior direito do mapa, se você desejar só disponibilizar o seu tipo de mapa, é só em `mapTypeIds` deixar o identificador do seu mapa.

```js
  mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, ‘map_style’]
  }
```

Associe o estilo do mapa com o **MapTypeId**.

```js
  map.mapTypes.set(‘map_style’, styledMap);
  map.setMapTypeId(‘map_style’);
```

E é isso, agora você já está apto para inserir um mapa, personalizar controles e pin, animar o pin e customizar as cores do seu mapa.
Veja o [código completo aqui](https://gist.github.com/thulioph/8153570)!

## Referências

- [Google Developers - Maps documentation](https://developers.google.com/maps/documentation/javascript/tutorial?hl=pt-br/)

---

O post ficou enorme, mas espero que eu tenha sido bastante claro e tenha conseguido transmitir da melhor forma este conteúdo pois a API não é difícil, consegui fazer isso tudo em um único dia e vocês também podem.
Qualquer dúvida ou se acha que fiz algo de errado, entre em contato comigo ou deixa nos comentários.
