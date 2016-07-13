/**
 * Created by Ivan on 17.10.2015..
 */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.navbar.navbar-default.navbar-fixed-top').addClass("sticky");
        $("#brand").css("color","cadetblue");
        $("#brand").css("font-weight","500");
        $("#brand").css("font-size","1.6em");
        $(".nav.navbar-nav.navbar-right a:hover").css("color","black");
    }
    else{
        $('.navbar.navbar-default.navbar-fixed-top').removeClass("sticky");
    }
});

$("div.box").hover(function () {
    $(this).toggleClass("new");
    $(".project-category").toggleClass("title");
    $(".project-name").toggleClass("title");

});

