const imageContainer = document.getElementById("image");
const buttonsContainer = document.getElementById("buttons");
const transitionButton = document.getElementById("tr-button");
let index = 1;
let second = transitionButton.value;
let interval;


function startInterval(){
    interval = setInterval(changeImage, second);
}

function changeImage(){ 
    document.getElementsByClassName("active")[0].classList.remove("active");
    buttonsContainer.children[index].classList.add("active");
    document.getElementsByClassName("show")[0].classList.remove("show");
    imageContainer.children[index].classList.add("show")
    index++;    
    if(index >= imageContainer.children.length){
        index = 0;
    }
}


imageContainer.addEventListener("mouseenter",function(){
    clearInterval(interval);
})

imageContainer.addEventListener("mouseleave",function(){
    startInterval()
});

buttonsContainer.addEventListener("click",function(e){
    if(e.target != buttonsContainer){
        clearInterval(interval);
        index = +e.target.id
        changeImage();
        startInterval();
    }
});

transitionButton.addEventListener("change",function(){
    clearInterval(interval);
    second = +transitionButton.value;
    startInterval();    
});

for(let i = 0; i < imageContainer.children.length; i++){
    const buttonElement = document.createElement("div");
    buttonElement.id = i;
    buttonsContainer.appendChild(buttonElement);
}

buttonsContainer.children[0].classList.add("active");

startInterval();
