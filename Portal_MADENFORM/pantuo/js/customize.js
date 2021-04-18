$(document).ready(function () {
    // 步驟樣式
    var txt = $('.list-order').text();
    if ( txt.indexOf('A') >= 0 ) {
        $('.section-contents h2 span, .section-contents-one h2 span').addClass('lv1');
    } else if ( txt.indexOf('B') >= 0 ) {
        $('.section-contents h2 span, .section-contents-one h2 span').addClass('lv2');
    } else if ( txt.indexOf('C') >= 0 ) {
        $('.section-contents h2 span, .section-contents-one h2 span').addClass('lv3');
    } else if ( txt.indexOf('D') >= 0 ) {
        $('.section-contents h2 span, .section-contents-one h2 span').addClass('lv4');
    } else if ( txt.indexOf('E') >= 0 ) {
        $('.section-contents h2 span, .section-contents-one h2 span').addClass('lv5');
    }

    // contents 最小高度
    var height = $(Window).height(),
        headerHeight = $('header').outerHeight(),
        bannerHeight = $('#banner').outerHeight(),
        footerHeight = $('footer').outerHeight() + 80; // margin-top
    $('#contents').css('min-height', (height - bannerHeight - footerHeight) );
});
