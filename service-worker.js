const CACHE = "luve-v2";

const urls = [
  "./",
  "./index.html",
  "./carrito.html",
  "./1.jpeg",
  "./2.jpeg",
  "./3.jpeg",
  "./4.jpeg",
  "./5.jpeg",
  "./6.jpeg"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE).then(cache=>{
      return cache.addAll(urls);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      return res || fetch(e.request);
    })
  );
});