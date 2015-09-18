/**
*@file 生成右侧导航栏 & 链接 & 放到index.html里面＝。＝
*/
var fs = require('fs');
var navJSON = fs.readFileSync('docs/nav.json', 'utf8');
navJSON = JSON.parse(navJSON);
var navhtml = '<ol>';
var count = 0;

function getleaf (leaf, last) {
    if (last) {
        var html = '<li data-link="' + leaf.id + '/readme.html">' + leaf.text + '</li>';
        for (var i = 0; i < count; i++) {
            html += '</ol></li>';
        }
        return html;
    }
    return '<li data-link="' + leaf.id + '/readme.html">' + leaf.text + '</li>';
}

function gettree (tree) {
    return '<li>' + tree.text + '<ol>'; 
}

function ergodic (obj, _i, top, max) {
    if (obj.children) {
        var hasChild = obj.children.length;
    }
    if ( hasChild >= 1 ) {
        navhtml += gettree (obj);
        count = count + 1;
        obj.children.forEach(function (v, i) {
             ergodic(v, i, false, obj.children.length);
        });
    } else {
        if ( ( _i === max - 1 || max === 0 ) && top === false) {
            last = true;
        } else {
            last = false;
        }
        navhtml += getleaf(obj, last);
        if (last) count = 0;
    }
}

navJSON.forEach(function (v, i) {
    ergodic(v, i, true, navJSON.length);
});
navhtml += '</ol>';

var homepage =  fs.readFileSync('frame/index.html', 'utf8');
homepage = homepage.replace(/(<!--\w+-->)(.*)(<!--\/\w+-->)/gi, function($0, $1, $2, $3){
    return $1 + navhtml + $3;
});
fs.writeFileSync('frame/index.html', homepage, 'utf8');

module.export = navhtml;

