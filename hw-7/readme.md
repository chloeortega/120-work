## Chloe Ortega, Group C

[Live Sketch Link](Your Live Link)


# *HW 7 | Describe then Alter the Bouncing Ball*

## Introduction

During this weeks homework cycle we were tasked with analyzing given code and describing in detail what was happening then altering that code in order to make it interesting to us. This week we focused on program logic and program flow which introduced us to new topics such as *Boolean*, *if Statements*, *Else If Statements*, and *Comparison Operators*.

## Description of What the Original Code is Doing

In short, the original code is allowing an ellipse to move across the the canvas at an angle while staying constrained in parameters and allows the viewer to interact with the movement of the ellipse using their mouse button and can change speed depending on which side of the canvas you click on. Now to break down the code:

**Here the global variables are being defined and the changing the delta or scale values will allow you to change the direction of the ball**

  `let ball = {};
  ball.width = 40;
  ball.x = 10;
  ball.y = 10;
  ball.delta_x = 1;
  ball.delta_y = 1;
  ball.scale_x = 1;
  ball.scale_y = 1;`


**The code is declaring the function set up and declaring the size of the canvas as well as the back ground color**

`function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}`


**The code here is declaring the draw function where the sketch will be**

`function draw() { `

**The code here is defining the movement of the ball object.**

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

**The beginning if statement states that `ball.x` will stay within the width of the canvas using the symbols `>=`, it also states that the ball will return after reaching the end of the width of the canvas by reversing the direction using `ball.delta_x = -1` and multiplying that by `ball.delta_x`**

    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }


**The second If statement states that `ball.y` will stay within the height of the canvas using the symbols `>=`, it also states that the ball will return after reaching the end of the height of the canvas by reversing the direction using `ball.delta_y = -1` and multiplying that by `ball.delta_y`**

    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }


**This part of the code is defining the color of the fill and giving the values of the ellipse using the global variables declared in the beginning**

    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);


**In the last part of the code the `mousePressed()` function is declared which states that when mouse is clicked the variables `ball.scale_x` and `ball.scale_y`, using the `map()` function,  will change and use the new parameters. For `ball.scale_x` the `mouseX` is the value that will be converted, the value 0 changes to the width of the canvas, and the ball speed will change between 0.5 - 10. For `ball.scale_y` the `mouseY` is the value that will be converted, the value changes from 0 to the height of the canvas and the ball speed will change between 0.5 -10.**


     function mousePressed() {
        ball.scale_x = map(mouseX, 0, width, 0.5, 10);
        ball.scale_y = map(mouseY, 0, height, 0.5, 10);


## How did you alter the sketch?

I altered my sketch in that I changed the stroke color, transparency, fill color, and size of the ellipse so that at each loop there would be a random color generated using the `random()` function. In addition to the `mousePressed()` function, I added an additional `mouseIsPressed` variable and `random()` function so when the mouse is pressed the background will generate a new background color.


## Issues and Progress

This week I didn't run into issues concerning the material, the only issue I ran into was not having enough adequate time to play with the sketch due to personal matters, in next weeks work I will be sure to give more time to my assignment. In the future if I do run into any issues concerning the material I will be sure to make use of my time and make use of the class issues forum. 
