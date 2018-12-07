$(document).ready(function(){    
    $('[href="#tour"], [href="#sheldure"], .main_btn').on('click', function () {
     $('.modal').slideDown(500);
     $('.overlay').fadeToggle(500);
    });
   
    $('.close').on('click', function () {
     $('.modal').slideUp(500);
     $('.overlay').fadeToggle(500);
    });
});
  