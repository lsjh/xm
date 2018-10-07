var swiper1 = new Swiper('#banner', {
    loop : true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    spaceBetween: 0,
    pagination: {
      el: '#dot',
      clickable: true,
    },
});
var swiper2 = new Swiper('.link-box', {
    loop : true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.link-next',
      prevEl: '.link-prev',
    },
});
var swiper3 = new Swiper('.izyy-box', {
    loop : true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.izyy-next',
      prevEl: '.izyy-prev',
    },
});
var swiper4 = new Swiper('.itec-box', {
    loop : true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.itec-next',
      prevEl: '.itec-prev',
    },
});

function bann(box,img,prev,next){
    if($(box).length>0) {
        var slide_time=500;
        var time=3000;
        var htm=$(img).html();
        var wids=$(box).width();
        $(img).append(htm).append(htm);
        var len=$(img).find("li").length;
        $(img).find("li").width(wids);
        var wid=$(img).find("li").outerWidth(true);
        var hei=$(img).find("li").eq(1).height();
        $(img).height(hei);
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
bann(".icoo-qh1",".icoo-list1",".icoo-prev1",".icoo-next1");
bann(".icoo-qh2",".icoo-list2",".icoo-prev2",".icoo-next2");
bann(".icoo-qh3",".icoo-list3",".icoo-prev3",".icoo-next3");
bann(".icoo-qh4",".icoo-list4",".icoo-prev4",".icoo-next4");
$(".icoo-tab li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    var index=$(this).index();
    console.log(index)
    $(".icoo-qh").eq(index).addClass("show").siblings(".icoo-qh").removeClass("show");
})
$(".hd-btn").click(function(){
    $(".header .menu").stop().slideToggle();
    $(".search-box").stop().slideUp();
})
$(".hd-sea").click(function(){
    $(".search-box").stop().slideToggle();
    $(".header .menu").stop().slideUp();
})