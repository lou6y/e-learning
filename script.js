$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});



$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})


document.getElementById("Cancel").addEventListener('click',function(){

      document.getElementById("name").value="";
      document.getElementById("adress").value="";
      document.getElementById("Message").value="";
}

)