$(document).ready(function(){
  $('a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    var menuHeight = $('nav').innerHeight();
    console.log(menuHeight);
    var targetOffset = $(id).offset().top;
    console.log(targetOffset);
        
    $('html, body').animate({
      scrollTop: targetOffset - menuHeight
    });
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 30){
      $('.jbtnTopo').fadeIn(500);
    }
    else{
      $('.jbtnTopo').fadeOut(500);
    }
  });
  $('.jbtnTopoSp').click(function(){
    $('html, body').animate(
      {scrollTop: 0}, 800
    );
    return false;
  });
  $('html','body')
  
});
