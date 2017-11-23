

$(document).ready( ()=> {
  const headshot = $('.image-headshot');
  const welcome = $('.header-box');
  const aboutPosition = $('.about-me').offset().top/4;

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();

    headshot.css({ 'top': (aboutPosition - scrollTop)});

    if (scrollTop > aboutPosition) {
      headshot.css({'top': 0});
    }

    $('.grow').each( function(i){
      $(this).css( {'opacity':'0'} );

      var objectBottom = $(this).offset().top + 10;
      var windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > objectBottom) {
        $(this).animate( { 'opacity':'1'}, 300);
      }
    });


  });
});
