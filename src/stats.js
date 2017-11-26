module.exports = function initStats () {
  var Stats = require('Stats.js')
  var stats = new Stats()
  stats.setMode(0)
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = '40px'
  stats.domElement.style.top = '40px'
  document.getElementById('Stats-output').appendChild(
    stats.domElement
  )
  return stats
}
