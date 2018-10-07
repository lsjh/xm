$(".tit-list li").hover(function(){
    var index=$(this).index();
    $(this).addClass("on").siblings("li").removeClass("on");
    $(".cont-new ul").eq(index).show().animate({opacity:1}).siblings("ul").hide().css({opacity:0});
})
var oprev=$(".banner-prev"),
    onext=$(".banner-next"),
    olis=$(".banner-list li"),
    obox=$(".banner"),
    len=olis.length,
    i=0,
    m=null;
    function move () {
        if(i>=len) {
            i=0;
        }else if (i<0) {
            i=len-1;
        }
        if(m!=null) {
            olis.eq(m).stop().animate({opacity:0.5},500).hide();
        }
        console.log(m);
        olis.eq(i).show().stop().animate({opacity:1},500);
        m=i;
        i++;
    }
    move();
    var timer=setInterval(move,3000);
    oprev.click(function(){
        i-=2;
        move();
    })
    onext.click(function(){
        move();
    })
    obox.hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(move,3000);
    })