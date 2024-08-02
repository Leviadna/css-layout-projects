$(()=>{
  const $like = $('.link_tab');
  const $category = $('.link_category');
  const $filter = $('.btn_filter');

  $like.on('click', function(e){
    e.preventDefault();
    $like.attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
  });

  $category.on('click', function(e){
    e.preventDefault();
    $category.attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
  });

  $filter.on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else{
      $(this).addClass('active');
    }
  });

  new Swiper('.swiper-container', {
    slidesPerView:'auto'
  });

  // 클릭 시 최상단으로 이동
  $('.btn_top').on("click",function(){
    $('html, body').animate({
      scrollTop : 0
    },100)
  });
});