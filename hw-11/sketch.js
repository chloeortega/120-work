//declare name of the array I will use for my main object
var stars =[];

// declare setup function
function setup() {
// declare create canvas and frame rate and give their parameters
  createCanvas(windowWidth, 900);
  frameRate(10);
  }

//declare mouse pressed function so when mouse is pressed it will enable a new object at random parameters specified
  function mousePressed() {
    let starRandom = random (2, 30);
    let starNew = new Star(mouseX, mouseY, starRandom);
    stars.push(starNew);

  }


//declare draw function where sketch will exist
function draw(){
//declare background and specify it's parameters
  background('rgb(179, 0, 71)');
//call for the new star using the class Star using the array star I declared at the beginning
for (var i = 3; i < stars.length; i++){
  stars[i].paths();
  stars[i].display();
  }
}

//sets the STAR's class variables using constructor and specifying what to do
class Star {
  constructor(x, y, starRandom) {
  this.x = x;
  this.y = y;
  this.r = starRandom;
}

//sets the stars path moving in jagged motions across the canvas
  paths() {
    this.x = this.x - random(-2, 7);
    this.y = this.y + random (-1, 4);

    if (this.x >= width || this.x <=0 ) {
        this.x = -1 * this.x;
    }
    if (this.y >= height || this.y <= 0 ) {
        this.y = -1 * this.y*800;
    }

  }

//sets what will be shown on the canvas
  display() {
    stroke(255);
    fill(0, 255 , random(155));
    ellipse(this.x, this.y, this.r * 3 );
  }
}
