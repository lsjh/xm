

//设备贸易详情
var wid=null;
var index=null;
var len=null;
var htm=null;
var img=null;
var prev=null;
var next=null;
var lens=$(".sbmy-list li").length;

//点击设备贸易弹出详情
$(".sbmy-list li").click(function() {
    index=$(this).index();
    console.log(index)
    $(".tanc").eq(index).show().css({"top":"0"});
})
for( var j=0;j<lens;j++){
    htm=$(".tanc").eq(j).find(".tanc-imlis").html();
    $(".tanc").eq(j).data("len",$(".tanc").eq(j).find(".tanc-img").find("li").length*2);
    $(".tanc").eq(j).data("i",0);
    wid=$(".tanc").eq(j).find(".tanc-box").outerWidth();
    img=$(".tanc").eq(j).find(".tanc-imlis");
    img.css({left:0});
    prev=$(".tanc").eq(j).find(".prev");
    next=$(".tanc").eq(j).find(".next");
    img.append(htm);
    function cpxq(prev,next,img,j) {
        if(img!=undefined) {
            if(img.length>0){
                img.find("li").width(wid);
                img.width(wid*$(".tanc").eq(j).data("len"));
                next.click(function(){
                    len=$(".tanc").eq(j).data("len");
                    $(".tanc").eq(j).data("i", $(".tanc").eq(j).data("i")+1);
                    if($(".tanc").eq(j).data("i")>=len) {
                        $(".tanc").eq(j).data("i",len/2);
                        img.css({left:-wid*len/2+wid});
                    }
                    img.stop().animate({left:-wid*$(".tanc").eq(j).data("i")},500);
                })
                prev.click(function(){
                    len=$(".tanc").eq(j).data("len");
                    $(".tanc").eq(j).data("i", $(".tanc").eq(j).data("i")-1);
                    if($(".tanc").eq(j).data("i")<0) {
                        $(".tanc").eq(j).data("i",len/2-1);
                        img.css({left:-wid*len/2});
                    }
                    img.stop().animate({left:-wid*$(".tanc").eq(j).data("i")},500);
                })
            }
        }
    }
    cpxq(prev,next,img,j);
    (function(j){
        $(".tanc").eq(j).find(".tanc-tab").children("li").click(function(){
            console.log(j)
            var yd=$(this).index();
            $(this).addClass("on").siblings("li").removeClass("on");
            $(".tanc").eq(j).find(".tanc-nr").children(".tanc-box").eq(yd).show().siblings(".tanc-box").hide();
        })
       $(window).resize(function(){
        wid=$(".tanc").eq(j).find(".tanc-box").outerWidth();
        img=$(".tanc").eq(j).find(".tanc-imlis");
        img.find("li").width(wid);
        img.width(wid*$(".tanc").eq(j).data("len"));
        img.stop().css({left:-wid*$(".tanc").eq(j).data("i")});
       })
    }(j))
}
$(".tanc-page .qh .sho").click(function(){
    $(".tanc").eq(index).css("top","100%");
    var ind=$(this).parent(".qh").index();
    if(ind) {
        if(index>=lens-1){
            index=0;
        }else {
            index++; 
        }
    }else{
        if(index<=0){
            index=lens-1;
        }else{
            index--;
        }
    }
    $(".tanc").eq(index).css("top","0");
})
$(".tanc-page .fh").click(function(){
    $(".tanc").eq(index).css("top","100%");
})
$(".tanc-col").click(function(){
    $(".tanc").eq(index).css("top","100%");
})
$(".header .search").click(function(){
    $(".header-search").show();
    $(".headerSearch").show();
    $(".header-search .search-bg").animate({opacity:"1"},300);
    $(".menul").animate({opacity:"0"});
     setTimeout(function () { 
        $(".headerSearch .sbot").show()
    }, 1000);
})
$(".header-search .colse").click(function(){
    $(".header-search").hide();
    $(".headerSearch").hide();
    $(".header-search .search-bg").animate({opacity:"0"});
    $(".menul").animate({opacity:"1"});
    $(".headerSearch .sbot").hide()
})
$(".header .button").click(function(){
    $(this).toggleClass("opened");
    $(".menul").stop(true,true).slideToggle();
})