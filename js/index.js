const circle=document.querySelector('.circle');
const colorBtn=document.querySelector(".color");
const sizePlus=document.querySelector(".zoomIn");
const sizeMinus=document.querySelector(".zoomOut");

const colorArray=["blue","orange","pink","green","yellow","red"];
let i=0;
colorBtn.style.transition="all 1s";
const changeBackground=()=>{
    circle.style.backgroundColor=colorArray[i];
    colorBtn.style.backgroundColor=colorArray[i];
    i++;
    if(i==colorArray.length){
        i=0;
    }
    circle.style.transition="all 1s ease-out";
}

const zoomIn=()=>{
    circle.style.height=circle.clientHeight+20+"px";
    circle.style.width=circle.clientWidth+20+"px";
    circle.style.transition="all 0.5s ease-out";
}

const zoomOut=()=>{
    circle.style.height=circle.clientHeight-20+"px";
    circle.style.width=circle.clientWidth-20+"px";
    circle.style.transition="all 0.5s ease-out";
}

colorBtn.addEventListener('click',changeBackground);
sizePlus.addEventListener('click',zoomIn);
sizeMinus.addEventListener('click',zoomOut);