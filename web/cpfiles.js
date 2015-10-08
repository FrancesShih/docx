/**
*@file cp files
*/
var exefile = require('child_process').exec;

exefile('sh ' + __dirname + '/cp.sh', function (err, stdout, stderr) {
    if (!err) {
        console.log('cp frame files done');
    } else {
        console.log(err);
    }
});
