"use strict";var precacheConfig=[["/index.html","feda912da76eb535649f6e6f87b7041d"],["/static/css/main.4a4499c9.css","a4e879b4c0573e3fce3e76d174f066aa"],["/static/js/main.a281f536.js","a2bf87d7c742ed77bddf0ea27f6363db"],["/static/media/angular.996f8ae1.png","996f8ae1711a11cb91408cc0f6445228"],["/static/media/bootstrap.237f47d3.png","237f47d35631cfd9d874761a2046f4a0"],["/static/media/clutch-analytics.cb9caa15.png","cb9caa15abbc674221111e6c67480f10"],["/static/media/docker.295cb1db.png","295cb1dbe81ebc9a41a40ef2ac48c396"],["/static/media/firebase.d4219a5c.png","d4219a5c7b2df6f04094b91cab31827d"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/fujitsu.4e3355ae.png","4e3355ae44a763c858a12c573ef99ce6"],["/static/media/hadoop.f277f36a.png","f277f36abdc34f4626743ceadd06d250"],["/static/media/jquery.bbadeaee.png","bbadeaeee06785d2bb642d241fa74339"],["/static/media/longhorn.ce766ce9.png","ce766ce933dc38934454a559abfca53e"],["/static/media/mongodb.fc72216b.png","fc72216ba751109a3fe3c74ed255dc10"],["/static/media/nodejs.88b0e853.png","88b0e853ebe112617fc562f3d451b996"],["/static/media/project_1.8dba9259.png","8dba9259a610ee04bdc9a03ee6ae6979"],["/static/media/project_2.3f3ff846.png","3f3ff846a2c19e60137492e93547ff75"],["/static/media/project_3.69de0eba.png","69de0ebae4571d87541836f49f5a35ca"],["/static/media/project_4.548d6679.png","548d6679489e13710d7a707859780640"],["/static/media/project_5.0585a90f.png","0585a90fab4fbc0e5e3a7fd3c4629d57"],["/static/media/react.0ca8c233.png","0ca8c233642b10d56b2c9b0ffbf1b684"],["/static/media/redux.9fa00966.png","9fa009662b45cc0f6609f8eba83adbe5"],["/static/media/swift.96c24a2d.png","96c24a2dab108f3b52d3435cc95a23f7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});