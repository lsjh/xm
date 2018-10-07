    var flag=true;
    var flag3=true;

    $(".set-acc-btn .btn").click(function(){
        if(flag3) {
            $(this).parent(".set-acc-btn").siblings(".set-acc-input").children(".input1").removeAttr("disabled").focus();
            $(this).parent(".set-acc-btn").siblings(".set-acc-input").children(".input1").val("");
            $(this).addClass("on");
        }else {
            $(this).parent(".set-acc-btn").siblings(".set-acc-input").children(".input1").attr("disabled");
            $(this).removeClass("on");
        }
        flag3=!flag3;
    })

    // 下拉框
    $(document).click(function(){ 
        $('.select-drop').hide();
        $(".select-wz").removeClass("on");
        flag=true;
    })
    $(".select-result li").click(function(){
        var val=$(this).html();
        $(this).parents(".select-drop").siblings(".select-wz").html(val);
        $(this).parents(".select-drop").hide();
        flag=true;
        $(this).parents(".select-drop").siblings(".select-wz").removeClass("on");
    })
    $(".select-wz").click(function(){
        $(".select-container").siblings(".select-container").children(".select-drop").hide();
       $(".select-container").siblings(".select-container").children(".select-wz").removeClass("on");
        if(flag) {
            $(this).addClass("on");
            $(this).siblings(".select-drop").show();
        }else {
            $(this).removeClass("on");
            $(this).siblings(".select-drop").hide();
        }
        flag=!flag;
    })
    $(".select-container").click(function(){
        event.stopPropagation();
    })


    // 修改密码
    $(".set-pers-btn").data("flag",true);
    $(".set-pers-btn").click(function(){
        if($(this).data("flag")){
            $(this).addClass("on").siblings(".set-pers-zhmm").children(".pass").hide();
            var val=$(this).siblings(".set-pers-zhmm").children(".pass").val();
            $(this).siblings(".set-pers-zhmm").children(".txt").show().val(val);
            $(this).data("flag",false);
        }else {
            var val=$(this).siblings(".set-pers-zhmm").children(".txt").val();
            $(this).removeClass("on").siblings(".set-pers-zhmm").children(".pass").show().val(val);
            $(this).siblings(".set-pers-zhmm").children(".txt").hide();
            $(this).data("flag",true);
        }
    })
    var flag4=true;
    $(".phone-hm li").click(function(){
        var htm=$(this).children("span").html();
        $(this).parents(".phone-hm").siblings(".login-sjh").children(".phone-area").html(htm);
        $(this).parents(".phone-hm").css({"left":"108%"});
        flag4=true;
        $(".login-dsf").show();
    })
    $(".login-sjh .phone-area").click(function(){
        if(flag4) {
            $(this).parent(".login-sjh").siblings(".phone-hm").css({"left":"0"});
            flag4=false;
            $(".login-dsf").hide();
        }else {
            $(this).parent(".login-sjh").siblings(".phone-hm").css({"left":"108%"});
            flag4=true;
            $(".login-dsf").show();
        }
    })
    $(".login-tab li").click(function(){
        $(this).addClass("on").siblings("li").removeClass("on");
        var index=$(this).index();
        $(".login-modu-box").eq(index).addClass("on").siblings(".login-modu-box").removeClass("on");
    })
    $(".login-zd .login-zdle").click(function(){
        $(this).toggleClass("on");
    })
    var flag2=true;
    $(".login-switch").click(function(){
        if(flag2) {
            $(this).addClass("on");
            $(".login-dbox").eq(0).hide().siblings(".login-dbox").show();
        }else {
            $(this).removeClass("on");
            $(".login-dbox").eq(0).show().siblings(".login-dbox").hide();
        }
        flag2=!flag2;
    })
    $(".sign-mico").data("flag",true);
    $(".sign-mico").click(function(){
        if($(this).data("flag")){
            $(this).addClass("on").siblings(".sign-msr").children(".sign-minp.mm").hide();
            var val=$(this).siblings(".sign-msr").children(".mm").val();
            $(this).siblings(".sign-msr").children(".txt").show().val(val);
            $(this).data("flag",false);
        }else {
            var val=$(this).siblings(".sign-msr").children(".txt").val();
            $(this).removeClass("on").siblings(".sign-msr").children(".mm").show().val(val);
            $(this).siblings(".sign-msr").children(".txt").hide();
            $(this).data("flag",true);
        }
    })

    var button=document.querySelectorAll(".input-yan input")[0];
    var timer=null;
    if(button!=undefined) {
        button.onclick=function(){
            clearInterval(timer);//这句话至关重要
            var time=60;
            var that=this;//习惯
            timer=setInterval(function(){
                if(time<=0){
                    that.value="";
                    that.value="点击重新发送";
                    that.disabled=false;
                    that.style.background="#ff9900";
                    that.style.color="#fff";
                }else {
                    that.disabled=true;
                    that.value="";
                    that.value=(time)+"s重新发送";
                    time--;
                    that.style.background="#ebebeb";
                    that.style.color="#a0a0a0";
                }
            },1000);
        }
    }

    var _ = function(selector){
        return  document.querySelector(selector);
    },
    box = _(".login-tuo"),//容器
    bg = _(".tuo-bg"),//背景
    text = _(".tuo-text"),//文字
    btn = _(".tuo-slide");//滑块
    var tmov=null;
    if(btn!=undefined) {
        var success = false,
        distance = box.offsetWidth - btn.offsetWidth;
        function dragStart(e) {
             //1.手指按下之前必须清除掉后面设置的过渡属性
             btn.style.transition = "";
             bg.style.transition ="";
             var e = e || window.event; 
             tmov = e.targetTouches[0].clientX;
            console.log(tmov);
        }
        function dragMove(e) {
            var e = e || window.event;
            //1.获取鼠标移动后的水平位置
            var moveX = e.targetTouches[0].clientX;

            //2.得到鼠标水平位置的偏移量（鼠标移动时的位置 - 鼠标按下时的位置）
            var offsetX = moveX - tmov;

            //3.在这里判断一下：鼠标水平移动的距离 与 滑动成功的距离 之间的关系
            if( offsetX > distance){
                offsetX = distance;//如果滑过了终点，就将它停留在终点位置
            }else if( offsetX < 0){
                offsetX = 0;//如果滑到了起点的左侧，就将它重置为起点位置
            }

            //4.根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
            btn.style.left = offsetX+1 + "px";
            bg.style.width = offsetX+1 + "px";

            //如果鼠标的水平移动距离 = 滑动成功的宽度
            if( offsetX == distance){

                //1.设置滑动成功后的样式
                text.innerHTML = "验证通过";
                text.style.color = "#fff";
                btn.style.backgroundImage="url(images/acc.jpg)";
                btn.style.borderLeft="1px solid #dcdcdc";
                btn.style.borderRight="none";
                $(".login-btn2").css({background:"#ff9900","color":"#fff"});
                $(".login-btn2").attr("disabled", false);

                //2.设置滑动成功后的状态
                success = true;
                //成功后，清除掉鼠标按下事件和移动事件（因为移动时并不会涉及到鼠标松开事件）
                btn.onmousedown = null;
                document.onmousemove = null;

                //3.成功解锁后的回调函数
                setTimeout(function(){
                    
                },100);
            }
        }
        function dragEnd() {
            //如果鼠标松开时，滑到了终点，则验证通过
            if(success){
                return;
            }else{
                //反之，则将滑块复位（设置了1s的属性过渡效果）
                btn.style.left = 0;
                bg.style.width = 0;
                btn.style.transition = "left 1s ease";
                bg.style.transition = "width 1s ease";
            }
                //只要鼠标松开了，说明此时不需要拖动滑块了，那么就清除鼠标移动和松开事件。
                document.onmousemove = null;
                document.onmouseup = null;
        }
        $(function() {
            btn.addEventListener("touchstart", dragStart);
            btn.addEventListener("touchmove", dragMove);
            btn.addEventListener("touchend", dragEnd);
        });
        //二、给滑块注册鼠标按下事件
        btn.onmousedown = function(e){

            //1.鼠标按下之前必须清除掉后面设置的过渡属性
            btn.style.transition = "";
            bg.style.transition ="";

            //说明：clientX 事件属性会返回当事件被触发时，鼠标指针向对于浏览器页面(或客户区)的水平坐标。

            //2.当滑块位于初始位置时，得到鼠标按下时的水平位置
            var e = e || window.event;
            var downX = e.clientX;


            //三、给文档注册鼠标移动事件
            document.onmousemove = function(e){
               var e = e || window.event;
               //1.获取鼠标移动后的水平位置
               var moveX = e.clientX;

               //2.得到鼠标水平位置的偏移量（鼠标移动时的位置 - 鼠标按下时的位置）
               var offsetX = moveX - downX;

               //3.在这里判断一下：鼠标水平移动的距离 与 滑动成功的距离 之间的关系
               if( offsetX > distance){
                   offsetX = distance;//如果滑过了终点，就将它停留在终点位置
               }else if( offsetX < 0){
                   offsetX = 0;//如果滑到了起点的左侧，就将它重置为起点位置
               }

               //4.根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
               btn.style.left = offsetX+1 + "px";
               bg.style.width = offsetX+1 + "px";

               //如果鼠标的水平移动距离 = 滑动成功的宽度
               if( offsetX == distance){

                   //1.设置滑动成功后的样式
                   text.innerHTML = "验证通过";
                   text.style.color = "#fff";
                   btn.style.backgroundImage="url(images/acc.jpg)";
                   btn.style.borderLeft="1px solid #dcdcdc";
                   btn.style.borderRight="none";
                   $(".login-btn2").css({background:"#ff9900","color":"#fff"});
                   $(".login-btn2").attr("disabled", false);

                   //2.设置滑动成功后的状态
                   success = true;
                   //成功后，清除掉鼠标按下事件和移动事件（因为移动时并不会涉及到鼠标松开事件）
                   btn.onmousedown = null;
                   document.onmousemove = null;

                   //3.成功解锁后的回调函数
                   setTimeout(function(){
                       
                   },100);
               }
           }
           //四、给文档注册鼠标松开事件
           document.onmouseup = function(e){

               //如果鼠标松开时，滑到了终点，则验证通过
               if(success){
                   return;
               }else{
                   //反之，则将滑块复位（设置了1s的属性过渡效果）
                   btn.style.left = 0;
                   bg.style.width = 0;
                   btn.style.transition = "left 1s ease";
                   bg.style.transition = "width 1s ease";
               }
                   //只要鼠标松开了，说明此时不需要拖动滑块了，那么就清除鼠标移动和松开事件。
                   document.onmousemove = null;
                   document.onmouseup = null;
           }
       }
    }
var flag5=true;
function isMbl(){
    var winWidth="";
    if (window.innerWidth){
        winWidth = window.innerWidth;
    }else if ((document.body) && (document.body.clientWidth)){
        winWidth = document.body.clientWidth;
    }
    if(winWidth>640){
        return false;
    }
    return true;
}
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
var m=0;
function move(){
    if(i>=len) {
        i=len/2;
        $("#banner-list").css({left:-wid*len/2+wid});
    }else if(i<0) {
        i=len/2;
        $("#banner-list").css({left:-wid*len/2});
    }
    m=i;
    $("#banner-list").stop().animate({"left":-wid*i},500);
    i++;
}
move();
var int=setInterval(move,3000);
$("#dot li").click(function(){
    i=$(this).index();
    m=i;
    move();
})
$(".banner").hover(function(){
    clearInterval(int);
},function(){
    var int=setInterval(move,3000);
})
$(window).resize(function(){
    wid=$(window).width();
    $("#banner-list li").width(wid);
    $("#banner-list").width(wid*len);
    console.log(m)
    $("#banner-list").css({left:-wid*m});
    if(isMbl()){
        $(".foo-list ul").hide();
    }else{
        $(".foo-list ul").show();
    }
    if($(window).width()<1100) {
        $(".hea-menu").css({"display":"none"});
    }else {
        $(".hea-menu").css({"display":"inline-block"});
    }
})
    $(".foo-tit").on("click",function(){
        if(isMbl()) {
            var num = $(this).attr("num");
            var that = $(this);
            $(".foo-tit").attr("num",0);
            if(num=="2"){
                return
            }
            if(num==0){
                $(".foo-list ul").slideUp();
                that.parent().find("ul").slideDown();
                that.attr("num",1);
            }else{
                that.parent().find("ul").slideUp();
                that.attr("num",0);
            }
        }
    })
    $(".hea-ssk").click(function(){
        $(".hd-search").stop().slideToggle();
    })
    $(".hd-btn").click(function(){
        $(".hea-menu").stop().slideToggle();
    })
     $("#fang").click(function(){ 
        $('body,html').stop().animate({scrollTop:0},500); 
    }) 