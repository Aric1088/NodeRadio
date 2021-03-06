(function() {
  const Store = require("electron-store");
  const portAudio = require("naudiodon");
  const lame = require("lame");
  const express = require("express");
  const datetime = require("node-datetime");
  const path = require("path");
  var app = express();
  var connectionLog = {};
  const store = new Store();
  device_id = 1;
  if (store.get("device_id") !== undefined) {
    device_id = app.listen(store.get("device_id"));
  } else {
    device_id = 1;
    store.set("device_id", 1);
  }
  //Instantiate a new portaudio device for input audio stream
  var ai = new portAudio.AudioInput({
    channelCount: 2,
    sampleFormat: portAudio.SampleFormat16Bit,
    sampleRate: 48000,
    deviceId: store.get("device_id")
  });
  var encoder = new lame.Encoder({
    channels: 2,
    bitDepth: 16,
    sampleRate: 48000,
    bitRate: 320,
    outSampleRate: 48000,
    mode: lame.STEREO
  });
  //Initialize the stream, given the input and output
  function initializeStream(input, output) {
    input.on("error", err => console.error);
    input.pipe(output);
    input.start();
  }

  initializeStream(ai, encoder);

  //Endpoint for history of connected streaming devices
  app.get("/analytics", function(req, res) {
    let result = "<table>";
    for (const [key, value] of Object.entries(connectionLog)) {
      result +=
        "<tr><td>[" + key + "]</td><td>" + value + " connected.<td></tr>";
    }
    result += "</table>";
    res.send(result);
  });
  //Middleware for cross origin requests
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  //Serve the index.html page as well as player.js
  app.use(express.static(path.join(__dirname, "static")));

  //Stream endpoint
  app.get("/stream", function(req, res) {
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    var dt = datetime.create(Date.now());
    connectionLog[dt.format("m/d/Y H:M:S")] = ip.substring(7);
    res.set({ "Content-Type": "audio/mpeg", "Transfer-Encoding": "chunked" });
    encoder.pipe(res);
  });

  //set port
  var server;
  if (store.get("port") !== undefined) {
    console.log("helo");
    console.log(store.get("port"));
    server = app.listen(store.get("port"));
  } else {
    store.set("port", 80);
    console.log("server has started");
    server = app.listen(80);
  }
  //Exported for easy electron packaging
  module.exports = server;
})();
