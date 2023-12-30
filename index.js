logoText();

function logoText(){
    const text=document.querySelector('.text-logo');
    text.innerHTML = text.textContent.replace(/\S/g, "<a class='space'>$&</a>");
    stroke();
}
function stroke(){
    const logo = document.querySelectorAll('.space');
    for (let index = 0; index < logo.length; index++) {
        logo[index].style.strokeDasharray = 700;
        logo[index].style.strokeDashoffset = 700;
        logo[index].style.animation = `logoAnimation 3s ease forwards ${(index/10)*2+1}s`
    }
}