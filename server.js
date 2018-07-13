const portAudio = require('naudiodon');
const lame = require('lame');
const express = require('express');
var app = express()
var connectionLog = []
var ai = new portAudio.AudioInput({
  channelCount: 2,
  sampleFormat: portAudio.SampleFormat16Bit,
  sampleRate: 48000,
  deviceId: 1
});
encoder = new lame.Encoder({
  channels: 2,
  bitDepth: 16,
  sampleRate: 48000,
  bitRate: 320,
  outSampleRate: 48000,
  mode: lame.STEREO
})

function initializeStream(input, output) {
  input.on('error', err => console.error);
  input.pipe(output);
  input.start();
}
initializeStream(ai, encoder);
app.get('/analytics', function(req, res) {
  let result = '<table>';
  for (var i = 0; i < connectionLog.length; i++) {
    result += "<tr><td>" + connectionLog[i] + "</td><td>";
  }
  result += '</table>';
  res.send(result)
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static("static"));
app.get('/stream.mp3', function(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  connectionLog.push(ip)
  res.set({
    'Content-Type': 'audio/mpeg',
    'Transfer-Encoding': 'chunked'
  });
  encoder.pipe(res);
});

var server = app.listen(80);
