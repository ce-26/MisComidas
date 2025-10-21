const CACHE_NAME = 'mis-comidas-cache-v1';
const urlsToCache = ['./','./index.html','./styles.css','./app.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)))});
self.addEventListener('activate', e=>{e.waitUntil(clients.claim());});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
