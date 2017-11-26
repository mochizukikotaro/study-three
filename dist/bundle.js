var foo = (function () {
'use strict';

var sample = function sample() {
  console.log("My Name is jovi0608.");
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stats_min = createCommonjsModule(function (module, exports) {
  // stats.js - http://github.com/mrdoob/stats.js
  (function (f, e) {
    module.exports = e();
  })(commonjsGlobal, function () {
    var f = function f() {
      function e(a) {
        c.appendChild(a.dom);return a;
      }function u(a) {
        for (var d = 0; d < c.children.length; d++) {
          c.children[d].style.display = d === a ? "block" : "none";
        }l = a;
      }var l = 0,
          c = document.createElement("div");c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click", function (a) {
        a.preventDefault();
        u(++l % c.children.length);
      }, !1);var k = (performance || Date).now(),
          g = k,
          a = 0,
          r = e(new f.Panel("FPS", "#0ff", "#002")),
          h = e(new f.Panel("MS", "#0f0", "#020"));if (self.performance && self.performance.memory) var t = e(new f.Panel("MB", "#f08", "#201"));u(0);return { REVISION: 16, dom: c, addPanel: e, showPanel: u, begin: function begin() {
          k = (performance || Date).now();
        }, end: function end() {
          a++;var c = (performance || Date).now();h.update(c - k, 200);if (c > g + 1E3 && (r.update(1E3 * a / (c - g), 100), g = c, a = 0, t)) {
            var d = performance.memory;t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
          }return c;
        }, update: function update() {
          k = this.end();
        }, domElement: c, setMode: u };
    };f.Panel = function (e, f, l) {
      var c = Infinity,
          k = 0,
          g = Math.round,
          a = g(window.devicePixelRatio || 1),
          r = 80 * a,
          h = 48 * a,
          t = 3 * a,
          v = 2 * a,
          d = 3 * a,
          m = 15 * a,
          n = 74 * a,
          p = 30 * a,
          q = document.createElement("canvas");q.width = r;q.height = h;q.style.cssText = "width:80px;height:48px";var b = q.getContext("2d");b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";b.textBaseline = "top";b.fillStyle = l;b.fillRect(0, 0, r, h);b.fillStyle = f;b.fillText(e, t, v);
      b.fillRect(d, m, n, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d, m, n, p);return { dom: q, update: function update(h, w) {
          c = Math.min(c, h);k = Math.max(k, h);b.fillStyle = l;b.globalAlpha = 1;b.fillRect(0, 0, r, m);b.fillStyle = f;b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);b.fillRect(d + n - a, m, a, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d + n - a, m, a, g((1 - h / w) * p));
        } };
    };return f;
  });
});

var stats_min$2 = createCommonjsModule(function (module, exports) {
  // stats.js - http://github.com/mrdoob/stats.js
  (function (f, e) {
    module.exports = e();
  })(commonjsGlobal, function () {
    var f = function f() {
      function e(a) {
        c.appendChild(a.dom);return a;
      }function u(a) {
        for (var d = 0; d < c.children.length; d++) {
          c.children[d].style.display = d === a ? "block" : "none";
        }l = a;
      }var l = 0,
          c = document.createElement("div");c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click", function (a) {
        a.preventDefault();
        u(++l % c.children.length);
      }, !1);var k = (performance || Date).now(),
          g = k,
          a = 0,
          r = e(new f.Panel("FPS", "#0ff", "#002")),
          h = e(new f.Panel("MS", "#0f0", "#020"));if (self.performance && self.performance.memory) var t = e(new f.Panel("MB", "#f08", "#201"));u(0);return { REVISION: 16, dom: c, addPanel: e, showPanel: u, begin: function begin() {
          k = (performance || Date).now();
        }, end: function end() {
          a++;var c = (performance || Date).now();h.update(c - k, 200);if (c > g + 1E3 && (r.update(1E3 * a / (c - g), 100), g = c, a = 0, t)) {
            var d = performance.memory;t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
          }return c;
        }, update: function update() {
          k = this.end();
        }, domElement: c, setMode: u };
    };f.Panel = function (e, f, l) {
      var c = Infinity,
          k = 0,
          g = Math.round,
          a = g(window.devicePixelRatio || 1),
          r = 80 * a,
          h = 48 * a,
          t = 3 * a,
          v = 2 * a,
          d = 3 * a,
          m = 15 * a,
          n = 74 * a,
          p = 30 * a,
          q = document.createElement("canvas");q.width = r;q.height = h;q.style.cssText = "width:80px;height:48px";var b = q.getContext("2d");b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";b.textBaseline = "top";b.fillStyle = l;b.fillRect(0, 0, r, h);b.fillStyle = f;b.fillText(e, t, v);
      b.fillRect(d, m, n, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d, m, n, p);return { dom: q, update: function update(h, w) {
          c = Math.min(c, h);k = Math.max(k, h);b.fillStyle = l;b.globalAlpha = 1;b.fillRect(0, 0, r, m);b.fillStyle = f;b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);b.fillRect(d + n - a, m, a, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d + n - a, m, a, g((1 - h / w) * p));
        } };
    };return f;
  });
});

console.log(33);

sample();

var s = new stats_min();
console.log(s);

// --------------------------------------------


function init() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  var renderer = new THREE.WebGLRenderer();

  // axes
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  var axes = new THREE.AxesHelper(20);
  scene.add(axes);

  // plane
  var planeGeometry = new THREE.PlaneGeometry(60, 20);
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xcccccc
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  scene.add(plane);

  // cube
  var cubeGeometory = new THREE.BoxGeometry(4, 4, 4);
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff00bb
  });
  var cube = new THREE.Mesh(cubeGeometory, cubeMaterial);
  cube.castShadow = true;
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;
  scene.add(cube);

  // sphere
  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x00aaff
  });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = true;
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  scene.add(sphere);

  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.castShadow = true;
  spotLight.position.set(-20, 30, -5);
  scene.add(spotLight);

  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 50;
  camera.lookAt(scene.position);

  function renderScene() {
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
  }

  document.getElementById("WebGL-output").appendChild(renderer.domElement);
  renderScene();

  var stats = initStats();
}

function initStats() {
  var Stats$$1 = stats_min$2;
  console.log(333);
  console.log(Stats$$1);
  var stats = new Stats$$1();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.getElementById('Stats-output').appendChild(stats.domElement);
  return stats;
}

window.onload = init;

var input = {};

return input;

}());
