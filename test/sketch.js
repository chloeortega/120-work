//declare variable for array
let stars = [];
// give parameter for how many starts will appear
const numOfStars = 180;

//declare function setup
function setup() {

//declare create canvas and give parameters
  createCanvas(windowWidth, 1000);

//declare no cursor function so the cursor will not show up
  noCursor();


// give parameters to create a new star
  let start_x = 40;
  let start_y = 40;
  for (let i = 0; i < numOfStars; i++) {
// create new object
    stars.push(new Star(start_x, start_y));

// the starting position will let the stars begin in bundles
    start_x += 400;
    if(start_x > width) {
      start_x = 40;
      start_y =+ 400;

    }
  }
}


//declare draw function where our sketch will live
function draw() {

//declare background and give parameters
  background('rgb(0, 0, 26)');

//declare mouse is pressed so when the mouse is pressed the background will generate a random color
  if ( mouseIsPressed ) {
         background( random(255), random(255), random(255) );


     } else {
         background('rgb(0, 0, 26)');

     }


// give parameters when the star is called
  for (let i = 0; i < stars.length; i++) {

    stars[i].starCheck(stars, i);
    stars[i].edgeCheck();
    stars[i].paths();
    stars[i].display();


  }
}





// * Star Class *//

//sets the STAR's class variables using constructor and specifying what to do
class Star {
  constructor (x, y, size) {
    this.color = 'pink';
    this.size = random(1, 50);
    this.rStar = this.size / 4;
    this.spotX = x;
    this.spotY = y;
    this.finiteX = random (-7, 7);
    this.finiteY = random(-7, 7);

  }

//sets what will be shown on the canvas
  display(){
//declare push and pop function to isolate this section
    push();
//give color to star stroke
    stroke(255, 10);
//give fill the parameter we set above
    fill(this.color);
//set the position of the star
    translate(this.spotX, this.spotY);
    ellipse(3, 3, this.size);
    pop();

  }


//sets the stars movement
  paths() {
    this.spotX += this.finiteX;
    this.spotY += this.finiteY;


  }


//this will check if the stars hit the borders of the canvas
  edgeCheck(){
    if (this.spotX + this.rStar >= width || this.spotX - this.rStar <= .1) {
      this.finiteX *= -.09;
//if the border is reached the star will change to this color
      this.color = 'rgb(230, 230, 255)';

    }

//this will check if the stars hit the borders of the canvas
    if (this.spotY + this.rStar >= height || this.spotY - this.rStar <= .1){
      this.finiteX *= -.09;
//if the border is reached the star will change to this color
      this.color = 'rgb(142, 257, 6)';


    }

  }



  starCheck(otherStars, myId) {

//this will allow the stars to touch for loops
    for (let s = 0; s < otherStars.length; s++) {
// check for stars touching if s!=myId, if not then it will skip
      if (s != myId) {
        let d = dist(this.spotX, this.spotY, otherStars[s].spotX, otherStars[s].spotY)
        let combinedR = this.rStar + otherStars[s].rStar;

        if (d <= combinedR) {
            this.finiteX *= -1.01;
            this.finiteY *= -1.01;
    //when touched the colors will flip back and forth
        if(this.color == 'rgb(186, 15, 145)') {
          this.color = 'rgb(16, 244, 231)';
        } else {
          this.color = 'rgb(186, 15, 145)';
        }


          }
        }
      }
    }
  }
