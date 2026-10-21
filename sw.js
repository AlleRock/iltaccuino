'use strict';
// App-shell offline + tentativo di aggiornare sempre l'archivio ristoranti.
const CACHE='il-taccuino-v1';
const CORE=['./','./index.html','./ristoranti.txt','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE && k.startsWith('il-taccuino-')).map(k=>caches.delete(k)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const u=new URL(event.request.url);
  if(u.origin!==self.location.origin)return;
  event.respondWith(
    fetch(event.request,{cache:'no-store'}).then(response=>{
      if(response.ok){
        const clone=response.clone();
        event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,clone)));
      }
      return response;
    }).catch(async()=>{
      const cached=await caches.match(event.request);
      if(cached)return cached;
      if(event.request.mode==='navigate')return await caches.match('./index.html');
      return Response.error();
    })
  );
});
