/**
*@file init
*/
(function () {
    var colr = $('.col-r');
    colr.append('<iframe src="content/startHere/readme.html"></iframe>');
    var iframe = colr.find('iframe');
    iframe.css({
        width: colr.width() + 'px',
        height: colr.height() + 'px'
    });
    var coll = $('.col-l li');
    coll.each(function (v, i) {
           $(this).on('click', function (e) {
                e.stopPropagation();
                var url = $(this).data('link');
                if (url) {
                    iframe.attr('src', url);
                    location.hash = url.replace('readme.html', '');
                } else {
                    $(this).find('ol').eq(0).toggle();
                }
           });
    });
    $(window).on('resize', function () {
        iframe.css({
            width: colr.width() + 'px',
            height: colr.height() + 'px'
        });
    }); 
} ());
// document ready
$(function (){
    var roothash = location.hash.slice(1);
    if (roothash !== "") $('.col-r iframe').attr('src', roothash + 'readme.html');
});

