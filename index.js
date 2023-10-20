function fun(e){
    console.log(e);
    document.getElementById(e).style.display=="none"?document.getElementById(e).style.display = "block":document.getElementById(e).style.display = "none";
}