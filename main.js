
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



document.addEventListener('DOMContentLoaded',()=>{
  if(window.sessionStorage.getItem(['dspID'])==null){
  const guestId='ゲスト';
  const guestPass='1234';
  window.sessionStorage.setItem([guestId],[guestPass]);
  window.sessionStorage.setItem(['dspID'],[guestId]);
  console.log("testですよ");
}}, {
  'once': true // 1度だけのイベントリスナーにするオプション
});
$(window).on('load', function(){
  const dspId=document.getElementById('login-dsp2');
  const idName=document.getElementById('idName');
  const span=document.createElement('span');
  const span2=document.createElement('span');
  var getID='ID：'+window.sessionStorage.getItem(['dspID'])+' さん';
  span.textContent=getID;
  span2.textContent=getID;
  dspId.appendChild(span);
  if(idName!=null){
  idName.appendChild(span2);
  }
})
//スクロール領域を取得
const area = document.getElementById("area");

//スクロールを禁止する関数
function ban() {
  location.href='#hamburgerMenu'
  area.style.overflowY= "hidden";
}


//禁止を解除する関数
function lift() {
  area.style.overflowY = "auto";
  history.back();
}