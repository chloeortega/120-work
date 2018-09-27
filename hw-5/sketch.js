// Declare setup function for Starry Moon Night
function setup() {

  // Declare create canvas function to display the canvas as the width and height of the computer screen
  createCanvas( windowWidth, windowHeight );

  // Declare background function to display rgb color indicated
  background('rgb( 6, 9, 20  )');

  // Declare frame rate
  frameRate( 24 );

}

// Declaring and initializing my variables
let moonX = 0 ;
// moonY will trail behind moonX to make moonX's frames the background color
let moonY = -15 ;
let star1 = 0 ;
let star2 = 0 ;
let star3 = 0 ;
let star4 = 0 ;
let star5 = 0 ;
let star6 = 0 ;
let star7 = 0 ;

// Declare draw function
function draw() {

// Declare no cursor function so the cursor will not appear
noCursor() ;


// BEGIN MOUNTAINS
// Declare push and pop functions to isolate shape
push();
// Declare fill and rectangle functions to make shape for base of mountain
  fill( 'rgb( 0, 0, 0 )' );
  rect( 0, 650, windowWidth, 300 );
pop();

// Declare push and pop functions to isolate shape
push();
// Declare fill and triangle functions to make shape for left peak of mountain
  fill( 'rgb( 0, 0, 0 )' );
  triangle(300, 600, 0, 650, 500, 800);
pop();

//Declare push and pop functions to isolate shape
push();
// Declare fill and triangle functions to make shape for middle peak of mountain
  fill( 'rgb( 0, 0, 0 )' );
  triangle(800, 600, 0, 750, 1800, 900);
pop();

//Declare push and pop function to isolate shape
push();
// Declare fill and triangle functions to make shape for right peak of mountain
  fill( 'rgb( 0, 0, 0 )' );
  triangle(950, 900, 1300, 500, 1710, 700);
pop();
// END MOUNTAINS



// BEGIN MOONS
// Declare push and pop function to isolate my shape
push();
// Declare noStroke, fill, and ellipse function to make first moon
  noStroke() ;
  fill( 'rgb( 245, 245, 239 )' ) ;
  ellipse( moonX, 400, 90, 90 ) ;
// Declare noStroke, fill, and ellipse funtion to make second moon
  noStroke() ;
  fill(' rgb( 6, 9, 20 )') ;
  ellipse ( moonY, 400 , 90, 90 ) ;
  moonY = moonY + 1.5 ;
  moonX = moonX + 1.5 ;
pop() ;
// END MOONS



// BEGIN STARS
// Declare push and pop function to isolate my ellipse function to use my star1 variable
push();
  translate( width*.5, height*.1 );
  rotate( radians(star1) );
  fill('rgb( 255, 204, 0 )');
  ellipse( 0, 0, 20, 1.5, 5 ) ;

  star1 = star1 + 93;
pop();

// Declare push and pop function to isolate my ellipse function to use my star2 variable

push();
  translate( width*.3, height*.3 );
  rotate( radians(star2) );
  fill('rgb( 230, 255, 255 )');
  ellipse( 0, 0, 20, 2, 5 ) ;

  star2 = star2 + 93;
pop();

// Declare push and pop function to isolate my ellipse function to use my star3 variable

push();
  translate( width*.1, height*.2 );
  rotate( radians(star3) );
  fill('rgb( 230, 230, 255 )');
  ellipse( 0, 0, 40, 1.5, 5 ) ;

  star3 = star3 + 95 ;
pop();

// Declare push and pop funciton to isolate my ellipse function to use my star4 variable
push();
  translate( width*.9, height*.04 );
  rotate( radians(star4) );
  fill('rgb( 230, 230, 255 )');
  ellipse( 0, 0, 40, 1.5, 5 ) ;

  star4 = star4 + 95 ;
pop();

//Declare push and pop function to isolate my ellipse function to use my star5 variable
push();
  translate( width*.8, height*.01 );
  rotate( radians(star5) );
  fill('rgb( 230, 255, 255 )');
  ellipse( 0, 0, 20, 2, 5 ) ;

  star5 = star5 + 93;
pop();

// Declare push and pop function to isolate my ellipse function to use my star6 variable
push();
  translate( width*.9, height*.6 );
  rotate( radians(star6) );
  fill( 'rgb( 230, 255, 255 )' );
  ellipse( 0, 0, 20, 1.5, 5 ) ;

  star6 = star6 + 93;
pop();

// Declare push and pop function to isolate my ellipse function to use my star7 variable
push();
  translate( width*.03, height*.7 );
  rotate( radians(star7) );
  fill('rgb( 230, 255, 255 )');
  ellipse( 0, 0, 20, 2, 5 ) ;

  star7 = star7 + 93;
pop();
// END OF STARS



// BEGIN TRAIL OF STARS
//Declare push and pop functions to isolate my shape
push();
//Declare fill and ellipse functions to make an ellipse that will follow my mouse and leave a trail to draw stars
fill( 'rgb( 230, 230, 255 )' );
ellipse(mouseX, mouseY, 2.5, 2.5 );
pop();
// END TRAIL OF STARS




}
