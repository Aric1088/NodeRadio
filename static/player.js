var seek;var isPlaying=!1;function setDevice(){-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))?alert("Opera"):-1!=navigator.userAgent.indexOf("Chrome")?seek=1.45:-1!=navigator.userAgent.indexOf("Safari")?seek=0:-1!=navigator.userAgent.indexOf("Firefox")?seek=0:-1<navigator.userAgent.indexOf("Edge")?seek=0:-1!=navigator.userAgent.indexOf("MSIE")||1==!!document.documentMode?alert("IE"):alert("unknown")}
var e=document.getElementById("background");function play(){if(!isPlaying){setTimeout(function(){var e=document.getElementById("background");var p=document.getElementById("player")
p.className="fa fa-pause"
p.style.margin-left="-44px";e.src="http://ariczhuang.ddns.net/stream.mp3"
e.currentTime=seek;e.play()
isPlaying=!0},0)}else{var p=document.getElementById("player")
p.className="fa fa-play fa-2x"
p.style.margin-left="-30px";var e=document.getElementById("background");e.pause()
e.src=''
isPlaying=!1}}
setDevice()
