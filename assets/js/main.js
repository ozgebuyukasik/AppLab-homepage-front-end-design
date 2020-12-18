window.onscroll = function(){
    var header = document.getElementById("header");
    var offset = header.offsetTop;
    if(window.pageYOffset > offset){
        header.classList.add("sticky-header");
    }else{
        header.classList.remove("sticky-header");
    }
}
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        autoplay:true,
        prevArrow:$(".slick-prev"),
        nextArrow:$(".slick-next")
    });
});
function openMenu(){
    $("#navbar").toggleClass("active-navbar");
}