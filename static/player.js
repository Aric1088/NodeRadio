var seek;
var isPlaying;
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
function play() {
  if (!isPlaying){
  setTimeout(function() {
    var e = document.getElementById("background");
    e.currentTime = seek
    e.play()
    isPlaying = True
  }, 0)
}else{
  e.pause()
  e.currentTime = 0
}
}
setDevice();
