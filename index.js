var button=document.querySelector(".btn");
var flower=document.querySelector (".one");
button.addEventListener("click",function name(){
    button.classList.add ("animation");
    setTimeout(function(){button.classList.remove("animation")},200);
    button.classList.toggle("onpress");
    flower.classList.toggle ("visibility");
    if (button.classList.length===2){
       button.textContent="open";
    }
    else {
        button.textContent="Cali";
    }
})

