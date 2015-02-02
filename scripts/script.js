$(document).ready(function(){

  $(".hamburger").click(function() {
     $(".first").toggleClass("open");
     $(".second").toggleClass("open");
     $(".third").toggleClass("open");
  });

});