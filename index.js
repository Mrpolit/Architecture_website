logoText();
setTimeout(introEnd,11000);

var flag = false;

function logoText(){
    let Screen = window.innerWidth;
    const text=document.querySelector('.text-logo');
    let font = Screen*(12.8/1920)+"rem";
    text.style.fontSize = font;
    text.innerHTML = text.textContent.replace(/\S/g, "<a class='space'>$&</a>");
    stroke();
}
function stroke(){
    const logo = document.querySelectorAll('.space');
    for (let index = 0; index < logo.length; index++) {
        logo[index].style.strokeDasharray = 700;
        logo[index].style.strokeDashoffset = 700;
        logo[index].style.animation = ` logoAnimation 4s ease forwards ${(index/10)*2+1}s`;
    }
}
function introEnd() {
    const intro = document.querySelector('.intro');
    intro.style.display = "none";
}
function navbarbtn(){
    const navbarButton = document.querySelector(".navBarButton");
    const navbar = document.querySelector(".navBar");

    if(flag){
        navbar.style.display = "none";
        navbarButton.style.animation = "rotatezero 1s ease forwards";
    }else{
        navbar.style.display = "flex";
        navbarButton.style.animation = "rotateninty 1s ease forwards";
    }
    flag=!flag;
}