# This REPO is being deprecated in favor of a new one:
The project is now named Party-ify
[NEW REPO](https://github.com/Aric1088/Party-ify)
# NodeRadio - Live Music Streaming Server 

- Supports Synced Playback Across Multiple Clients*
- Any Internet Enabled Device with a Browser Can Connect and Stream
- Built on Express Framework
- Audio processed with Naudiodon and Lame Encoder

## Synced Playback Currently Supported/Tested on the Following:

- Chrome on Windows, iOS and Android
- Safari on iOS
- (other devices can connect, but there is no guarantee that playback will be synced due to the different nature of different browsers on different OSs)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

The latest version of the Node runtime environment: [Download](https://nodejs.org/en/download/) 


### Installing

A step by step series of examples that tell you how to get a development env running

1. Clone the repository to a folder
2. Execute "npm run start", this will start the electron app
3. In the case that any dependencies are missing, run "npm install"
4. The server will by default host itself on localhost, port 80.
To modify these settings/open the server up to external connections, you must edit the configurations.json file.
On Windows, this will be found in the %appdata% directory.
On Mac and Linux, this will be in your default application data folder.
5. After configuring the correct port, you can change the host address of the stream(var host) by going to the player.js file in the static/ folder.
6. The static folder is what the server will be serving to any clients that connect, so feel free to customize anything you want, including the background images and css styling!
7. In order for the server to stream audio, it requires an input audio source to read from. This could be a microphone device, or a virtual sound driver that captures system audio.
8. For Windows, I recommend Virtual Cable Audio; it works really well and is easy to setup: https://www.vb-audio.com/Cable/
For Mac, soundflower is a good solution: https://rogueamoeba.com/freebies/soundflower/
On Linux, using either ALSA or PulseAudio, you can create a virtual sound sink that can redirect system audio to NodeRadio
9. After setting up your input audio device, you must change the device id attribute in the configurations.json file that contained the port attribute mentioned earlier to match the id of your input sound device.
On Windows, the Virtual Cable Audio device is usually audio device 1.
On Mac and Linux, I recommend starting at 0 and moving up 1 until NodeRadio detects your sound card input.

10. After configuring the ip address, port, and audio device, you're ready to stream!


## Deployment

1. To connect to the server, open any browser and connect to the ip address and port the server binded itself too. (Make sure to be playing audio on your server computer!)
2. Any device connecting to the server that is also in the above supported list - all of their playback should be in sync - a great solution for multi-room audio setups, parties, or when you just simply don't have enough aux cable splitters for all your speakers.
3. If any device desyncs, simply reload the browser page, press play, and the audio should be in sync again!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

