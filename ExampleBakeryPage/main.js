let creator = "Mateusz Krawczyński";
let author = "Mateusz Krawczyński";
function boot(){
    slider();
    typer();
    logodisplay();
}
var slider_i = 1;
function slider(){
    document.getElementById("slider").innerHTML = `<img src="img/slider/${slider_i}.jpg" class="slider">`;
    slider_i++
    if (slider_i > 3){
        slider_i = 1;
    }
    setTimeout(()=>{slider();},5000);
}
let text = "Best bread in our local area";
let text_far = 0;
function typer(){
    if (text[text_far] === " "){
        document.getElementById("promotext").innerText += "\xA0";
    }
    else{
        document.getElementById("promotext").innerText += text[text_far];
    }
    
    text_far++;
    if (text_far < text.length){
        setTimeout(()=>{typer();},150);
    }

}

function anchor(url){
    window.location = url;
}

function checktime(){
    let date = new Date;
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let schedlue = {
        "1": "5:30-17:30",
        "2": "5:00-17:00",
        "3": "5:00-17:00",
        "4": "5:00-17:00",
        "5": "5:00-17:00",
        "6":"5:30-13:30",
        "0":"CLOSED"
    };

    let days = {
        "1":"Monday",
        "2":"Tuesday",
        "3":"Wednesday",
        "4":"Thursday",
        "5":"Friday",
        "6":"Saturday",
        "0":"Sunday"
    }

    var start_h = 0;
    var start_m = 0;
    var end_h = 0;
    var end_m = 0;

    if(minutes < 10){
        document.getElementById("zegar").innerText = `${days[`${day}`]} | ${hours}:0${minutes}`;
    }
    else{
        document.getElementById("zegar").innerText = `${days[`${day}`]} | ${hours}:${minutes}`;
    }  

    var str = schedlue[`${day}`];
    if (str == "CLOSED"){
        document.getElementById("status").innerText = "Bakery closed";
        document.getElementById("status").setAttribute("style","color:red;");
        return "";
    }

    
    start_h = str.split("-")[0].split(":")[0];
    start_m = str.split("-")[0].split(":")[1];
    end_h = str.split("-")[1].split(":")[0];
    end_m = str.split("-")[1].split(":")[1];
      

   

    if (hours > start_h && hours < end_h){
        document.getElementById("status").innerText = "Bakery open";
        document.getElementById("status").setAttribute("style","color:green;");
    }
    else if (hours == start_h){
        if (minutes > start_m){
            document.getElementById("status").innerText = "Bakery open";
        document.getElementById("status").setAttribute("style","color:green;");
        }
        else{
            document.getElementById("status").innerText = "Bakery closed";
        document.getElementById("status").setAttribute("style","color:red;");
        }
    }
    else if (hours == end_h){
        if (minutes < end_m){
            document.getElementById("status").innerText = "Bakery open";
        document.getElementById("status").setAttribute("style","color:green;");
        }
        else{
            document.getElementById("status").innerText = "Bakery closed";
        document.getElementById("status").setAttribute("style","color:red;");
        }
    }
    else{
        document.getElementById("status").innerText = "Bakery closed";
        document.getElementById("status").setAttribute("style","color:red;");
    }
}
let transparency = 0.1;
function logodisplay(){
    transparency += 0.01;
    document.getElementsByClassName("logo")[0].setAttribute("style",`opacity:${transparency};`);
    setTimeout(()=>{logodisplay();},20);
}

