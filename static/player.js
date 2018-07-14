var seek;
var isPlaying = false;
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

    e.currentTime = seek
    e.play()
    isPlaying = true
  }, 0)
}else{
  e.pause()
  e.src = ''
  isPlaying = false
}
}
setDevice();
