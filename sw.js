const CACHE_NAME = 'rova-ultra-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  // Vi laddar ner graf-motorn till telefonens minne!
  'https://cdn.jsdelivr.net/npm/chart.js' 
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
