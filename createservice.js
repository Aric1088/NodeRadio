var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'NodeRadio',
  description: 'Node Radio Streaming Server with Synced playback among clients',
  script: 'C:\\Users\\aricz\\OneDrive\\Desktop\\NodeRadio',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
