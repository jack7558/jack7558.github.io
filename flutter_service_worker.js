'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "b10115295952a3cb98fca9b80efcc2a6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "38b83951ba38a7cc0cb5cdc673851be0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/0a/fb5334381340834dcb320723970209f6e8a55f": "3d6501eebf9ee2cf2cbb03852c940c4e",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/e01f4a7733bbcbfab972b1cc8174084a973bbc": "2b58b87701d59d5c95e85b293e4e1c67",
".git/objects/13/e74fd7116e1b899ad2259a692be8fb717393cb": "34687638a0704b8a04e86d12c8181399",
".git/objects/18/0505582756ddfa6bd3c1f710a7500e682e1be5": "802f16c8d6447abab4d3d7c8c51e9551",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/2d95cfed77bdf9d82ae46f73eaba9ced8c3ca1": "65cbc361d2a03d665cebd2c3683dc788",
".git/objects/1f/91b09d2ab012d2866b9573d23c41c829110266": "8927275e2e3835fdbf2c16cac7359c35",
".git/objects/2d/d767917ceec609b9d69d1ee5484b91830f09f5": "e749611394485f7466dc3a63d31c0826",
".git/objects/2f/c03136d071911b52c4995652de750f1dd1ebc2": "56731e91552df39c898617f831721902",
".git/objects/3c/245b8f3a23c198417add583f1c4643a502ba6c": "bfaff70193e35095856bcf7261b4d563",
".git/objects/40/29121cf8b5f6e596f3961f100b067fed3cc9b4": "056130377d2f0b46ddf6318850298549",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/52/5496c3b5e629ea5a97e8642f81857ad270e8a8": "f29176fd8a3932c79c4b4ea45e2d4da5",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/58/69480e615b0fef191d678444f078184219dcff": "10ecca54b0115d96f6046d2fc5616f05",
".git/objects/5c/d754bc003da484b31b032156858421f1a37bf9": "2133a2d675089ecc8dd119cbdc7380ab",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/3f7d8c56b96dee0ef236ff50a6b83cf17534cf": "50b084944932e82e16e40c0a2e63d349",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/87/4e8fccac7707112453ff9f6b411423c8bde9a4": "d13d64112bdf3e9bc9ac22d07323d1f5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/93/b5ef8333f8c3af45632762e2ad0a9701841d3d": "ff77c8f8da7fd5eaf291f5a8d53eef38",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a5/ab8ec6170c95ad31dcf547503eae69d799cb04": "bcc6efb85b6b841f70b6d89a8c02a8d9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8b4a31027c39c774d48309091ca3c0d7ab6216": "0441c55bd41146b29cd166ee60b2b273",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c5/3a89b463f9881c9468d72f2c67a52d87170545": "6867d5a3f473aa63690e9e7a155441cf",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/cf68017ac12922c8a90e617a81c645cfe7c6ab": "8fe9eab6c928e31bf831b10aca7316ed",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/79073e9bb8012a99ece554d4fa7a8483c90d28": "41feee89b041337985e3c04ae3e67151",
".git/objects/e4/b19ed2237fda0ea2735dc526aaef3bd593574d": "32722cd85b1f90026739c1c9fa9decb9",
".git/objects/e5/83abdf24bac7fa004180856e84130dfb58dfaf": "6c17072649238008d92d16feebcd9e96",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/25376347ad76d89f8e8f3106ab2c36ea4b211e": "e28136d7dcb67c5a26ea62e186d50ec5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/ea80b5a217e4b8f746a14bb213407271d3221f": "f7ddcdd466fdd55cd3621a4da863fcb4",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
"assets/AssetManifest.bin": "d0d994db2573a67edd2a2823d7e14802",
"assets/AssetManifest.bin.json": "3c8a2aec4bd714ed0125f9f392acbc00",
"assets/AssetManifest.json": "1d146b4f04e30dd50d530b351c7824d3",
"assets/assets/blessedchurch.png": "88bcbba8305132771843c6d8840875a2",
"assets/assets/main.jpg": "9b45b0f4cdb847b2b497364606ad9a77",
"assets/assets/mountain.jpg": "3f05a56f46ce613f1895efa187c14280",
"assets/assets/slide1.jpg": "58e62bc4b2a5445d6b321454f52112ed",
"assets/assets/slide2.jpg": "3673e06c41504342b33288e879c8762b",
"assets/assets/slide3.jpg": "a8ad54f1fc779e4afc0066eb1823daed",
"assets/assets/Title_Light.otf": "f7aa60d58493d22e7cf33e3b8e6f4af8",
"assets/assets/Title_Medium.otf": "c4ce115d7574137b1611bb25f19c1bf5",
"assets/FontManifest.json": "016ee8d7919160a16800c9f0727fdbab",
"assets/fonts/MaterialIcons-Regular.otf": "85bf1891d2959b324cf34116db0a922a",
"assets/NOTICES": "770cec66dcba6a0034f3dad067ab9019",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "15f0d17c647d65d75e9c4437721a8899",
"canvaskit/canvaskit.wasm": "a0f3571913cddd03fb8546496d3d2bb2",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "518c91523c28686c55c874a99426b353",
"canvaskit/chromium/canvaskit.wasm": "ae6292306d9b6d3d2bbda8b9531159c2",
"canvaskit/skwasm.js": "37fdb662bbaa915adeee8461576d69d7",
"canvaskit/skwasm.js.symbols": "c259d0523dd2a12504b8e4a79fac58e2",
"canvaskit/skwasm.wasm": "e4c14dd94c91efe290443501d6f794a6",
"canvaskit/skwasm_heavy.js": "f5c1413d222bc68856296fc97ac9fec0",
"canvaskit/skwasm_heavy.js.symbols": "1672d99de27795c2f5633eb4e102923d",
"canvaskit/skwasm_heavy.wasm": "5375f071fa111dac4638c8f94f3db63a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"flutter_bootstrap.js": "b77bce7187d9e7b2acee6ed68241345c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7b9464854980d7f85ebb53d0d743bed0",
"/": "7b9464854980d7f85ebb53d0d743bed0",
"main.dart.js": "f713bcec5a43b59bc54ea808dbdff6dc",
"manifest.json": "77ca0c5efe73a54d57bdfd7328cb249c",
"version.json": "6aa7d4791171e8845a3c994d90b3a652"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
