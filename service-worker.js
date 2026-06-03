const CACHE_NAME = 'inv-why-news-pwa-fixed-v4';
const APP_SHELL = [
  './',
  'index.html',
  'about.html',
  'contact.html',
  'privacy.html',
  'style.css',
  'script.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-192.svg',
  'icon-512.svg',
  'logo.png',
  'about-hero-dubai.jpg',
  'company-profile.pdf',
  'properties-from-sheet.json'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request).catch(() => caches.match('index.html'))
    )
  );
});
