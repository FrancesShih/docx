/**
*@file cp files
*/
var exefile = require('child_process').exec;

exefile('sh ' + __dirname + '/updateserver.sh', function (err, stdout, stderr) {
    if (!err) {
        console.log('update server done.');
    } else {
        console.log(err);
    }
});
