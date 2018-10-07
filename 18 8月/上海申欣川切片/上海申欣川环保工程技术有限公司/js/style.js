window.onload=function(){
    $(".hd-menu li").hover(function(){
        $(this).children(".subnav").show();
    },function(){
        $(this).children(".subnav").hide();
    })
    banner("img-list","prev","next","banner")
    function banner(id,prev,next,ban) {
        if(document.getElementById(id)==null) {
            return;
        }else {
            var banimg=document.getElementById(id);
            var banner=document.getElementById(ban);
            var arrli=banimg.getElementsByTagName("li");
            var prev=document.getElementById(prev);
            var next=document.getElementById(next);
            var len=arrli.length;
            var num=0;
            var i=0;
            function move() {
                if(i>=len) {
                    i=0;
                }
                $(arrli).eq(num).hide().css({"opacity":"0.5"});
                $(arrli).eq(i).show().animate({opacity:1},500);
            }
            move();
            var t=setInterval(move,3000);
            prev.onclick=function(){
                i--;
                if(i<0) {
                    i=len-1;
                }
                move();
                num=i;
            }
            next.onclick=function(){
                i++;
                move();
                num=i;
            }
            banner.onmouseenter=function(){
                 clearInterval(t);
            }
            banner.onmouseleave=function(){
                t=setInterval(move,4000)
            }
        }
    }
    zyyw(".ibus-list",".ibus-dot",".ibus-cont .prev1",".ibus-cont .next1",".ibus-conlis",".ibus-imglis",".ibus-con",".ibus-cont")
    function zyyw(tdot,bdot,prev,next,box1,box2,box,big) {
        if($(tdot).length>0){
            var dli=$(tdot).find("li");
            var img=$(box2).find("li");
            var dot2=$(bdot)[0];
            var con=$(box1)[0];
            var conli=con.getElementsByTagName("li");
            var len=conli.length;
            var heig=$(box).height();
            var htm=$(box1).html();
            var j=0;
            for(i=0;i<len;i++){
                dot2.innerHTML+="<li></li>";
            }
            var i=0;
            var dli2=$(bdot).find("li");
            $(box1).append(htm);
            len=conli.length;
            function move() {
                if(j>=len/2) {
                    j=0; 
                }else if(j<0){
                    j=len/2-1;
                }
                if(i>=len) {
                    i=len/2;
                    $(box1).css('top',(-heig*len/2+heig)+'px'); 
                }else if(i<0) {
                    i=len/2-1;
                    $(box1).css('top',(-heig*len/2)+'px');
                }
                dli.eq(j).addClass("cur").siblings().removeClass("cur");
                dli2.eq(j).addClass("act").siblings().removeClass("act");
                img.eq(j).show().stop().animate({"opacity":"1"},500).siblings().hide().stop().animate({"opacity":"0.2"});
                $(con).stop().animate({top:-heig*i},500);
                j++;
                i++;
            }
            move();
            var qiuye = setInterval(move, 3000);
            $(next).click(function(){
                move();
            })
            $(prev).click(function(){
                j-=2;
                i-=2;
                move();
            })
            $(tdot).find("li").hover(function(){
                clearInterval(qiuye);
                i=$(this).index();
                j=$(this).index();
                move();
            })
            $(bdot).find("li").hover(function(){
                clearInterval(qiuye);
                i=$(this).index();
                j=$(this).index();
                move();
            })
            $(tdot).hover(function(){
                clearInterval(qiuye);
            },function(){
                qiuye = setInterval(move, 3000);
            })
            $(big).hover(function(){
                clearInterval(qiuye);
            },function(){
                qiuye = setInterval(move, 3000);
            })
        }
    }
    scroll(".itce-cont",".itce-list",".itce-cont .prev1",".itce-cont .next1","4",".itce-cont");
    scroll(".footer-logo-inn",".footer-lis",".footer-prev",".footer-next","9",".footer-logo-lr");
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
    bann(".icas-img1",".icas-imglis1",".icas-prev1",".icas-next1");
    bann(".icas-img2",".icas-imglis2",".icas-prev2",".icas-next2");
    bann(".icas-img3",".icas-imglis3",".icas-prev3",".icas-next3");
    bann(".icas-img4",".icas-imglis4",".icas-prev4",".icas-next4");
    function bann(box,img,prev,next){
        if($(box).length>0) {
            var slide_time=500;
            var time=3000;
            var htm=$(img).html();
            $(img).append(htm).append(htm);
            var len=$(img).find("li").length;
            var wid=$(img).find("li").outerWidth(true);
            var ulWidth=len*wid;
            $(img).width(ulWidth);
            $(img).css("left",-ulWidth/3);
            var i=len/3;
            function move() {
                if(i>=len-1){
                    i=len/3-1;
                    $(img).css("left",-ulWidth/3+wid*2);
                }else if(i<1) {
                i=len/3;
                    $(img).css("left",-ulWidth/3-wid);
                }
                $(img).stop().animate({left:-wid*i},slide_time);
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
            $(box).hover(function(){
                clearInterval(int);
            },function(){
                int = setInterval(move,time);
            })
        }
    }
    $(".icas-list li").click(function(){
        var index =$(this).index();
        $(".icas-img").eq(index).show().siblings(".icas-img").hide();
        $(this).addClass("act").siblings("li").removeClass("act");
    })
}