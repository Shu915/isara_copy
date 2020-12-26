$(document).ready(function () {
  //flowのspのアコーディオンの開閉
  $('.flow-chart-sp-head').on("click", function () {
    var $body = $(this).next('.flow-chart-sp-body');
    $body.slideToggle();

    var $i = $(this).find('i');
    if ($i.hasClass('fa-angle-down')) {
      $i.removeClass('fa-angle-down');
      $i.addClass('fa-angle-up');
    } else {
      $i.removeClass('fa-angle-up');
      $i.addClass('fa-angle-down');
    }
  });
//removeClassとaddClassを使って書けるし、html()を使って書くこともできる

  //よくある質問コーナーのアコーディオンの開閉
  //$('.question dt').on('click',function(){
    //$body = $(this).next('dd');
    //$body.slideToggle();
    //$arrow = $(this).find('i');

    //if ($arrow.hasClass('fa-angle-down')) {
    //  $arrow.removeClass('fa-angle-down');
    //  $arrow.addClass('fa-angle-up');
    //} else {
      //$arrow.removeClass('fa-angle-up');
     // $arrow.addClass('fa-angle-down');
   // }


 // });

    $('.question dt').on('click',function(){
      $body = $(this).next('dd');
      $i = $(this).find('i');
      if ($body.hasClass('open')) {
        $body.removeClass('open');
        $body.slideUp();
        $i.addClass('fa-angle-down');
        $i.removeClass('fa-angle-up');
      } else {
        $body.addClass('open');
        $body.slideDown();
        $i.addClass('fa-angle-up');
        $i.removeClass('fa-angle-down');
      }
    });

    //ページのスクロール
    //isaraのロゴとタイトル
    $('.header-box').click(function(){
      $('html, body').animate({'scrollTop': 0}, 500);
    });

    //資料請求ボタン3つ
    $('.contact-btn-scroll').on('click', function() {
      var headerHeight = $('header').height();
      var requestDocumentFormHeight = $('#request-document-form').offset().top;

      $('html, body').animate({
        'scrollTop': requestDocumentFormHeight - headerHeight
      }, 500);
      return false;
    });


});