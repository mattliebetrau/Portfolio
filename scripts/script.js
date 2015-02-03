$(document).ready(function(){

  $(".hamburger").click(function() {
     $(".first").toggleClass("open");
     $(".second").toggleClass("open");
     $(".third").toggleClass("open");
  });

  	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	$('html, body').stop().animate({
	    'scrollTop': $target.offset().top
	}, 900, 'swing');

});