
fetch("include/header.html")
.then((response) => response.text())
.then((data) => document.querySelector("#header").innerHTML = data);
fetch("include/footer.html")
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
      } else if ( y < 100) {
        /* to Top */
        $('.header').slideDown();
      } else {
        /* to Bottom */
        $('.header').slideUp();
      }
    });
   
  });