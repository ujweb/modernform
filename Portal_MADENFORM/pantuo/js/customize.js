$(document).ready(function () {
    var orderIdx = ['A1 ~ A6', 'A7', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'C1', 'C2', 'C3', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'E1', 'E2', 'E3', 'E4'],
        orderIdxLength = orderIdx.length;
    console.log(orderIdxLength);
    // 步驟樣式
    var txt = $('.list-order').text();
    for (var i = 0; i < orderIdxLength; i++) {
        if ( txt.indexOf(orderIdx[i]) >= 0 ) {
            console.log(orderIdx[i]);
            $('.section-contents h2 span, .section-contents-one h2 span').css('width', ((i+1)/orderIdxLength)*100 + '%');
        }
    }
    // contents 最小高度
    var height = $(Window).height(),
        headerHeight = $('header').outerHeight(),
        bannerHeight = $('#banner').outerHeight(),
        footerHeight = $('footer').outerHeight() + 80; // margin-top
    $('#contents').css('min-height', (height - bannerHeight - footerHeight) );
});
