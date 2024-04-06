
fetch("https://yorujava.github.io/portfolio/include/header.html")
.then((response) => response.text())
.then((data) => document.querySelector("#header").innerHTML = data);
fetch("https://yorujava.github.io/portfolio/include/footer.html")
.then((response) => response.text())
.then((data) => document.querySelector("#footer").innerHTML = data);
$(function(){
    var old_Y = 0;
    $(window).on('scroll', function (){
      var new_Y = $(window).scrollTop();
      var d = old_Y - new_Y;
      old_Y = new_Y;
      var y = window.scrollY;
      if ( d > 0 ) {
        /* to Top */
        $('.header').slideDown();
      } else if ( y < 75) {
        /* to Top */
        $('.header').slideDown();
      } else {
        /* to Bottom */
        $('.header').slideUp();
      }
    });
   
  });

  $(window).on('scroll load', function(){        /* ページロード時、またはスクロールされた時*/
  var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
  var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
  $('.fadeIn').each(function(){                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
    var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
    if(scroll +windowHeight/2> cntPos - windowHeight - windowHeight/5*3 ){  /* 要素がある位置までスクロールされていたら */
      $(this).addClass('active');              /* 「active」のクラスを付与 */
    }
  });
});

