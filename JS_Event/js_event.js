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
function likefunction(){
    document.getElementById("like").innerHTML='<i class="fa-solid fa-thumbs-up"></i> Liked';
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

/*
  !Keyboard Event 
    🔗 On Key press will only work on body or form 👉 onkeypress
    🔗 On Key up will only work on body just press up arraw key 👉 onkeyup
    🔗 On load will only work on body 👉 onload
    🔗 On resize will only work on body 👉 onresize
    🔗 On scroll will only work on body 👉 onscroll
*/

function kepressfunction(){
    document.getElementById('msg').innerHTML="key press";
}
function keupfunction(){
    document.getElementById('msg').innerHTML="key UP";
}

function loadfunction(){
    // alert("website loaded");
    document.getElementById('alert').innerHTML="website loaded propely";
}

function windowresize(){
  document.getElementById('textarea').style.height='100px';
  document.getElementById('form').style.fontFamily="Franklin Gothic Medium";
}
function scrollfunction(){
    
    document.getElementById('alert').innerHTML="Scrilling✔";
}

document.getElementById('ul').addEventListener('click',function(){
    console.log('ul clicked');
},
true); //event capturing (like waterfall step by step)
document.getElementById('li').addEventListener('click',function(e){
    console.log('li clicked');
},
false); //bubling ( nich theke ka korbe)