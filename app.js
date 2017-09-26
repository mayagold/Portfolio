console.log("hi");

// jQuery SCROLL

$(window).scroll(function(){
    $("#headshot").css("opacity", 1 - $(window).scrollTop() / 300);
    $("#development").css("opacity", 1 - $(window).scrollTop() / 100);
    $("#design").css("opacity", 1 - $(window).scrollTop() / 100);
    $(".name").css("opacity", 1 - $(window).scrollTop() / 350);
    $('h2').css("opacity", 1 - $(window).scrollTop() / 550);



  });
$( ()=>{



})

//
