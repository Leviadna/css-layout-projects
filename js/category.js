$(document).ready(function(){
  let ww = $(window).width();
  let mySwiper = undefined;

  // 해상도 530 미만에서만 swiper 작동
  function initSwiper(){
    if(ww < 530 && mySwiper == undefined){
      mySwiper = new Swiper(".swiper-container",{
        slidesPerView:'auto',
        slidesOffsetAfter:30
      });
    }else if(ww >= 530 && mySwiper != undefined){
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }
  initSwiper();

  // 좌측 카테고리 클릭 시 다른 선택되어 있던 버튼 on 해제
  $('.btn_tablist').on("click", function(){
    if($(this).hasClass('on')){
      $('.btn_tablist').removeClass('on');
    }else{
      $('.btn_tablist').removeClass('on');
      $(this).addClass('on');
    }
  });

  // 좌측 카테고리 클릭 시 해당하는 카테고리의 서브 메뉴 Top 위치로 이동
  function react(){
    for(let i=0; i<14; i++){
      let panelHeight = $('.article-panel').height();
      $('.btn_tablist:nth-of-type('+i+')').on("click",function(){
        $('html, body').animate({
          scrollTop : panelHeight*(i-1)
        }, 300)
      });
    }
  }
  react();

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
    }, 100)
  });
});