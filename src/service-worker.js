self.addEventListener('install', function(e) {
	console.log("[serviceWorker] Installed")
})

self.addEventListener('activate', function(e) {
	console.log("[serviceWorker] Activated")
})

self.addEventListener('fetch', function(e) {
	console.log("[serviceWorker] Fetching", e.request.url);
})