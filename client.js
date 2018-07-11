
const
      io = require("socket.io-client"),
      socket = io.connect("http://127.0.0.1:8000");
      portAudio = require('naudiodon');
      ss = require('socket.io-stream');
var ao = new portAudio.AudioOutput({
  channelCount: 2,
  sampleFormat: portAudio.SampleFormat16Bit,
  sampleRate: 48000,
  deviceId: -1
});
ao.on('error', err => console.error)

ss(socket).on('stream', function(stream){
  stream.pipe(ao);
  console.log('receiving stuff')
  ao.start()
})
