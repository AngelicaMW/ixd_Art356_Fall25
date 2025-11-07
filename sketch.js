//images and json

let bugs;
let tiger;
let peacock;
let agrias;
let emperor;
let common;
let acbugarea;
let bugsList;

//the photos

function preload() {
  acbugarea = loadImage("acbugarea.jpeg");
  bugsList = loadJSON("bugs.json");
  Common = loadImage("Common.png");
  Tiger = loadImage("Tiger.png");
  Peacock = loadImage("Peacock.png");
  Agrias = loadImage("Agrias.png");
  Emperor = loadImage("Emperor.png");
}


//loading the json

function setup() {
  createCanvas(1200, 800);
  textAlign(CENTER);
  textSize(20);

  loadJSON("bugs.json", gotData);


}

function gotData(data){
 bugsList = data;
}


 
//buterflies and background imgs

function draw() {
  background(220);
  imageMode(CORNER)
  rectMode(CENTER)


  image(acbugarea, 0, 0, 1200, 800);

    imageMode(CENTER)
    textAlign(CENTER)
  image(Common, 120, 350, 90, 40);
  image(Tiger, 700, 190, 65, 30);
  image(Peacock, 600, 600, 100, 50);
  image(Agrias, 450, 240, 60, 65);
  image(Emperor, 1000, 200, 80, 50);


//rect bg box


  if (mouseX > 70 && mouseX < 170 && mouseY > 300 && mouseY < 400 ) {
  rect(120,350, 200, 150)
  image(Common, 120, 350, 90, 40);
  text(bugsList.common_butterfly.name["name-USen"], 120, 300);
  text("Price " + bugsList.common_butterfly.price, 120, 400); 
  }
if (mouseX > 650 && mouseX < 750 && mouseY > 140 && mouseY < 240 ) {
  rect(700, 190, 200, 150)
  image(Tiger, 700, 190, 65, 30);
  text(bugsList.tiger_butterfly.name["name-USen"], 700, 140);
  text("Price " + bugsList.tiger_butterfly.price, 700, 240); 

}
if (mouseX > 550 && mouseX < 650 && mouseY > 550 && mouseY < 650 ) {
  rect(600, 600, 200, 150)
  image(Peacock, 600, 600, 100, 50);
  text(bugsList.peacock_butterfly.name["name-USen"], 600, 550);
  text("Price " + bugsList.peacock_butterfly.price, 600, 650); 

}
  
if (mouseX > 400 && mouseX < 500 && mouseY > 190 && mouseY < 290 ) {
  rect(450, 240, 200, 150)
  image(Agrias, 450, 240, 60, 65);
  text(bugsList.agrias_butterfly.name["name-USen"], 450, 190);
  text("Price " + bugsList.agrias_butterfly.price, 450, 290); 

}
  
if (mouseX > 950 && mouseX < 1050 && mouseY > 150 && mouseY < 250 ) {
  rect(1000, 200, 200, 150)
  image(Emperor, 1000, 200, 80, 50);
  text(bugsList.emperor_butterfly.name["name-USen"], 1000, 150);
  text("Price " + bugsList.emperor_butterfly.price, 1000, 250); 

}
  

  }

