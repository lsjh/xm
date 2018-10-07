// 轮播

var wid=$(window).width();
if($(window).width()<=1260) {
    wid=1260;
}
var htm=$("#banner-list").html();
$("#banner-list").append(htm);
var len=$("#banner-list li").length;
$("#banner-list").width(wid*len);
$("#banner-list li").width(wid);
for(var i=0;i<len/2;i++) {
    $("#dot").append("<li></li>")
}
var i=0;
var m=0;
function move(){
    if(i>=len) {
        i=len/2;
        $("#banner-list").css({left:-wid*len/2+wid});
    }else if(i<0) {
        i=len/2;
        $("#banner-list").css({left:-wid*len/2});
    }
    $("#dot li").eq(i<len/2?i:i-len/2).addClass("on").siblings("li").removeClass("on");
    $("#banner-list").stop().animate({"left":-wid*i},500);
    m=i;
    i++;
}
move();
var int=setInterval(move,3000);
$("#dot li").click(function(){
    i=$(this).index();
    move();
})
$(".banner").hover(function(){
    clearInterval(int);
},function(){
    int=setInterval(move,3000);
})
$(window).resize(function(){
    wid=$(window).width();
    if($(window).width()<=1260) {
        wid=1260;
    }
    $("#banner-list").width(wid*len);
    $("#banner-list li").width(wid);
    $("#banner-list").stop().css({"left":-wid*m});
})


var liw=$(".caxq-min li").outerWidth(true);
var lens=$(".caxq-min li").length;
$(".caxq-min").width(liw*lens);
var j=0;
var prev=$(".caxq-xt .prev");
var next=$(".caxq-xt .next");
var imgs=$(".caxq-min");
var f=0;
next.click(function(){
    j++;
    f++;
    if(j>=lens-3) {
        j=lens-4;
    }
    if(f>=lens){
        f=lens-1;
    }
    imgs.stop().animate({left:-liw*j},500);
    $(".caxq-min li").eq(f).addClass("on").siblings("li").removeClass("on");
    $(".caxq-big li").stop().animate({opacity:0.5},500).hide();
    $(".caxq-big li").eq(f).show().stop().animate({opacity:1},500);
})
prev.click(function(){
    j--;
    f--;
    if(j<=0){
        j=0;
    }
    if(f<=0) {
        f=0;
    }
    imgs.stop().animate({left:-liw*j},500);
    $(".caxq-min li").eq(f).addClass("on").siblings("li").removeClass("on");
    $(".caxq-big li").stop().animate({opacity:0.5},500).hide();
    $(".caxq-big li").eq(f).show().stop().animate({opacity:1},500);
})
$(".caxq-min li").click(function(){
    var index=$(this).index();
    j=index;
    f=index;
    if(j>=lens-3) {
        j=lens-4;
    }
    if(f>=lens){
        f=lens-1;
    }
    imgs.stop().animate({left:-liw*j},500);
    $(".caxq-min li").eq(f).addClass("on").siblings("li").removeClass("on");
    $(".caxq-big li").stop().animate({opacity:0.5},500).hide();
    $(".caxq-big li").eq(f).show().stop().animate({opacity:1},500);
})



$(".foo-ljbt").click(function(){
    $(this).siblings(".foo-ljlis").slideToggle();
})
