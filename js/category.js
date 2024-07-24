$(function(){
  let ww = $(window).width();
  let mySwiper = undefined;
  let panelHeight = $('.article-panel').height();

  // 해상도 530 미만에서만 swiper 작동
  function initSwiper(){
    if(ww < 530 && mySwiper == undefined){
      mySwiper = new Swiper(".swiper-container",{
        slidesPerView:'auto',
        slidesOffsetAfter:30,
      });
    }else if(ww >= 530 && mySwiper != undefined){
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }
  initSwiper();

  // 좌측 카테고리 클릭 시 해당하는 카테고리의 서브 메뉴 Top 위치로 이동
  function react(){
    for(let i=0; i<14; i++){
      $('.btn_tablist:nth-of-type('+i+')').on("click",function(){
        $('html, body').animate({
          scrollTop : panelHeight*(i-1)
        }, 300)
      });
    }
  }
  react();

  // 스크롤 위치에 따른 좌측 카테고리 버튼 on class 부여
  $(window).scroll(function(){
    for(let i=0; i<14; i++){
      if($(this).scrollTop() > panelHeight*(i-1) - (panelHeight/3)){
        $('.btn_tablist').removeClass('on');
        $('.btn_tablist:nth-of-type('+i+')').addClass('on');
      }
    }
  });

  // 해상도 변경될 때마다 resize 시키기
  $(window).resize(function(){
    ww = $(window).width();
    initSwiper();
    react();
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

  // .btn_top 버튼 클릭 시 최상단으로 이동
  $('.btn_top').on("click",function(){
    $('html, body').animate({
      scrollTop : 0
    }, 100);
  });
});