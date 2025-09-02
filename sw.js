

// Service Worker for Brain Rot Assessment - Performance Optimization v2.0
const CACHE_NAME = 'brain-rot-v2.0.0';
const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './sitemap.xml',
    './robots.txt'
];

// Install event - cache static assets with error handling
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(STATIC_ASSETS.map(url => new Request(url, {
                    cache: 'reload'
                })));
            })
            .then(() => self.skipWaiting())
            .catch((error) => {
                console.error('Service Worker install failed:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter(cacheName => cacheName !== CACHE_NAME)
                        .map(cacheName => caches.delete(cacheName))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - stale while revalidate strategy
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    // Skip POST requests and other non-GET methods
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                const fetchPromise = fetch(event.request).then((networkResponse) => {
                    // Don't cache non-successful responses
                    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(() => {
                    // Network error, return cached version if available
                    return cachedResponse;
                });

                // Return cached version immediately, update in background
                return cachedResponse || fetchPromise;
            });
        }).catch(() => {
            // Cache error, try network only
            return fetch(event.request).catch(() => {
                // Both cache and network failed
                if (event.request.destination === 'document') {
                    return new Response('<h1>Offline</h1><p>Please check your internet connection.</p>', {
                        headers: { 'Content-Type': 'text/html' }
                    });
                }
            });
        })
    );
});

