$(function(){
  new Swiper('.container-01', {
    slidesPerView:'auto'
  });

  new Swiper('.container-02', {
    slidesPerView:'auto'
  });

  new Swiper('.container-03', {
    slidesPerView:'auto'
  })

  // 좋아요 버튼 클릭 시 하트 on / off 전환
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