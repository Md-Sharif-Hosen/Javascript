//!alert ()
 function objalert(){
 alert("Hello world");
};

//!confirm()
function objconfirm(){
    let result=confirm("do you want to delete");
    document.write(result);

}

//!prompt()
function objprompt(){
  let user=  prompt("write your name");
  document.write(user);
}

//! open()
function objopen(){
    open();
}

//! close()
function objclose(){
    close();
}

//!setTimeout()

setTimeout(function(){
alert("alert after 10 sec.");
},10000);//10 sec