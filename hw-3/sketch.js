// Declare the set up function
function setup() {

  // create a canvas using canvas function that's 800px wide and 600 px high
  createCanvas( 800, 600 );

  //create the background using the background function that will be the color 'orange'
  background( 'orange' );
}


// Declare draw() function
function draw(){

  // Create text using the text function to have p5 write, "Hello World!"
  // Text will be postitioned roughly in the middle of the canvas at ( x: 365, y: 300).
  text( "Hello World!", 365, 300 );
}
