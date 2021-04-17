$(document).ready(function(e) {

  // page side-menu
  $('.section-sidemenu h1').click(function() {
    $(this).toggleClass('open');
    if ($(this).hasClass('open') == true)
      $('.section-sidemenu h1 i').attr('class','fa fa-caret-up');
    else
      $('.section-sidemenu h1 i').attr('class','fa fa-caret-down');
  });
  $('.section-sidemenu ul.menu-main li > a').click(function() {
    $(this).toggleClass('open');
  });
  $('.section-sidemenu ul.menu-sub li > a').click(function() {
    if ($(this).hasClass('open') == true)
      $(this).addClass('open');
    else
      $(this).removeClass('open');
  });

  $('#pBan.fotorama').fotorama({
    fit: 'cover',
    ratio: 1920/570,
    width: '100%',
    minwidth: 0,
    maxwidth: '100%',
    minheight: 220,
    maxheight: '100%',
    allowfullscreen: true,
    nav: 'false',
    autoplay: true,
    transition: 'dissolve'
  });

});

