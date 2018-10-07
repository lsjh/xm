$(function(){
    $(".nside-choo .cho").click(function(){
        $(this).addClass("act").siblings(".cho").removeClass("act");
    })
    var wid=$(".nhuo-big").width();
    var len=$(".nhuo-big li").length;
    var i=0;
   $('.nhuo-big li').eq(0).clone().appendTo($(".nhuo-big ul"));
   $(".nhuo-big ul").width(wid*$(".nhuo-big li").length);
    $(".nhuo-zs").html(len);
    $(".nhuo-num").html(i+1);
    var index=0;
    var len2=$(".nhuo-all .all-tu li").length;
    $(".nhuo-all .all-tp span").html(len2);
    $(".nhuo-all .all-tu li").click(function(){
        index=$(this).index();
        $(".nhuo-all").hide();
        i=index;
        $('.nhuo-big ul').css('left',-wid*i);
        $(".nhuo-num").html(i+1);
    })
    $(".nhuo-btn .next").click(function(){
        i++;
        if(i>len) {
            i=1;
            $('.nhuo-big ul').css('left',"0");
        }
        console.log(i)
        $(".nhuo-big ul").stop().animate({"left":-wid*i},300);
        if(i<len) {
            $(".nhuo-num").html(i+1);
        }else {
            if(i=len) {
                $(".nhuo-num").html(1);
            }else {
                $(".nhuo-num").html(i)
            }
        }
    })
    $(".nhuo-btn .page").click(function(){
        i--;
        if(i<0) {
            i=len-1;
            $('.nhuo-big ul').css('left',-wid*len);
        }
        $(".nhuo-big ul").stop().animate({"left":-wid*i},300);
        $(".nhuo-num").html(i+1);
    })
    $(".nhuo-btn .mulu").click(function(){
        $(".nhuo-all").fadeIn();
    })
    $(".nhuo-all .colse").click(function() {
        $(".nhuo-all").hide();
    })




    var arr=["第一张图片","第二张图片","第三张图","第四张图"];
    var wid=$(".nxin-ibox").width();
    var htm=$(".nxin-img").html();
    $(".nxin-img").append(htm);
    var len=$(".nxin-img li").length;
    $(".nxin-img li").width(wid);
    $(".nxin-img").width(len*wid);
    var i=0;
    function move() {
        if(i>=len) {
            i=len/2;
            $(".nxin-img").css({left:-wid*len/2+wid});
        }else if(i<0) {
            i=len/2-1;
            $(".nxin-img").css({left:-wid*len/2});
        }
        $(".nxin-img").stop().animate({left:-wid*i},500);
        $(".nxin-gs").html((i>=len/2?i-len/2+1:i+1)+"/"+(len/2));
        $(".nxin-time").html(arr[i>=len/2?i-len/2:i]);
        i++;
    }
    move();
    $(".nxin-next").click(function(){
        move();
    })
    $(".nxin-prev").click(function(){
        i-=2;
        move();
    })



    $(".nxin-col").click(function(){
        $(".nxin-tp").slideUp();
    })
})