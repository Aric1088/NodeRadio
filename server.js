const
    portAudio = require('naudiodon');
    lame = require('lame');
    express = require('express');

var ai = new portAudio.AudioInput({
  channelCount: 2,
  sampleFormat: portAudio.SampleFormat16Bit,
  sampleRate: 48000,
  deviceId: 1
});

var encoder = new lame.Encoder({
  channels: 2,
  bitDepth: 16,
  sampleRate: 48000,

  bitRate: 320,
  outSampleRate: 48000,
  mode: lame.STEREO
})



ai.on('error', err => console.error);
ai.pipe(encoder);
ai.start();

var app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static("static"));
app.get('/stream.mp3', function (req, res) {
  res.set({
    'Content-Type': 'audio/mpeg',
    'Transfer-Encoding': 'chunked'
  });
  encoder.pipe(res);
});

var server = app.listen(80);
