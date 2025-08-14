let sell = "What do we sell:";
let guar = "Quality & guarantee";
var index_animation = 0;
var index_animation2 = 0;
function boot(){
    
    document.getElementById("sellh").innerText = "";
    document.getElementById("guarh").innerText = "";
    animation();
    animation2();
    document.getElementById("logoimg").setAttribute("style","opacity:0%;");
    document.getElementById("logoimg2").setAttribute("style","opacity:0%;");
    animationlogo();
    
}
function animation(){


    
    document.getElementById("guarh").innerHTML += guar[index_animation];
    index_animation++;
    if (index_animation < guar.length){
        setTimeout(()=>{animation()},50);
    }
    
}
function animation2(){
document.getElementById("sellh").innerHTML += sell[index_animation-1];

    
    
    index_animation2++;
    if (index_animation2 < sell.length){
        setTimeout(()=>{animation2()},50);
    }
    
}
var opacity = 0;
function animationlogo(){
    document.getElementById("logoimg").setAttribute("style",`opacity:${opacity}%;`);
    document.getElementById("logoimg2").setAttribute("style",`opacity:${opacity}%;`);
    opacity++;
    if (opacity != 100){
        setTimeout(()=>{animationlogo()},10);
    }
    
}
