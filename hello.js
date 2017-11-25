function init() {
  var scene = new THREE.Scene()
  var camera = new THREE.PerspectiveCamera(
    45, window.innerWidth / window.innerHeight, 0.1, 1000
  )

  var renderer = new THREE.WebGLRenderer()

  renderer.setClearColor(new THREE.Color(0xEEEEEE))
  renderer.setSize(window.innerWidth, window.innerHeight)
  var axes = new THREE.AxesHelper(20)
  scene.add(axes)

  var planeGeometry = new THREE.PlaneGeometry(60, 20)
  var planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xcccccc
  })
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)

  plane.rotation.x = -0.5 * Math.PI
  plane.position.x = 15
  plane.position.y = 0
  plane.position.z = 0

  scene.add(plane)

  camera.position.x = -30
  camera.position.y = 40
  camera.position.z = 60
  camera.lookAt(scene.position)
  

  document.getElementById("WebGL-output")
  .appendChild(renderer.domElement)
  renderer.render(scene, camera)
}
window.onload = init
