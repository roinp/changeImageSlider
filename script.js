const imageContainer = document.getElementById("image");
const imagesContainer = document.getElementById("images");
const buttonsContainer = document.getElementById("buttons");
const imageElement = document.createElement("img");
let index = 1;
const second = 1000;
 

const imageSrcs = [
    "./images/acmilan.jfif",
    "./images/gatusso.jpg",
    "./images/kaka.jfif",
    "./images/maldini.jfif",
    "./images/images.jfif",
    "./images/league.jpg" ,
    "./images/tokatayajpg.jpg"   
];

imageElement.setAttribute("src", imageSrcs[0]);
imageContainer.appendChild(imageElement);

for(let i = 0; i < imageSrcs.length; i++){
    const imageElement = document.createElement("img");
    const buttonElement = document.createElement("div");
    buttonElement.id = i;
    imagesContainer.appendChild(imageElement);
    imageElement.setAttribute("src", imageSrcs[i]);
    buttonsContainer.appendChild(buttonElement);
}

buttonsContainer.children[0].classList.add("active");


function changeImage(){
    imageElement.setAttribute("src",imageSrcs[index]);
    document.getElementsByClassName("active")[0].classList.remove("active");

    buttonsContainer.children[index].classList.add("active");
    index++;
    if(index == imageSrcs.length){
        index = 0;
    }
}

let interval = setInterval(changeImage, second);

imageElement.addEventListener("mouseenter",function(){
    clearInterval(interval);
})


imageElement.addEventListener("mouseleave",function(){
    interval = setInterval(changeImage, second);
});


buttonsContainer.addEventListener("click",function(e){
    if(e.target != buttonsContainer){
        clearInterval(interval);
        index = +e.target.id
        changeImage();
        interval = setInterval(changeImage, second);
    }
})
