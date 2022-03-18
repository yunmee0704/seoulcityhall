$(function(){


  $('.button>div').click(function(e){
    e.preventDefault();
   $(this).addClass('on').siblings().removeClass('on');
    target = $(this).attr('href');
    $(target).addClass('on').siblings().removeClass('on')
    
    
    
  })
//메인슬라이드
  const main = new Swiper(".sc_news .slide_area .main", {
    autoplay: {
     delay:2000,
      disableOnInteraction: false,
    },
   speed:1000,
    loop:'true',
    pagination: {
      el: ".main .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 
//  메인 슬라이드 멈춤/재생버튼

  
  $('.stop').click(function() {
   if($('.sc_news .slide_area .main').hasClass('on')){
     alert('on')
    main.autoplay.stop();
    $('.stop').css({display:"none"})
    $('.stop').css({zIndex:"0"})
    
    $('.play').css({display:"block"})
    $('.play').css({zIndex:"99"})
   
    return false;
   }
   
  });
  $('.play').click(function() {
   
    $('.play').css({display:"none"})
    $('.play').css({zIndex:"0"})
    $('.stop').css({display:"block"})
    $('.stop').css({zIndex:"99"})
    main.autoplay.start();
    return false;
  });








//bottom-menu
  $('.bottom_menu>ul>li>a').click(function(e){
     e.preventDefault();
      target = $(this).attr('href'); 
      $(target).slideToggle();
      
  })
  

 //배너슬라이드
  const banner = new Swiper(".banner", {
    loop:"true",
    autoplay: {
      delay:2000,
       disableOnInteraction: false,
     },
  
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      pagination: {
          el: ".banner_slide .swiper-pagination",
          type: "fraction",
        },
    });
    //banner_slide 멈춤,재생버튼
    $('.banner_slide .swiper-button-stop').click(function() {
      banner.autoplay.stop();
      $('.banner_slide .swiper-button-stop').css({display:"none"})
      $('.banner_slide .swiper-button-stop').css({zIndex:"0"})
      
      $('.banner_slide .swiper-button-play').css({display:"block"})
      $('.banner_slide .swiper-button-play').css({zIndex:"1"})
      return false;
    });
    
    $('.banner_slide .swiper-button-play').click(function() {
      banner.autoplay.start();
      $('.banner_slide .swiper-button-play').css({display:"none"})
      $('.banner_slide .swiper-button-stop').css({display:"block"})
      return false;
    });
   


 
 

});

