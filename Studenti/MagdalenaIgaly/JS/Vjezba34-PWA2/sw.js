const cacheName = 'mypwa';
const appShellFiles = [
    'index.html',
    'app.js',
    'icon-192.png',
    'icon-512.png',
    'sw.js',
    'mypwa.json'
];

self.addEventListener('install', event => {

    console.log('Service worker installed');

    const createCache = async () => {

        const cache = await caches.open(cacheName);
        console.log('Service worker Caching All');
        await cache.addAll(appShellFiles);
    }

    event.waitUntil(createCache());

});

self.addEventListener('fetch', event => {

    console.log(`You fetched ${event.target.url}`);

    const useCache = async () => {

        const cachedResponse = await caches.match(event.request);
        if(cachedResponse) {
            return cachedResponse;
        }
        
        const response = await fetch(event.request);
        return response;

    }

    event.respondWith(useCache());

});