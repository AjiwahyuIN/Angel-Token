$(document).ready(function(){
    $('.accordion-list > li > .accordion-list__answer').hide();
      
    $('.accordion-list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".accordion-list__answer").slideUp();
      } else {
        $(".accordion-list > li.active .accordion-list__answer").slideUp();
        $(".accordion-list > li.active").removeClass("active");
        $(this).addClass("active").find(".accordion-list__answer").slideDown();
      }
      return false;
    });
    
  });