$(()=>{
  const $topNav = $('.link_top');

  $topNav.on('click', function(e){
    e.preventDefault();
    $topNav.attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
  });

  new Swiper('.nav-top', {
    slidesPerView:'auto'
  });

  new Swiper('.swiper-container', {
    slidesPerView:'1',
    loop:true,
    pagination:{
      el:'.box_paging',
      type:'fraction'
    },
    autoplay:{
      delay:3500,
    },
    direction:'horizontal'
  });

  const tabFirst = new Swiper('.wrap_tabmenu:first-of-type', {
    slidesPerView:'auto'
  });

  const tabLast = new Swiper('.wrap_tabmenu:last-of-type', {
    slidesPerView:'auto'
  });

  tabFirst.controller.control = tabLast;
  tabLast.controller.control = tabFirst;

  new Swiper('.content_section', {
    slidesPerView:'auto'
  });

  new Swiper('.banner_section', {
    slidesPerView:'1',
    loop:true,
    pagination:{
      el:'.swiper-pagination',
      type:'progressbar'
    },
    autoplay:{
      delay:3500,
    },
    direction:'horizontal'
  })

  // 좋아요 버튼 클릭 시 하트 on / off 전환
  $('.btn_like').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).children('.ico_heart').removeClass('fa-solid fa-heart');
      $(this).children('.ico_heart').addClass('fa-regular fa-heart');
      $(this).children('.ico_heart').css('color','#000');
    }else{
      $(this).addClass('active');
      $(this).children('.ico_heart').removeClass('fa-regular fa-heart');
      $(this).children('.ico_heart').addClass('fa-solid fa-heart');
      $(this).children('.ico_heart').css('color','#f00010');
    }
  });

  $('#countdown').countdown('2024/08/15', function(event) {
    $(this).html(event.strftime('%I : %M : %S'));
  });

  $('.btn_foot').click(function(){
    if($(this).next().hasClass('on')){
      $(this).next().removeClass('on');
    }else{
      $('.btn_foot').next().removeClass('on');
      $(this).next().addClass('on');
    }
  });

  // 클릭 시 최상단으로 이동
  $('.btn_top').on("click",function(){
    $('html, body').animate({
      scrollTop : 0
    },100)
  }); 
});