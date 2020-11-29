const staticMeTime = "metime-site-v1"
const assets = [
  "/",
  "/index.html",
  "/404.html",
  "/about.html",
  "/solution.html",
  "/css/style.css",
  "/css/about.css",
  "/css/solution.css",
  "/javascript/main.js",
  "/javascript/about.js",
  "/javascript/solution.js",
  "/img/coffee1.jpg",
  "/img/coffee2.jpg",
  "/img/coffee3.jpg",
  "/img/coffee4.jpg",
  "/img/coffee5.jpg",
  "/img/coffee6.jpg",
  "/img/coffee7.jpg",
  "/img/coffee8.jpg",
  "/img/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMeTime).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})