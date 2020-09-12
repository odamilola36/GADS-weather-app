let urls = [
    './',
    './assets/Rain.svg',
    './css/index.css',
    './js/index.js',
    './js/api-mock.js',
    './js/toDom.js'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('weathertuj').then(function(cache) {
      return cache.addAll(urls);
    }).catch((err) => console.log(err))
  );
});