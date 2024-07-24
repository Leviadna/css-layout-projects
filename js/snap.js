$(function(){
  new Swiper('.container-01', {
    slidesPerView:'auto',
    slidesOffsetAfter:-5
  });

  new Swiper('.container-02', {
    slidesPerView:'auto',
    slidesOffsetAfter:10
  });
  
  // 해상도 580 미만에서만 swiper 작동
  let ww = $(window).width();
  let mySwiper = undefined;
  function initSwiper(){
    if(ww < 580 && mySwiper == undefined){
      mySwiper = new Swiper('.container-03',{
        slidesPerView:'auto',
        slidesOffsetAfter:10,
      });
    }else if(ww >= 580 && mySwiper != undefined){
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }
  initSwiper();

  // 해상도 변경될 때마다 resize 시키기
  $(window).resize(function(){
    ww = $(window).width();
    initSwiper();
  });

  // 과부하 방지로 resize 후 새로고침
  $(window).resize(function(){
    document.location.reload();
  });

  // 새로고침 시간 설정
  let delay = 300;
  let timer = null;
  $(window).on('resize', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
    document.location.reload();
    }, delay);
  });

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