

$(document).ready( ()=> {
  const headshot = $('.image-headshot');
  const aboutPosition = $('.about-me').offset().top/4;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    headshot.css({ 'top': (aboutPosition - scrollTop)});
    if (scrollTop > aboutPosition) {
      headshot.css({'top': 0})
    }
  });
});
