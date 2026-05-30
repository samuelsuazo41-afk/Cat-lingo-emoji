const CACHE_NAME = 'cat-lingo-v2-cache';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './main.js',
  './data/biblioteca_emojis.json',
  './data/botiga_emojis.json',
  './data/minijoc_frases.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-maskable-512.png'
];

// Instal·lació: cachejar tot
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activació: esborrar caches velles
self