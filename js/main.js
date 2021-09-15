var winHeigt = $(window).innerHeight();
$(document).ready(function(){
    $(".panel").height(winHeigt);
    $("body").height(winHeight*$(".panel").length);
});

window.addEventListener('resize', function (event) {
    $(".panel").height($(Window).innerHeight());
});
$(window).on('scroll', function(){
    $(".panelCon").css('bottom', $(window).scrollTop()*-1);
});