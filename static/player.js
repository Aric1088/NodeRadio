var seek;
var isPlaying = false;
const mobileImage = "http://ariczhuang.ddns.net/mobileImage.jpg";
const desktopImage = "http://ariczhuang.ddns.net/desktopImage.jpg";
console.log('whyst')
if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {

  document.body.style.backgroundImage = "url(" + mobileImage + ")";
} else {

  document.body.style.backgroundImage = "url(" + desktopImage + ")";
}
function setDevice() {
  -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR"))
    ? alert("Opera")
    : -1 != navigator.userAgent.indexOf("Chrome")
      ? seek = 1.45
      : -1 != navigator.userAgent.indexOf("Safari")
        ? seek = 0
        : -1 != navigator.userAgent.indexOf("Firefox")
          ? seek = 0
          : -1 < navigator.userAgent.indexOf("Edge")
            ? seek = 0
            : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode
              ? alert("IE")
              : alert("unknown")
}
var e = document.getElementById("background");
function play() {
  if (!isPlaying){
  setTimeout(function() {
var e = document.getElementById("background");
document.getElementById("player").className = "fa fa-pause"
document.getElementById("player").style.marginLeft = "-12px";
e.src = "http://ariczhuang.ddns.net/stream.mp3"
    e.currentTime = seek;
        e.play()
    isPlaying = true
  }, 0)
}else{
  var p = document.getElementById("player")
  document.getElementById("player").className = "fa fa-play fa-2x"
  document.getElementById("player").style.marginLeft = "0px";
  var e = document.getElementById("background");
  e.pause()
  e.src = ''
  isPlaying = false
}
}
setDevice();
