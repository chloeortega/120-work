
//DEFINING GLOBAL VARIABLES

let ball = {};
ball.width = 60;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;



//Declaring set up function, create canvas and background then defining their parameters
function setup() {
    createCanvas(windowWidth, 800);
    background('rgb(255, 153, 153)');


}


// Declare draw function
function draw() {



    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }


    // Defining the stroke and fill funciton for the ellipse 
    stroke('rgb(204, 255, 255)');
    fill(random(200), random(200), random(200), 50);
    // Using global variables to define parameters in the ellipse function
    ellipse(ball.x, ball.y, ball.width, ball.width);





}

// Decalre mouse pressed function
function mousePressed() {
  // Define new parameters using the map function
    ball.scale_x = map(mouseX, 0, width, 0.5, 20);
    ball.scale_y = map(mouseY, 0, height, 0.5, 20);

// Declare mouse is pressed function
    if ( mouseIsPressed ) {
           background( random(255), random(255), random(255) );


       } else {
           background('rgb(255, 153, 153)');

       }

}
