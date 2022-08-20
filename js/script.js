$(function(){

    /*ふわっと表示 */
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            } else {
                $(this).removeClass("scrollin");
            }
        });
    });

    $(window).scroll(function (){
        $('.fadein1').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            } else {
                $(this).removeClass("scrollin");
            }
        });
    });



  

    /*アコーディオン */
$(function(){
$("#acMenu dt").on("click", function() {
$(this).next().slideToggle();
});
});

/*checkbox */

  /*ハンバーガーメニュー */
  

  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('body').toggleClass('noscroll');
  });
  $('#navi-list a[href]').on('click', function(event) {
    $('.burger-btn').trigger('click');
});
 
});