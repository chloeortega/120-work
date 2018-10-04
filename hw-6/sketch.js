// DEFINE GLOBAL VARIABLES
let vinyl = {};
vinyl.min = 10;
vinyl.max = 50;
vinyl.color = ('rgb( 255, 255, 179, 160 )');


// Declare function set up to begin creating "Vinyl Record"
function setup() {

  // Declare canvas function and give parameters for windowWidth and windowHeight
  createCanvas(windowWidth, 800);
  // Declare frame rate function and give parameters
  frameRate( 8 );
  // Declare background function
  background('rgb( 0, 0, 0 )');

  // set initial position of object
  vinyl.max = width - 5;


}

// Declare draw function
function draw(){




// Declare push and pop function to isolate free moving ellipse
  push();

    let circleBelow = frameCount % windowWidth ;
    noStroke();
    fill('rgb( 255, 179, 255 )');
    ellipse(circleBelow, height/2, 15, 15 );

  pop();




// Declare push and pop function to isolate ellipse following mouseX
push();

  // Declaring and initializing my variables
  let leftBarrier = 100;
  let rightBarrier = width - 100;
  let upperCircle = constrain(mouseX, leftBarrier, rightBarrier);
  // Creating barriers on left and right
  line(leftBarrier, 0, leftBarrier, height);
  line(rightBarrier, 0, rightBarrier, height );

  // This moving object will be constrained within the barriers defined above
  noStroke();
  fill('rgb( 255, 179, 255 )');
  ellipse(upperCircle, 66, 15, 15);

pop();



// BEGIN VINYL RECORD TRACKS
// Declare push and pop functions to isolate ellipse
push();

  noFill();
  // Declaring and initializing my variables
  let red = floor( random (156));
  let green = floor( random (100));
  let blue = floor( random(210));
  stroke( red, green, blue );

  let circle_size = random ( 15, width+15 );
  ellipse( width*0.5, height*0.5, circle_size );

pop();
// END VINYL RECORD TRACKS



// BEGIN VINYL RECORD CENTER HOLE AND LABEL
// Declare push and pop functions to isolate vinyl object
push();

  // Declaring and initializing my variables
  let vinylSize = map( mouseY, 0, width, vinyl.min, vinyl.max);

  noStroke();
  fill(255, 255, 179, 160);
  ellipse (width/2, height/2, vinylSize);

pop();
// END VINYL RECORD CENTER HOLE AND LABEL



// BEGIN VINYL NEEDLE
// Declare push and pop functions to isolate triangle
push();

  fill('rgb( 179, 179, 255 )');
  triangle(1350, 85, 1800, 800, 1800, 910);

pop();
// END VINYL NEEDLE






}
