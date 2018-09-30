var os = require('os');
var fs=require('fs')

// var IPv4,hostName;
// hostName=os.hostname();
// var wlan=os.networkInterfaces()
// for(var i=0;i<wlan.WLAN.length;i++){
//     if(wlan.WLAN[i].family=='IPv4'){
//         IPv4=wlan.WLAN[i].address;
//     }
// }
// console.log('----------local IP: '+IPv4);
// console.log('----------local host: '+hostName);

fs.readFile('./ip.json',function (err, data) {
    if(err){
        console.log(err)
    }
    var config=JSON.parse(data)

    console.log(config.ip)
})
