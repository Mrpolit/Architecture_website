const navbarButton = document.querySelector(".navBarButton");
const navbar = document.querySelector(".navBar");
const line = document.querySelectorAll(".line");
const halfline = document.querySelector(".halfline");


logoText();
setTimeout(introEnd,11000);

var flag = false;



function logoText(){
    let Screen = window.innerWidth;
    const text=document.querySelector('.text-logo');
    let font = Screen*(12.8/1920)+"rem";
    text.style.fontSize = font;
    text.innerHTML = text.textContent.replace(/\S/g, "<tspan class='space'>$&</tspan>");
    stroke();
}
function stroke(){
    const logo = document.querySelectorAll('.space');
    for (let index = 0; index < logo.length; index++) {
        logo[index].style.strokeDasharray = 700;
        logo[index].style.strokeDashoffset = 700;
        logo[index].style.animation = ` logoAnimation 4s ease forwards ${(index/10)*2+1}s `;
    }
}
function introEnd() {
    const intro = document.querySelector('.intro');
    intro.style.display = "none";
}
function navbarbtn(){
    if(flag){
        navbar.style.animation = "fadeout 0.5s ease forwards ";
        setTimeout(navbarEnd, 1000);
        navbarButton.style.animation = "rotatezero 1s ease forwards";
        line[0].style.width="1rem";
        line[1].style.width="1rem";
        halfline.style.width="1rem";
    }else{
        navbar.style.display = "flex";
        navbar.style.animation = "fadein 3s ease forwards ";
        navbarButton.style.animation = "rotateninty 1.5s ease forwards";
        line[0].style.width="3rem";
        line[1].style.width="2.5rem";
        halfline.style.width="1.5rem";
    }
    flag=!flag;
}
function navbarEnd(){
    if(!flag){
    navbar.style.display = "none";
    }
}