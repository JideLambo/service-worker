var cacheName = 'v2';
var cacheFiles = [
	'./',
	'index.html',
	'./css/reset.css',
	'./css/style.css',
	'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic',
	'./js/app.js'
]

self.addEventListener('install', function(e) {
	console.log("[serviceWorker] Installed")

	e.waitUntil(

		caches.open(cacheName).then(function(cache) {

			console.log("[serviceWorker] Caching cacheFiles");
			return cache.addAll(cacheFiles);
		})
	)
})

self.addEventListener('activate', function(e) {
	console.log("[serviceWorker] Activated")

	e.waitUntil(

		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {

				if (thisCacheName !== cacheName) {
					console.log("[serviceWorker] Removing Cached Files from ", thisCacheName);
					return caches.delete(thisCacheName);
				}
			}))
		})
	)
})

self.addEventListener('fetch', function(e) {
	console.log("[serviceWorker] Fetching", e.request.url);
})