$(document).ready(function(){
 
     $(window).scroll(function(){
     if ($(this).scrollTop() > 100) {
     $('#logolittle').fadeIn();
     } else {
     $('#logolittle').fadeOut();
     }
     });
     $(window).scroll(function(){
     if ($(this).scrollTop() > 100) {
     $('#logo').fadeOut();
     } else {
     $('#logo').fadeIn();
     }
     });
 
     $('#logolittle').click(function(){
     $("html, body").animate({ scrollTop: 0 }, 300);
     return false;
     }); 
     });