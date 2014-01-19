var appCache = window.applicationCache;

// switch (appCache.status) {
//   case appCache.UNCACHED: // UNCACHED == 0
//     return 'UNCACHED';
//     break;
//   case appCache.IDLE: // IDLE == 1
//     return 'IDLE';
//     break;
//   case appCache.CHECKING: // CHECKING == 2
//     return 'CHECKING';
//     break;
//   case appCache.DOWNLOADING: // DOWNLOADING == 3
//     return 'DOWNLOADING';
//     break;
//   case appCache.UPDATEREADY:  // UPDATEREADY == 4
//     return 'UPDATEREADY';
//     break;
//   case appCache.OBSOLETE: // OBSOLETE == 5
//     return 'OBSOLETE';
//     break;
//   default:
//     return 'UKNOWN CACHE STATUS';
//     break;
// };


// Verifica se um novo cache está disponível no carregamento da página.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // O Browser baixa o novo cache
      // Troque o cache e recarregue a página para obter o novo conteúdo
      window.applicationCache.swapCache();
      if (confirm('Uma nova versão do site está disponível. Recarregue a página!')) {
        window.location.reload();
      }
    } else {
      // O manifesto não mudou, não existe nada de novo.
    }
  }, false);

}, false);