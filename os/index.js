const os = require("os");

//arch
console.log(os.arch());

//cpus desc
console.log(os.cpus());

//free mem in bytes /1024/1024/1024 in GB
console.log(os.freemem());

//return home dir path
console.log(os.homedir());

//return host name
console.log(os.hostname());

//returns load average. Only meaningful value in linux an mac
console.log(os.loadavg());

//return network interface avaiblae in system
console.log(os.networkInterfaces());

//return platform type
console.log(os.platform());

// Returns the number of seconds the computer has been running since it was last rebooted.
console.log(os.uptime());

//user info
console.log(os.userInfo());
