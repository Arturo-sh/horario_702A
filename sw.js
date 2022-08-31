self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./css/style.css", "./css/table.css", "./images/logoApp.png", "./src/date.js"]);
        })
    );
});

self.addEventListener("fetch", e => {
    //console.log(`Intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});