---
path: "/writings/pt/api-geolocation"
date: 2014-03-10T02:00:00
title: "API Geolocation"
imageSlug: ""
lang: 'pt'
---

Depois de tanto tempo distante, para ser mais preciso 1 mês e 16 dias estou de volta e hoje vou falar sobre a [API Geolocation do HTML5](https://www.google.com.br/search?q=geolocation+api+html5&oq=geolocation+api+html5&aqs=chrome..69i57j69i65j0l4.2541j0j7&sourceid=chrome&espv=210&es_sm=119&ie=UTF-8), que por sinal já é “bastante” antiga mas eu ainda não tinha conseguido fazer nada com ela, nem se quer mostrar um mapa :( Maaas agora as coisas mudaram, depois de ver com calma e brincar um pouco, finalmente consegui utiliza-la e hoje irei mostrar como, **LET’S WORK**!

O resultado deste post é este [aqui](http://thulioph.github.io/geolocation/) e você pode ver todo o código comentado [aqui](https://github.com/thulioph/geolocation).

## Iniciando

A api é bastante simples e este é seu código:

```js
navigator.geolocation.getCurrentPosition(success, error);
```

> Papaya with sugar hein?

Você passa como parâmetros duas funções callback: **success** e **error**, que irão determinar o que vai acontecer caso o usuário permita ser localizado ou não.

### Success

Caso o usuário permita ser localizado, esta função irá me retornar o mapa com a sua localização e um pin marcando.

```js
function success(position) {
   var status = document.querySelector('status');
      if (status.className == 'success') {
      return;
   }

   status.className = 'success';
   status.innerHTML = 'Sua localização está no mapa abaixo.';

   var myLatlng = new google.maps.LatLng(position.coords.latitude,
   position.coords.longitude);
      var mapOptions = {
      zoom: 17,
      center: myLatlng,
      panControl: false,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   }

   var contentString = '<h2>Você está aqui</h2>' +
      '<p>Este foi um exemplo de como pegar a geolocalização do usuário</p>';
      var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 700
   });

   var map = new google.maps.Map(document.getElementById('mapuser'), mapOptions);

   var image = 'https://cdn2.iconfinder.com/data/icons/snipicons/500/map-marker-128.png';
   var marcadorPersonalizado = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      animation: google.maps.Animation.BOUNCE
   });

   google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
      infowindow.open(map,marcadorPersonalizado);
   });
}
```

O que foi feito?

Criei uma variável `status` que recebe o id com o mesmo nome que foi determinado no meu html. E se `status` receber a classe `success` ele retorna tudo que estiver dentro da função `success`.


O que a função success faz?

- Adição da classe success através do `status.className`.
- Através do `status.innerHTML` foi passado um texto que irá informar uma mensagem ao usuário.
- A exibição do mapa através das coordenadas que foram retornadas pela API quando o usuário aceitou ser localizado e a estilização do mapa incluindo um pin e ocultando algumas opções do mapa.

Sobre a exibição do mapa, recomendo ler o material onde [falo tudo sobre a api do google maps](http://thulioph.com/writings/pt/google-maps-api-v3) e a única diferença nesta parte foi que inseri o retorno `position.coords.latitude`, `position.coords.longitude` da api na variável `myLatlng` e não declarei a latitude e longitude como no exemplo do outro post.

### Error

Caso o usuário não permita ser localizado, esta função irá me retornar uma mensagem informando que o usuário não permitiu ser localizado.

Na função error eu tenho:

```js
function error(msg) {
  var status = document.querySelector('status');
  status.innerHTML = typeof msg == 'string' ? msg : 'Você não permitiu ser localizado.';
  status.className = 'fail';
}
```

O que foi feito?

Criei uma variável `status` que recebe o id com o mesmo nome que foi declarado no meu html.

O que a função **error** faz?

- Adição da classe fail através do `status.className`.
- Através do `status.innerHTML` foi passado um texto que irá informar uma mensagem ao usuário.

Resumindo A API é bastante simples e te retorna dois valores `position.coords.latitude` onde indica a latitude e `position.coords.longitude` onde indica a longitude, só precisei indicar onde queria esse resultado e o resto eu já tinha feito praticamente tudo no outro [post](http://thulioph.com/writings/pt/google-maps-api-v3).

Espero que vocês tenham entendido e feedbacks são sempre bem vindos.

Links de Referência:

- http://tableless.com.br/html5/?chapter=24
- https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation

