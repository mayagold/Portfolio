console.log("hi");

// jQuery Scroll Function

$(window).scroll(function(){
    $("#headshot").css("opacity", 1 - $(window).scrollTop() / 300);
    $(".name").css("opacity", 1 - $(window).scrollTop() / 350);
    $('h2').css("opacity", 1 - $(window).scrollTop() / 500);



  });
//
