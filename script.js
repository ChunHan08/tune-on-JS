document.onkeydown = function (e) {
  e = e || window.event
  var key = e.which || e.keyCode
  if (key == 83) {
  console.log('S had been pressed')
  }
}
