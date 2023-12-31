logoText();
setTimeout(introEnd,8000);

function logoText(){
    let Screen = window.innerWidth;
    const text=document.querySelector('.text-logo');
    const svg =document.querySelector("svg");
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
        logo[index].style.animation = ` logoAnimation 3s ease forwards ${(index/10)*2+1}s`;
    }
}
function introEnd() {
    const intro = document.querySelector('.intro');
    intro.style.display = "none";
}