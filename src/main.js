function init () {
  console.log('Start 3D');

  var scene = new THREE.Scene()
  var camera = new THREE.PerspectiveCamera(
    45, window.innerWidth / window.innerHeight, 0.1, 1000
  )

  var renderer = new THREE.WebGLRenderer()

  // axes
  renderer.setClearColor(new THREE.Color(0xEEEEEE))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  var axes = new THREE.AxesHelper(20)
  scene.add(axes)

  // plane
  var planeGeometry = new THREE.PlaneGeometry(60, 20)
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xcccccc
  })
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.receiveShadow = true
  plane.rotation.x = -0.5 * Math.PI
  plane.position.x = 15
  plane.position.y = 0
  plane.position.z = 0
  scene.add(plane)

  // cube
  var cubeGeometory = new THREE.BoxGeometry(4, 4, 4)
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xffbb00
  })
  var cube = new THREE.Mesh(cubeGeometory, cubeMaterial)
  cube.castShadow = true
  cube.position.x = -4
  cube.position.y = 3
  cube.position.z = 0
  scene.add(cube)

  // sphere
  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x00aaff
  })
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
  sphere.castShadow = true
  sphere.position.x = 20
  sphere.position.y = 4
  sphere.position.z = 2
  scene.add(sphere)

  var spotLight = new THREE.SpotLight(0xffffff)
  spotLight.castShadow = true
  spotLight.position.set(-20, 30, -5)
  scene.add(spotLight)

  camera.position.x = -30
  camera.position.y = 40
  camera.position.z = 50
  camera.lookAt(scene.position)


  document.getElementById("WebGL-output")
    .appendChild(renderer.domElement)

  var initStats = require('./stats.js')
  var stats = initStats()

  function renderScene () {
    stats.update()
    requestAnimationFrame(renderScene)
    renderer.render(scene, camera)
  }

  renderScene()
}


window.onload = init
