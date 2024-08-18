let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomColor=generateRandomColor();
    h3.innerText=randomColor;
    document.body.style.backgroundColor=randomColor;
})

function generateRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}