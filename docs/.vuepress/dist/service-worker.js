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
    "revision": "5aa254805f31fee57437b94c7fdbf2fd"
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
    "url": "assets/js/0.42da39c0.js",
    "revision": "fd4a2f9389dec8f52776c80554805448"
  },
  {
    "url": "assets/js/1.94a4633f.js",
    "revision": "5d43876545fea25aaf0a95a46d6d2809"
  },
  {
    "url": "assets/js/2.a32ebe60.js",
    "revision": "4d44f6490268a852c5283cc9653a5807"
  },
  {
    "url": "assets/js/3.0990b8f9.js",
    "revision": "cd8faa5fe3c22e6374565a202f479072"
  },
  {
    "url": "assets/js/4.448a7e41.js",
    "revision": "055b8800728c6ebd6d45ef9053adb358"
  },
  {
    "url": "assets/js/app.c85ad52f.js",
    "revision": "466b36f4a569b966d55045fd2d4f20fd"
  },
  {
    "url": "guide/api/index.html",
    "revision": "4fadcb23d9edab57a1d3322545ddb400"
  },
  {
    "url": "guide/example/index.html",
    "revision": "be01f1d5b66bd59acf52df2441f6c09f"
  },
  {
    "url": "guide/index/index.html",
    "revision": "6681d227adaa8a224f64037d5374b705"
  },
  {
    "url": "guide/start/index.html",
    "revision": "a9d5ee0dbf87d64df28b7aaf3689b6ff"
  },
  {
    "url": "index.html",
    "revision": "022a75f384f981451eb8dea05d0b6381"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
