let img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12;
let imgs = [
  "shelf1.jpg",
  "shelf2.jpg",
  "shelf3.jpg",
  "book1.jpg",
  "book2.jpg",
  "book3.jpg",
  "book4.jpg",
  "book5.jpg",
  "book6.jpg",
  "Ddrink1.png",
  "Ddrink2.png",
  "Ddrink3.png",
]; //array for book names, drinks, and shelves
let images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12]; //array for bookshelf and drinks id

let index; //index variable

function preload() {
  //load images as for loop
  // for (let i = 0; i < imgs.length; i++) {
  //   images[i] = loadImage(imgs[i]);
  // }
  //load images individually
  images[0] = loadImage("shelf1.jpg");
  images[1] = loadImage("shelf2.jpg");
  images[2] = loadImage("shelf3.jpg");
  images[3] = loadImage("book1.jpg");
  images[4] = loadImage("book2.jpg");
  images[5] = loadImage("book3.jpg");
  images[6] = loadImage("book4.jpg");
  images[7] = loadImage("book5.jpg");
  images[8] = loadImage("book6.jpg");
  images[9] = loadImage("Ddrink1.png");
  images[10] = loadImage("Ddrink2.png");
  images[11] = loadImage("Ddrink3.png"); 
}

function setup() {
  createCanvas(450, 600);

  index = int(random(2));
  noLoop(); //stops the loop
}

function draw() {
  background(220);

  image(images[index], 0, 0, width, height);

  //little extra fun
  for (let i = 0; i < 45; i++) {
    image(
      images[int(random(3, 12))],
      random(width),
      random(height),
      random(25, 50),
      random(25 * 2, 50 * 2)
    );
    rotate(HALF_PI / 2.0);
  }

  text(index, 200, 200);
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) loop(); //starts the loop
  index++;

  if (index > 2) {
    index = 0;
  }
  noLoop(); //stops the loop
}