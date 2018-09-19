//set up function
function setup() {
  // make canvas and specify the parameters to put my monster on
  createCanvas(600, 800);
}
// execute draw funtion to start creating my small monster
function draw() {

  // make the background and specify the color
  background(' rgb(200,200,204) ');

  // move the origin to center of canvas
  translate(300, 400);


  // Legs
  // Use push and pop function to isolate legs from rest of the body
  push();
  fill( 'rgb(197, 263, 217)' );
  strokeWeight( 2 );
  // Right leg using triangle function and scale function to flip over axis to make left leg
  triangle(-95, 85, 0, 90, -40, 250);
  scale(-1,1);
  // Left leg
  triangle(-95, 85, 0, 90, -40, 250);
  pop();
  // End of legs

  // Ears
  // Use push and pop function to isolate ears from rest of the body
  push();
  strokeWeight( 5 );
  fill( 'rgb(255, 153, 179)' );
  // Left ear using ellipse function and scale function to flip over axis to make right ear
  ellipse( -90, -160, 130, 130 );
  scale( -1, 1 );
  // Right Ear
  ellipse( -90, -160, 130, 130 );
  pop();
  // End of ears

// MAIN BODY
// Use push pop function to isolate body from other body parts

push();
strokeWeight( 5 );
fill('rgb(200, 158, 220)')
ellipse(0, 0, 260, 300);
pop();
// End of main body

// Arms
// Use push pop function to isolate arms from rest of body
push();
fill( 'rgb(128, 214, 171)' );
strokeWeight( 2 );
// Left arm, use triangle function to construct and scale funtion to flip over axis to make right arm
triangle(-85, 45, -20, 50, -40, 100);
scale( -1,1 );
// Right arm
triangle(-85, 45, -20, 50, -40, 100);
pop();
// End of arms

// Head

// Skull
// Use push and pop function to isolate skull
// Use ellipse function to create the skull shape
push();
strokeWeight( 3 );
fill('rgb(255, 102, 140)')
ellipse( 0, -40, 150, 120);
pop();

// Eyeballs
// Use push and pop function to isolate eyeballs
// Use ellipse functions to construct eyeballs
push();
fill( 'rgb(0, 0, 0)' );
// Left eye
ellipse(-20, -50, 10, 30);
// Right eye
ellipse(20, -50, 10, 30);
pop();

// Pupils of eyes
// Use push and pop function to isolate pupils
// Use ellipse functions to construct pupils
push();
fill( 'red' );
// Left pupil
ellipse(-20, -50, 6, 6 );
// Right pupil
ellipse(20, -50, 6, 6 );
pop();

// Eyebrows
// Use push and pop function to isolate eyebrows
// Use line function to construct eyebrows
push();
strokeWeight( 2 );
// Left eyebrow and scale function to flip over axis and make right eyebrow
line( -45, -70, -4, -60 );
scale( -1,1 );
// Right eyebrow
line( -45, -70, -4, -60 );
pop();

// Mouth
// Use push and pop function to isolate mouth
// Use line function to create mouth
push();
strokeWeight( 2 );
line( -20, -20, -10, -10, 40, 40 );
pop();

// Horn
// Use push and pop function to isolate horn
// Use triangle function to create horn
push();
strokeWeight( 2 );
fill( 'white' );
triangle( -20, -120, 20, -120, 0, -250 )
pop();

// End of head











}
