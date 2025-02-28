const CACHE_NAME = 'masjid-an-noor-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/ramadan.html',
  '/contact.html',
  '/styles/main.css',
  '/styles/tailwind.css',
  '/scripts/main.js',
  '/scripts/ramadan.js',
  '/images/image.png',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// Fetch from cache or network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});