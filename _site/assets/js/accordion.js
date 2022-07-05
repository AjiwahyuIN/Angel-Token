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


  $(document).ready(function(){
    $('.side-menu__list > li > .side-menu__list__panel').hide();
      
    $('.side-menu__list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".side-menu__list__panel").slideUp();
      } else {
        $(".side-menu__list > li.active .side-menu__list__panel").slideUp();
        $(".side-menu__list > li.active").removeClass("active");
        $(this).addClass("active").find(".side-menu__list__panel").slideDown();
      }
      return false;
    });
    
  });