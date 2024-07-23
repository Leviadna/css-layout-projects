$(document).ready(function(){
  let mySwiper = new Swiper('.swiper-container', {
    slidesPerView:'auto',
    slidesOffsetAfter:10
  });

  $('.btn_like').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.ico_heart').removeClass('fa-solid fa-heart');
      $('.ico_heart').addClass('fa-regular fa-heart');
    }else{
      $(this).addClass('active');
      $('.active .ico_heart').removeClass('fa-regular fa-heart');
      $('.active .ico_heart').addClass('fa-solid fa-heart');
    }
  });

  $('.tit_page').on("click",function(){
    $('html, body').animate({
      scrollTop : 0
    },100)
  });
});