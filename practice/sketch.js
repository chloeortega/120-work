function setup () {
  createCanvas(windowWidth, 800);
}

function draw() {
  background('rgb(6, 9, 20)');


  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  fill('rgb(230, 230, 255)')
  star(0, 0, 20, 60, 4);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}







let fallingStars = [];

function setup() {
    createCanvas(windowWidth, 900);
    let b = new Star(width/2, height/2, 10);
    fallingStars.push(b);
}

function mouseDragged() {
    let r = random(10, 50);
    let b = new Star(mouseX, mouseY, r);
    fallingStars.push(b);
}

function draw() {
    background('rgb(6, 9, 20)');
    for (let i = 0; i < fallingStars.length; i++) {
        fallingStars[i].move();
        fallingStars[i].show();
    }
}

class Star {
    constructor() {
      function star(x, y, radius1, radius2, npoints) {
        this.angle = TWO_PI / npoints;
        this.halfAngle = angle/2.0;
        beginShape();
        for (this.a = 0; this.a < TWO_PI; this.a += angle) {
          this.sx = this.x + cos(a) * radius2;
          this.sy = this.y + sin(a) * radius2;
          vertex(sx, sy);
          this.sx = this.x + cos(a+halfAngle) * radius1;
          this.sy = this.y + sin(a+halfAngle) * radius1;
          vertex(this.sx, this.sy);
        }
        endShape(CLOSE);
    }

  //  move() {
        //this.x = this.x + random(-3, 7);
        //this.y = this.y + random(-3, 7);
  //  }

    show() {
      translate(width*0.8, height*0.5);
      rotate(frameCount / -100.0);
      fill('rgb(230, 230, 255)')
      star(this.x, this.y, this.r * 2, 60, 4);
    }
}
