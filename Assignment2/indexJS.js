// Creat a unction to load the json
async function loadImage() {
    let loaderAnimation = document.getElementsByClassName('loader')[0]; /*Get the loader element*/
    loaderAnimation.style.animationPlayState = "running"; // Play loader until we will finish to add all the options
    
    let imagesURL = './images.json';
    let images = await (await fetch(imagesURL)).json(); // First time wait on fetch to bring the url and next time wait to load the json
    let selectOptions = document.getElementById("selectOptions"); // Get our element to "
    for (const index in images){
        let newOption = new Option(images[index].name,images[index].value); // Set every time new option to the selector
        selectOptions.add(newOption,undefined); // Add the new option
    }

    loaderAnimation.style.animationPlayState = "paused"; // when we finish we will paused the animation
    loaderAnimation.style.display="none"; // when we finish we will undisplay the loader
}
loadImage(); // Call the function to load the json

// Some variables the we need to use
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

// Function to select the images by the value that is represented as "imageURL"
function selectImage(imageURL){
    let image = new Image();
    image.src = imageURL; // Set image src
    image.onload = () => { // When load
        canvasContext.drawImage(image,0,0,canvas.width,canvas.height); // Draw the image on the canvas
    };
}

// Function to display the text on the canvas
function displayText(value){
    canvasContext.save();
    let userText = document.getElementById("textField");
    let textBox = document.getElementById("textBox");
    textBox.textContent = userText.value; /*write to the text box */
    canvasContext.restore();
}

// Function to change the canvas background
function changeCanvasColor(color){
    let canvasbackground = document.getElementById("canvasBackground");
    canvasbackground.style.backgroundColor = color;
}


/* Debounce Function for the performance*/
const debounce = (debounceFunction, delay) =>{
    let timeOut;
    return function(){
        if(timeOut){
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(()=>{
            debounceFunction();
        },delay)
    }
}
document.getElementById("textField").addEventListener('input', debounce(e =>{
},1000));