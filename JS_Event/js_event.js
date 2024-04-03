// JavaScript Events



/*
!Mouse Event
Click 👉 onclick
Dubble Click 👉 ondblclick
Right Click 👉 oncontextmenu
Hover 👉 onmouseenter
Hover Out 👉 onmouseout
*/
function subsCribed(){
    document.getElementById('btn').innerHTML="Subscribed😍";
    document.getElementById('btn').style.backgroundColor="#262626";
    document.getElementById("text").innerHTML="Subscribed";
}
document.getElementById("btn1").ondblclick=function(){
    document.getElementById("btn1").innerHTML="Subscribed1😍"
    document.getElementById("btn1").style.backgroundColor="#da8f8f";
}
function subsCribed2(){
    document.getElementById("btn2").innerHTML="Subscribed2😍";
    document.getElementById("btn2").style.backgroundColor="#5a6947";
}
function subsCribed3(){
    document.getElementById("btn3").innerHTML="Subscribed3😍";
    document.getElementById("btn3").style.backgroundColor="#405e85";
}
document.getElementById('btn4').addEventListener("click",function(){
    document.getElementById("btn4").onmouseout=function(){
        document.getElementById("btn4").innerHTML="Subscribed4😍";
        document.getElementById("btn4").style.backgroundColor="#f88db0";
    }
})

