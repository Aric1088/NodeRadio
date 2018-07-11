
const
      io = require("socket.io-client"),
      ioClient = io.connect("http://localhost:8000");
      portAudio = require('naudiodon');
      ss = require('socket.io-stream');
var ao = new portAudio.AudioOutput({
  channelCount: 2,
  sampleFormat: portAudio.SampleFormat16Bit,
  sampleRate: 48000,
  deviceId: 7
});

var stream = ss.createStream();
ss(ioClient).on('stream', function(stream){
  stream.pipe(ao);
  ao.start();
})
