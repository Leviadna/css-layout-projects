$(()=>{
  const hide = $('.btn_password');

  // 눈동자 버튼 클릭 시 on 전환 및 input 속성 password -> text로 변경
  $(hide).click(function(){
    if($(hide).hasClass('on')){
      $(hide).removeClass('on');
      $(hide).prev('.tf_loginbox').prop("type","password");
    }else{
      $(hide).addClass('on');
      $(hide).prev('.tf_loginbox').prop("type","text");
    }
  });
});

