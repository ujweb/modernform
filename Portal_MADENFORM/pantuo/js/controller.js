$(function() {
    // 手機選單-
    var RWD = navigator.userAgent,
        winWidth = $(window).width(),
        anoWidth = 0,
        nowstatus = 0,// 0 = mobile / 1 = desktop
        nowIndex,
        body = $("html, body"); 
    var $mask = $('<div class="mask"></div>').hide();
    $('#page').after($mask);

    if (RWD.match(/iPhone|iPad|iPod|Android|BlackBerry/i)) {
        $('#nav-toggle').on('touchstart', MENU);
        $('.mask').on('touchstart', MENU);
    } else {
        $('#nav-toggle').on('click', MENU);
        $('.mask').on('click', MENU);
    }

    BGIMG();



    $(window).resize(function() {
        $mask.hide();
        $('#nav-toggle').removeClass('show');
        $('#page').removeClass('show');
        $('html,body').removeClass('show');
        $('#nav').removeClass('show');
        $('.submenu > ul').removeAttr('style');
        $('.submenu').removeClass('open');
        delay(function() {
            BGIMG();
        }, 300);
    })

    var delay = (function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    function MENU() {
        $mask.fadeToggle(300);
        $('#page').toggleClass('show');
        $('html,body').toggleClass('show');
        $('#nav-toggle').toggleClass('show');
        $('#nav').toggleClass('show');
        return false;
    }

    $('.submenu').on('click', SUBMENU);
    function SUBMENU() {
        if (nowstatus === 0) {
            $(this).toggleClass('open').find('ul').slideToggle();
            $(this).siblings('.submenu').removeClass('open').find('ul').slideUp();
        }
    }

    function MENUMODE(e) {
        if (e < 1264) {
            nowstatus = 0;
            console.log('mobile menu');
        } else {
            nowstatus = 1;
            console.log('desktop menu');
        }

    }

    function BGIMG() {
        winWidth = $(window).width();
        MENUMODE(winWidth);
        if ($('.bg').length !== 0 && winWidth > 842) {
            console.log('winWidth = ' + winWidth + 'screen width:' + anoWidth);
            $('.bg').each(function(index, el) {
                var bgpic = 'url("' + $(this).find('img').attr('data-src') + '")';
                $(this).css({
                    'background-image': bgpic
                });
                console.log(index + '/' + bgpic);
            });
        } else {
            $('.bg').removeAttr('style');
            console.log('winWidth = ' + winWidth + 'screen width:' + anoWidth);
        }

    }

    // editor 移除圖片尺寸
    if ($('.edit').length !== 0) {
        $('.edit img').removeAttr('style');
        $('img.big').unwrap('p');
    }
});

$(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset() ? $target.offset().top : 0
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
       
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
       
});