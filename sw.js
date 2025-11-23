const cacheName = 'elite-deals-cache-v3';
const filesToCache = [
  '/',
  '/index.html',
  '/sw.js',
  'https://img.icons8.com/ios-filled/50/000000/instagram-new.png',
  'https://img.icons8.com/ios-filled/50/000000/qr-code.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
