'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3054e3173fd4c0ae3a82c24d7783623a",
"version.json": "b5568c412588f9002a99d7f4a56ab532",
"index.html": "5666ce4cbb8839a3da39799fcb7ea90b",
"/": "5666ce4cbb8839a3da39799fcb7ea90b",
"main.dart.js": "b92d41cbe5300765ba3ab751654e3746",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aed418ccfa10fd09cf67ca09cbb1c32f",
"assets/AssetManifest.json": "1686445fa77ea91c7a46791d5a5ac760",
"assets/NOTICES": "a1269b7c35c757138b3654fe88a08315",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "52ca3e915d5bda23d5f3a7ee5f698faf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "85028f4cf359a451d2d2300c7efdb5a1",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/splash/img_splash.png": "676873c031c0e0dd861f85ea5da420d3",
"assets/assets/splash/ic_splash.png": "573fc1fb345d6d4473a8d9fa6457b8a6",
"assets/assets/images/ic_phone.svg": "98ba8e44098ece6fa5538c3cf7ba69ae",
"assets/assets/images/ic_comment_review.svg": "46b6ea631cb47a2794d5aa0fb033829e",
"assets/assets/images/ic_ashcan.svg": "5f43956a230d9a1b22ec4c3de41ed92f",
"assets/assets/images/ic_filter.svg": "971a7eda8927c217726de9c8c536a8f0",
"assets/assets/images/img_empty_data.png": "7796a68465b8f5c0817894c3482483c9",
"assets/assets/images/ic_pass_eye_close.svg": "cadda4f3f938ab3f3ea2077c829d7b46",
"assets/assets/images/ic_subscribe_diamond.svg": "2b420dba67185a359a273ddd67475270",
"assets/assets/images/ic_app_share_logo.png": "932890f5ca35bb94a69ba4944dafeff5",
"assets/assets/images/ic_login_phone.png": "97ee65ebbb2869835276801ead316c1e",
"assets/assets/images/ic_facebook.svg": "518caf89bb1928c496b4caacd496c141",
"assets/assets/images/ic_news_collect_active.svg": "29c5386ecf51c6e680b23ce77299348a",
"assets/assets/images/ic_share_facebook.png": "e277d012f5f47cb34a0d12ffe7dc4922",
"assets/assets/images/ic_login_wechat.png": "9bb9b3ab0f373f66a4f1a32f2b60592d",
"assets/assets/images/ic_home_nav_zt.png": "bf650a6b595ecaf892a5253d54ac107e",
"assets/assets/images/img_mine_top_bg.png": "ab19b1fb5221fc69a66376dedb1aad59",
"assets/assets/images/img_vip_card_bg_logo.png": "2c7ab4ac79f7b95fb0ed00c1baddd90f",
"assets/assets/images/ic_x.svg": "d0a4fac97149ba7989cb73ca8ac560b9",
"assets/assets/images/ic_kf_phone.svg": "ccc86e3efc77225aaad3e158dc7359c1",
"assets/assets/images/ic_share_whatsapp.png": "084b3cba88f142c3e40997248ea01ca3",
"assets/assets/images/ic_search_clear.svg": "fdf83ac6197ed813eb331b4ead61df23",
"assets/assets/images/ic_pay_alipay.png": "592363951ef75e8463419e6519659576",
"assets/assets/images/img_sxcoal_wx_account.png": "c466ca49f6da959f18932699ee8cd756",
"assets/assets/images/ic_share_wechat_1.png": "21b52371773c40d144acfd82217646fe",
"assets/assets/images/ic_tab_discover.svg": "d62a2434a627a1c1c31f3bf96f70bc40",
"assets/assets/images/img_vip_logo.svg": "3cc6fdc872eeda1bcc6598028568e105",
"assets/assets/images/ic_comment_like_active.svg": "083b229cbcafa360377f3fccfd25b306",
"assets/assets/images/ic_arrow_more.svg": "c54f5754b0ae50d0eb7be5bd24f14b67",
"assets/assets/images/ic_chart_triangle_erect.svg": "4421398cba4049646958cb077ed08339",
"assets/assets/images/ic_vip_level_3.png": "f9d7441bb62206834a4cf597b8a88969",
"assets/assets/images/ic_home_nav_meet.png": "032e975bc0d3b0ce737c0a357a8aa021",
"assets/assets/images/ic_location_address.svg": "bf7d05a9a871e494b18e338045110463",
"assets/assets/images/ic_kf_telephone.svg": "1828b618f2164d2c4273626ee7b0c9e9",
"assets/assets/images/ic_pay_wechat.png": "47e0463f8bf7a6b1f24e11666f758945",
"assets/assets/images/ic_vip_level_2.png": "fefb5ac0f4b0db86e1fcbefd14501ee9",
"assets/assets/images/ic_share_copy_link.png": "f0b39e19161b4ee5486e0a3710fad8c3",
"assets/assets/images/ic_news_collect_normal.svg": "c0ec9296994fb19f2bcb2dfa8964f96e",
"assets/assets/images/ic_whatsapp.png": "4fd5626d4bdc0d935a487540f91505c1",
"assets/assets/images/ic_login_password.png": "42cc3b5aa2dc6afc5363f30adaa2027f",
"assets/assets/images/ic_bold_back.svg": "07a58794d2aae47edbc03713070efa4e",
"assets/assets/images/ic_mine_subscribe.svg": "30d5a0a41a0ac877f0261d9b36f0f776",
"assets/assets/images/ic_home_nav_report.png": "45d84d5e36e5fbf89bc9a192f2484c2f",
"assets/assets/images/ic_calendar.svg": "40fbac8477e68191462bc00ca60d0c02",
"assets/assets/images/ic_share_twitter.png": "6a76bb2296bc992a8e12e514b085d9ae",
"assets/assets/images/ic_vip_level_1.png": "ff4f1dceaa9f359edf7c789512995dbc",
"assets/assets/images/currenty_fl.png": "8cdbf899cb13375a098174a90fba833f",
"assets/assets/images/ic_pass_eye_open.svg": "e10d7484504ee26c1d17be8a34098681",
"assets/assets/images/img_vip_card_bottom_box.svg": "6d6b7554f245644ae5bddea9cda4c0d5",
"assets/assets/images/ic_vip_level_5.png": "00dc5369f8bc04918b41bfc2355759e7",
"assets/assets/images/ic_password.svg": "49601282d5269b2a55456c9c71bda165",
"assets/assets/images/ic_round_checkbox_active2.svg": "ce15c71dc4435277962f484aa359914d",
"assets/assets/images/ic_arrow_bottom.svg": "6426c654659fa791ed315b92295823b9",
"assets/assets/images/ic_default_avatar.svg": "da6cf82a485a8de498e8f4ea3019edb1",
"assets/assets/images/ic_drag.svg": "33fef506870fe7dde5532d51564e35ee",
"assets/assets/images/ic_vip_level_4.png": "c54b5df21f9a7e842f2438549baa28e4",
"assets/assets/images/ic_pay_paypal.png": "b53fc14a18c3767b17e05ff9df26ba84",
"assets/assets/images/ic_comment_like_normal.svg": "c7fff5285afbbc6dacf91cc14e5d26ac",
"assets/assets/images/ic_vip_level_6.png": "85478e1f29c839322afc58836b20f2f8",
"assets/assets/images/ic_arrow_right.svg": "6d601b33aea826d47ac710aff3b580f9",
"assets/assets/images/ic_news_label_setting.svg": "c7b76e081545df15ff8978817844a139",
"assets/assets/images/ic_round_checkbox_active1.svg": "fbdfc6acc48767cbaf3d5c9478a6ed46",
"assets/assets/images/img_kf_header.png": "9e5b6419606aa438060adb1917527ee5",
"assets/assets/images/ic_back_top.svg": "eb7e97cbd94fdacf0d005477cc805104",
"assets/assets/images/ic_pay_offline.png": "6d0151b7d9081ae1c7a2539ca5941534",
"assets/assets/images/ic_wechat_account.svg": "0d8064a27cded01f9331d251f6064bfc",
"assets/assets/images/img_kf_middle.svg": "1ddfc93d7bc8ef9a869c34b022177868",
"assets/assets/images/ic_wechat.svg": "b6389dbbb3eaa51670edb36d5e162017",
"assets/assets/images/ic_home_nav_more.png": "9e6a759da6785a917009c8a900cff036",
"assets/assets/images/ic_vip_checkbox_normal.svg": "0bd800b6c4394d551ebeac0f8101bad6",
"assets/assets/images/ic_new_version_logo.svg": "18a84e979353e3a72b6a1900ff80f6b3",
"assets/assets/images/ic_subscribe_logo5.svg": "8d10629692997f2e008a1129bbc7991e",
"assets/assets/images/ic_tab_price_data1.svg": "482b6e71b6dc1141afdd028a86823466",
"assets/assets/images/ic_tab_home1.svg": "901c4fda7703d446fbb9515873cf39ec",
"assets/assets/images/img_sxcoal_wx_group.png": "11d350cf9eee38dd2b2f6e828ac4fdfe",
"assets/assets/images/ic_active_location.svg": "bcaa124c3ca8f800634990befe5ed3a8",
"assets/assets/images/ic_tab_information1.svg": "15da70e44e35a74a5911151e95e7f47e",
"assets/assets/images/ic_kf_email.svg": "353dbccfce28e9b94a5ff5349c730f6d",
"assets/assets/images/ic_chart_triangle_handstand.svg": "be0c9a3f236ead14e36648a1dce0781a",
"assets/assets/images/ic_subscribe_logo4.svg": "178f3078a9969c1120d0f157b0fa26d7",
"assets/assets/images/ic_share_save_photo.png": "7f7cf2816f471c5265077cfe18733cd3",
"assets/assets/images/img_book_conver.svg": "1e800d2dd409e3e396545f1a47eadb66",
"assets/assets/images/bg_flash_news_share.png": "ae1234c8f1308d69e4b4f1d4a0e779df",
"assets/assets/images/ic_black_round_logo.png": "c3b57efab630ba586465e759fcff1f25",
"assets/assets/images/ic_launcher.png": "f047f585059a20faf2627339e6e2e0c7",
"assets/assets/images/loading_fail.svg": "d21d8e99cb26358f4cc8f771e2bf9b63",
"assets/assets/images/ic_vip_equity_table_en2.png": "cb9e23f2552178bc00984906be87cbda",
"assets/assets/images/ic_circle_gray_add.svg": "016ee97c631bfd74fa5cd5c7207218db",
"assets/assets/images/ic_subscribe_logo1.svg": "9dc8d30a94487c8a2ae91d5086812b99",
"assets/assets/images/ic_journal_badge.svg": "e9398ecf57c57268b09fb2a58f979493",
"assets/assets/images/ic_login_sina.png": "ba2a4261546791eb0c631a0c6d5e9311",
"assets/assets/images/ic_check.svg": "f2e6224a40de9b1a82362589e661dbca",
"assets/assets/images/ic_subscribe_logo3.svg": "7211a1936e01c2971514ab23dc7a3dbd",
"assets/assets/images/ic_news_like_active.svg": "4e7fbf1c31a1c351b928e7187d98c325",
"assets/assets/images/bg_share_news.png": "77fcd85bcd89e3929d0cbf923a30c4bb",
"assets/assets/images/ic_search_voice.svg": "a7fa59c897fc482fc64f726077359b6d",
"assets/assets/images/ic_arrow_top.svg": "8f82c82d65fd56288d1a6db09a2787f0",
"assets/assets/images/ic_email.svg": "be67fd429c583ee05c7c9ff3c416f365",
"assets/assets/images/ic_mine_order.svg": "4505f924ef3a8c79e56972276b190aed",
"assets/assets/images/ic_go_comment.svg": "c3349fab74d7675a94a2a35d7c267150",
"assets/assets/images/ic_circle_checkbox_normal.svg": "ec83bbe26f658f4cf2ee4a2290e79b12",
"assets/assets/images/ic_subscribe_logo2.svg": "42b771cc9430c38fc1b97eefc878c70a",
"assets/assets/images/img_vip_cell_bg_logo.png": "d1c487b35e05d6ecf028c56680c777e1",
"assets/assets/images/ic_round_checkbox_normal.svg": "4ee1d371014af1a3b130aa7f5a5f976d",
"assets/assets/images/ic_pay_dialog_cancel.svg": "bca93d593eb3578face1a9ea8426a131",
"assets/assets/images/ic_vip_equity_table_zh2.png": "331512c0f4ff82614aba44e44aad49ab",
"assets/assets/images/ic_vip_checkbox_active.svg": "c9e2388e87ab95816704960614c81a42",
"assets/assets/images/ic_in.svg": "b4683640a82b65e03394511a86976ce8",
"assets/assets/images/bg_unlock_report_dialog.png": "96329a9b0ad91598aa2fffcf911c2965",
"assets/assets/images/ic_back.svg": "99820278fbdfc51724f3901e24ca3e52",
"assets/assets/images/ic_mine_footmark.svg": "8660caa640202ad6511c9cb07dc605c4",
"assets/assets/images/ic_share_wechat_circle.png": "dbf16636d0c9c94189a15c26a59c2144",
"assets/assets/images/ic_tab_menu1.svg": "ce8a721740081f3edc5afdb60de1b689",
"assets/assets/images/ic_download.svg": "415cd96e2e32835b860401acf8e721b2",
"assets/assets/images/ic_fork.svg": "692559346c904b260c1ba5de3a845716",
"assets/assets/images/ic_collect_top.svg": "413ab56d642c9370c0b72102d30c3a9e",
"assets/assets/images/ic_toast_success.svg": "ff77ba4fcb6cff87b61512656ab47d73",
"assets/assets/images/ic_search.svg": "61bfaf573e87a74c35e67601675dbf20",
"assets/assets/images/ic_connect_admin.svg": "d5fc72cb04aabc1ce9d1e902024ad05d",
"assets/assets/images/ic_switch_language.svg": "afcfe39129fcf3d210edb554ff259dc7",
"assets/assets/images/ic_mine_collect.svg": "e6fba8495e509334d128e2cd349dfde6",
"assets/assets/images/ic_circle_checkbox_active.svg": "270110333da8b371fdf84e285b602fcc",
"assets/assets/images/ic_share_wechat.png": "d573ab6edf1282d22fa851f89444c88e",
"assets/assets/images/ic_order_num_logo.svg": "409090045e69e70a68e6822feef42756",
"assets/assets/images/ic_login_checkbox_checked.png": "6290f024f04b39e27555ee836d28891a",
"assets/assets/images/img_book_shadow.png": "c81128a24d0fa37fe945a59aa18d4cab",
"assets/assets/images/ic_news_like_normal.svg": "42628e3426b96e15bb555f3a25e0b650",
"assets/assets/images/ic_share_in.png": "6eeaa4fb04fc457a9930b2a3ebc60805",
"assets/assets/images/ic_warn.svg": "76164f0663658f8fd854722889c62be5",
"assets/assets/json/country_code.json": "710556906da2fa60cfe6fe3479ed59cb",
"assets/assets/json/rate_country.json": "24cd5339a85e0cac5195d2c721904a37",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
