// Declaring and initializing global variables
let across, spaceX;
let down, spaceY;
var bulbsOne = -300;
var bulbsTwo = -300;


// Declare setup function for Starry Moon Night
function setup() {

  // Declare create canvas function to display the canvas as the width and height of the computer screen
  createCanvas( windowWidth, windowHeight );


  // Declare frame rate
  frameRate( 5 );

  // Initializing and defining variables and parameters
  spaceX = 10;
  across = floor( width / spaceX );
  spaceY = 10;
  down = floor( height / spaceY );




}



// Declare draw function
function draw() {

// Declare background function to display rgb color specified
  background('rgb( 0, 0, 5 )');


 // Initializing and defining variables
  let circles = 10;
  let length = width / circles;

  let line = 100;
  let num = 100;

 // Random generating ellipses by defined parameters
  noStroke();
  let x = 1;
  let y = 1;
  while ( x !== 0 ){
    x = floor(random() * across);
    y = floor(random() * down);


    fill( random(204), random(255), random(255), 10 );
    ellipse( x*spaceX, y*spaceY, random(0, 100) );

  }


  // Declaring first for Loop for top ellipse

  for (var x2 = 0; x2 <= width; x2 += 30) {
    fill(random(255), random(5), random(205));
    ellipse(x2 + bulbsOne, 50, 10, 10);

  }

bulbsOne = bulbsOne + 15;

// Declaring second for Loop for bottom ellipse
for (var x3 = 0; x3 <= width; x3 += 30){
  fill(random(255), random(5), random(205));
  ellipse(x3 + bulbsTwo, 740, 10, 10);

}

bulbsTwo = bulbsTwo + 15;




// Declaring for Loop for middle ellipse
for ( let circleX = 30; circleX <= width; circleX += length) {
  fill( random(100), 230, random(205) );
  ellipse( circleX, 400, 20, 20 );
}



}
