$(()=>{
  const $topNav=$('.link_top');

  $topNav.on('click', function(e){
    e.preventDefault();
    $topNav.attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
  });

  new Swiper('.swiper-container', {
    slidesPerView:'1'
  });

  // 클릭 시 최상단으로 이동
  $('.btn_top').on("click",function(){
    $('html, body').animate({
      scrollTop : 0
    },100)
  });
});