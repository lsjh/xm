window.onload=function(){
    $(".sidebar li").eq(3).click(function(){ 
        $('body,html').stop().animate({scrollTop:0},500); 
    }) 
    //时间轴
    var j=3;
    var i=0;
    var n=0;
    if($(window).width()<=640){
        j=5;
    }else if($(window).width()>640) {
        j=3;
    }
    var wids=$(".idev-inn").width();
    function moves() {
        if(i>=j){
            i=j-1;
        }else if(i<=0){
            i=0;
        }
        n=i;
        $(".idev-time").stop().animate({left:-wids*i},500);
        i++;
    }
    moves();
    $(".idev-next").click(function(){
        moves();
    })
    $(".idev-prev").click(function(){
        i-=2;
        moves();
    })
    function isMbl(){
        var winWidth="";
        if (window.innerWidth){
            winWidth = window.innerWidth;
        }else if ((document.body) && (document.body.clientWidth)){
            winWidth = document.body.clientWidth;
        }
        if(winWidth>768){
            return false;
        }
        return true;
    }
    $('.menu>li').hover(function(){
		$(this).find('.menul').stop(true, true).slideDown();
	}, function() {
		$(this).find('.menul').stop(true, true).hide();
    });
    $(".hd-btn").click(function(event){
        $(".header .hd-lc").stop(true,true).slideToggle();
        event.stopPropagation();
    })
    if($(window).width()>1200){
        $(".header .hd-lc").show();
    }else {
        $('.header .hd-lc').hide();
        $(document).click(function(){   $('.header .hd-lc').slideUp();   });
    }
    window.onresize=function(){
        if(isMbl()){
            $(".footer-nbox ul").hide();
        }else{
            $(".footer-nbox ul").show();
        }
        if($(window).width()>1200){
            $(".header .hd-lc").show();
        }else {
            $('.header .hd-lc').hide();
            $(document).click(function(){   $('.header .hd-lc').slideUp();   });
        }
        if($(window).width()<=640){
            j=5;

        }else if($(window).width()>640) {
            if(n==j) {
                n=j-1;
            }
            j=3;
        }
        wids=$(".idev-inn").width();
        $(".idev-time").css({left:-wids*n});
        if($(window).width()>=1200) {
            $(".idev-time").css({"left":"0px"});
            console.log(1)
        }
    }
    $(".footer-nav .footer-tit").on("click",function(){
        if($(window).width()<768) {
            var num = $(this).attr("num");
            var that = $(this);
            $(".footer-nav .footer-tit").attr("num",0);
            if(num=="2"){
                return;
            }
            if(num==0){
                $(".footer-nbox ul").stop(true,true).slideUp();
                that.parent().find("ul").stop(true,true).slideDown();
                that.attr("num",1);
            }else{
                that.parent().find("ul").stop(true,true).slideUp();
                that.attr("num",0);
            }
        }
    })
    function bann(img,dot,prev,next,box){
        if($(img).length>0) {
            var side=500;
            var side2=3000;
            var htm=$(img).html();
            $(img).append(htm);
            var len=$(img+">li").length;
            var wid=$(box).width();
            $(img+">li").width(wid);
            $(img).width(wid*len);
            var i=0;
            window.onresize=function(){
                wid=$(box).width();
                $(img+">li").width(wid);
                $(img).width(wid*len);
            }
            function scrol() {
                if(i>=len){
                    i=len/2;
                    $(img).css({left:-wid*len/2+wid})
                }else if(i<0) {
                    i=len/2-1;
                    $(img).css({left:-wid*len/2});
                }
                $(dot+">li").eq(i<len/2?i:i-len/2).addClass("on").siblings("li").removeClass("on")
                $(img).stop().animate({left:-wid*i},side);
                i++;
            }
            scrol();
            var int=setInterval(scrol,side2);
            $(next).click(function(){
                scrol();
            })
            $(prev).click(function(){
                i-=2;
                scrol();
            })
            $(dot+">li").hover(function(){
                i=$(this).index();
                scrol();
            })
            $(box).hover(function(){
                clearInterval(int);
            },function(){
                int=setInterval(scrol,side2);
            })
        }
    }
    bann(".digi-qhimg",".digi-mim",".digi-prev",".digi-next",".digi-qhzb")
}