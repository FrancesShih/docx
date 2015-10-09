/*
*@file genernate widget
*/
var through = require('through2');
var gutil = require('gulp-util');
var fs = require('fs');

// get file
function getfile (file) {
    return fs.existsSync(file);
}  

// read file
function readfile (file) {
    return fs.readFileSync(file);
}

function filestream(filecontent) {
  var stream = through();
  stream.write(filecontent);
  return stream;
}

// 插件级别函数 (处理文件)
function widget() {
   style = '<link type="text/css" rel="stylesheet" href="/css/github-markdown.css"/>';
   style += '<link type="text/css" rel="stylesheet" href="/css/hljs-github.min.css"/>';
   style += '<link type="text/css" rel="stylesheet" href="/css/pilcrow.css"/>';
  // 创建一个让每个文件通过的 stream 通道
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // 返回空文件
      cb(null, file);
    }
    
    file.contents = new Buffer(String(file.contents + style));
  
    // if (file.isBuffer()) {
    //   file.contents = Buffer.concat([prefixText, file.contents]);
    // }
    // if (file.isStream()) {
    //   file.contents = file.contents.pipe(filestream(prefixText));
    // }

    cb(null, file);

  });

};

// 暴露（export）插件主函数
module.exports = widget;
