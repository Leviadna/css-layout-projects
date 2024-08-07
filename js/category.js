$(()=>{
  const $link = $('.link_snb');

  new Swiper('.wrap-tab', {
    slidesPerView:'auto',
    spaceBetween:12
  });
  
  $(window).on('scroll', function(){
    var _sct = $(window).scrollTop();

    // 스크롤시 탭메뉴에 해당하는 영역 나오면 링크메뉴 속성 변경
    $link.each(function(){
      var thisHash = $(this.hash);

      if(thisHash.length){
        var thisOffset = thisHash.offset().top - 180;
        if(_sct >= thisOffset - 1){
          $link.attr('aria-selected', 'false');
          $(this).attr('aria-selected', 'true');
        }
      }
    });
  });

  // 플로팅탭 클릭시 이동
  $link.on('click', function(e){
    e.preventDefault();
    $link.attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 180
    }, 0);
  });

  // 검색창 클릭 시 searchModule on, 취소 버튼 클릭 시 searchModule off
  $('.btn_txtbox').click(function(){
    $('.container-doc').css('display','none');
    $('#searchModule').addClass('on');
  });
  $('.search-header .btn_header').click(function(){
    $('#searchModule').removeClass('on');
    $('.container-doc').css('display','block');
  });

  // 클릭 시 최상단으로 이동
  $('.btn_top').on("click",function(){
    $('html, body').animate({
      scrollTop : 0
    },100)
  });

  //검색 모듈 최근 검색 목록 swiper
  new Swiper('.nav-search', {
    slidesPerView:'auto'
  });
});