/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8574e7c5d75520b3c81f7d71320c7bdd"
  },
  {
    "url": "assets/css/5.styles.2cd96532.css",
    "revision": "182fa35638cede8a56645d02b688b206"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.896995a0.js",
    "revision": "914e46626eaaa76a59b37d00adca0979"
  },
  {
    "url": "assets/js/1.0c8c4a66.js",
    "revision": "08a6277dab406c6ac0a0d82f3afce92d"
  },
  {
    "url": "assets/js/2.d1779c8c.js",
    "revision": "29bab2feae6958621c5be78896dc596c"
  },
  {
    "url": "assets/js/3.c65949e6.js",
    "revision": "a3338862f5a6f631520d9af3ee1a335e"
  },
  {
    "url": "assets/js/4.448a7e41.js",
    "revision": "055b8800728c6ebd6d45ef9053adb358"
  },
  {
    "url": "assets/js/app.7e5cd6c2.js",
    "revision": "5c871e360c8752580eaf34515f15a205"
  },
  {
    "url": "guide/example/index.html",
    "revision": "b61a363edaee90a03345c9a631c5a625"
  },
  {
    "url": "guide/index.html",
    "revision": "368f27d2792b2f636f2a23ba92111f41"
  },
  {
    "url": "guide/index/index.html",
    "revision": "4e7fd15991b5395ecbbdfef0e092a369"
  },
  {
    "url": "guide/start/index.html",
    "revision": "41784214c07beb89438bc49b71b9a9af"
  },
  {
    "url": "index.html",
    "revision": "8406700b890c474a2820e7edf422a1ea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
