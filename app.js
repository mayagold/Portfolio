console.log("hi");

// jQuery NavBar Function

$(document).ready( ()=> {
  const headshot = $('.image-headshot');
  const aboutPosition = $('.about-me').offset().top/4;

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    headshot.css({ 'top': (aboutPosition - scrollTop)});
    // headshot.css( {'opacity': 0 + scrollTop/40})

    if (scrollTop > aboutPosition) {
      headshot.css({'top': 0})
    }
  });

})



    // $(".call").css("opacity", 0 + $(window).scrollTop() / 450);
    // $(".name").css("opacity", 1 - $(window).scrollTop() / 450);
    // $('.description').css("opacity", 1 - $(window).scrollTop() / 500);
    // $('.projects').css("opacity", 0+ $(window).scrollTop() / 800);
    // $('.waterfall-img').css("opacity", .9 - $(window).scrollTop() / 1200);
    // $('#wolf').css("opacity", .9 - $(window).scrollTop() / 1200);
    // $('.photo-credit').css("opacity", 0 + $(window).scrollTop() / 1000);




$( ()=>{


  var slideshow = function() {
  	var paused = false
      $("#slideshow > div:gt(0)").hide()
  	$('.arrowR').click(function() {
  		paused = true;
  		$('#slideshow > div:first')
  		.fadeOut(1000)
  		.next()
  		.fadeIn(1000)
  		.end()
  		.appendTo('#slideshow');
  	});

  	$('.arrowL').click(function() {
  		paused = true;
  		$('#slideshow > div:last')
  		.fadeIn(1000)
  		.prependTo('#slideshow')
  		.next()
  		.fadeOut(1000)
  		.end();
  	});



  	setInterval(function() {
  		if (paused === false) {
  			$('#slideshow > div:first')
  			.fadeOut(1000)
  			.next()
  			.fadeIn(1000)
  			.end()
  			.appendTo('#slideshow');
  		};
  	},  5000);


  };

  $(document).ready(slideshow);

})
