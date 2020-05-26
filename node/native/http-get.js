const http = require('http');

let get = function (host, port, path) {
    return new Promise(function (resolve, reject) {
        let start = new Date().getTime();
        let req = http.get({
            hostname: host,
            port: port,
            path: path
        }, (res) => {
            // console.log(res.statusCode);
            res.on('data', function (content) {
                let result = JSON.parse(content.toString());
                // console.log(result.success);
                resolve({ data: result, time: new Date().getTime() - start });
            });
        });

        req.on('error', function () {
            reject();
        })

        req.end();
    })
}

let test = async function (host, port, path) {
    let count = 0;
    console.time('time cost');
    for (let i = 0; i < 100; i++) {
        let result = await get(host, port, path);
        if(result.data.success){
            count++;
        }
        // console.log(result);
    }
    console.timeEnd('time cost');
    return count;
}

let test2 = async function () {
    let result = await test('172.16.7.23', 3700, '/configuration/rooms/state');
    console.log(`successful times: ${result}`);
};

(async () => {
    test2();
})();

// (async function(){
//     await get('172.16.7.23', 3700, '/configuration/rooms/state');
// })();