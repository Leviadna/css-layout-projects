$(function(){
  let mySwiper = new Swiper('.swiper-container', {
    slidesPerView:'auto',
    slidesOffsetAfter:10,
  });
  
  $('.btn_like').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).children('.ico_heart').removeClass('fa-solid fa-heart');
      $(this).children('.ico_heart').addClass('fa-regular fa-heart');
      $(this).children('.ico_heart').css('color','#919191');
    }else{
      $(this).addClass('active');
      $(this).children('.ico_heart').removeClass('fa-regular fa-heart');
      $(this).children('.ico_heart').addClass('fa-solid fa-heart');
      $(this).children('.ico_heart').css('color','#ff9900');
    }
  });

  $('.btn_top').on("click",function(){
    $('html, body').animate({
      scrollTop : 0
    },100)
  });
});