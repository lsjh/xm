var hdLi=$(".menu li");
hdLi.hover(function(){
    $(this).children(".erji").show().animate({opacity:1,top:"34px"})
},function(){
    $(this).children(".erji").hide().animate({opacity:0,top:"42px"})
})


var wid=$(window).width();
var htm=$("#banner-list").html();
$("#banner-list").append(htm);
var len=$("#banner-list li").length;
$("#banner-list").width(wid*len);
$("#banner-list li").width(wid);
for(var i=0;i<len/2;i++) {
    $("#dot").append("<li></li>")
}
var i=0;
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

    function scroll(box,img,prev,next,num,wrap) {
        if($(box).length>0){
            var time=3000;
            var slide_time=500;
            var ulLen=$(img).find("li").length;
            var liWidth=$(img).find("li").outerWidth(true);
            var ulWidth=ulLen*liWidth;
            var htm=$(img).html();
            var boWidth=$(box).width();
            $(img).append(htm);
            ulLen=$(img).find("li").length;
            $(img).width(ulLen*liWidth);
            var i=0;
            function move() {
                if(i>=ulLen-num) {
                    $(img).css({left:-ulWidth+boWidth+liWidth});
                    i=ulLen/2-num;
                }else if(i<0) {
                    i=ulLen/2-1;
                    $(img).css({left:-ulWidth});
                }
                $(img).stop().animate({left:-liWidth*i},slide_time);
                i++;
            }
            move();
            var int = setInterval(move, time);
            $(next).click(function(){
                move();
            })
            $(prev).click(function(){
                i-=2;
                move();
            })
            $(wrap).hover(function(){
                clearInterval(int);
            },function(){
                int = setInterval(move,time);
            })
        }
    }
    scroll(".ipro-tu",".ipro-img",".ipro-prev",".ipro-next","3",".ipro-cont");

    var len2=$(".iabo-tu li").length;
    var j=0;
    var m=null;
    function qh(){
        if(j>=len2) {
            j=0;
        }else if(j<0) {
            j=len2-1;
        }
        if(m!=null) {
            $(".iabo-tu li").eq(m).stop().animate({"opacity":"0.5"},500).hide();
             console.log(m);
        }
        $(".iabo-tu li").eq(j).show().stop().animate({"opacity":1},500);
        m=j;
        j++;  
    }
    qh();
    var int2=setInterval(qh,3000);
    $(".iabo-prev").click(function(){
        qh();
    })
    $(".iabo-next").click(function(){
        i-=2;
        qh();
    })
    $(".iabo-cont").hover(function(){
        clearInterval(int2);
    },function(){
        int2=setInterval(qh,3000);
    })