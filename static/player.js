var seek;
var host = "ariczhuang.ddns.net:80";
var isPlaying = !1;
//Detect proper device to account for stream latency
function setDevice() {
  -1 !=
  (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR"))
    ? alert("Opera")
    : -1 != navigator.userAgent.indexOf("Chrome")
    ? (seek = 1.45)
    : -1 != navigator.userAgent.indexOf("Safari")
    ? (seek = 0)
    : -1 != navigator.userAgent.indexOf("Firefox")
    ? (seek = 0)
    : -1 < navigator.userAgent.indexOf("Edge")
    ? (seek = 0)
    : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode
    ? alert("IE")
    : alert("unknown");
}
navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
  ? (document.body.style.backgroundImage = "url(mobileImage.jpg)")
  : (document.body.style.backgroundImage = "url(desktopImage.jpg)");
var e = document.getElementById("background");

//Play, pause functionality
function play() {
  if (isPlaying) {
    document.getElementById("player");
    (document.getElementById("player").className = "fa fa-play fa-2x"),
      (document.getElementById("player").style.marginLeft = "0px");
    var e = document.getElementById("background");
    e.pause(), (e.src = ""), (isPlaying = !1);
  } else
    setTimeout(function() {
      var e = document.getElementById("background");
      (document.getElementById("player").className = "fa fa-pause"),
        (document.getElementById("player").style.marginLeft = "-12px"),
        (e.src = "http://" + host + "/stream"),
        (e.currentTime = seek),
        e.play(),
        (isPlaying = !0);
    }, 0);
}
setDevice();
