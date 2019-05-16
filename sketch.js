function preload() {
  pecil = loadImage("assets/pecil.png");    
  thiccory = loadImage("assets/thiccory.jpg")
}


function setup() {
 createCanvas(1000,1000);
 background(thiccory);
 
}

function draw() {
 if(keyIsPressed === true) {
     background(thiccory)
     //imageMode (CENTER);
 }
 if(mouseIsPressed === true) {
     image(pecil,mouseX - 150,mouseY - 150)
 }
} 
 


