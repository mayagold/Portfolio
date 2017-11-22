

$(document).ready( ()=> {
  const headshot = $('.image-headshot');
  const welcome = $('.header-box');
  const aboutPosition = $('.about-me').offset().top/4;

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    headshot.css({ 'top': (aboutPosition - scrollTop)});

    if (scrollTop > aboutPosition) {
      headshot.css({'top': 0});
    }



  });
});
