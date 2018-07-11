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

  bitRate: 128,
  outSampleRate: 22050,
  mode: lame.STEREO
})



ai.on('error', err => console.error);
ai.pipe(encoder);
ai.start();

var app = express()

app.get('/stream.mp3', function (req, res) {
  res.set({
    'Content-Type': 'audio/mpeg3',
    'Transfer-Encoding': 'chunked'
  });
  encoder.pipe(res);
});

var server = app.listen(8000);
