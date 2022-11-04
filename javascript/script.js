jQuery(document).ready(function(){
  $('.navi>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
  });

  setInterval(function(){
    $('.imglist').delay(2000);
    $('.imglist').animate({marginLeft:-800});
    $('.imglist').delay(2000);
    $('.imglist').animate({marginLeft:-1600});
    $('.imglist').delay(2000);
    $('.imglist').animate({marginLeft:0})
    $('.imglist').delay(2000);
  });

  $(".notice li:first").click(function(){
    $('#modal').addClass('active');
  });
  $('.btn').click(function(){
    $('#modal').removeClass('active');
  });

});