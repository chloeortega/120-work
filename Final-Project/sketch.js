// Define global variables and array
var song;
var amp;
var stars = [];
var moon = 0;
var video;
var starImage;


// Declare preload function to play song and video
// Load the image of the star, use hide function to load video on the canvas
function preload(){
  song = loadSound("dream.mp3");
  video = createVideo("dancers.mp4");
  starImage = loadImage("starshape.png")
  video.hide();
}


// Declare setup function for Final
function setup() {


// Declare create canvas function and give parameters
createCanvas( windowWidth, windowHeight );
// Set parameters for song to play, set volume, and amplitude
  song.play();
  song.setVolume(0.04);
  amp = new p5.Amplitude();
// Set parameters for video to play and loop video continously
  video.loop();
  video.play();

// Use function to indicate how many stars will be displayed
  createStars(65);
}



// Declare draw function where my sketch will show
function draw() {
// Declare background function
background('rgb( 0, 0, 0 )');
// Give parameters so the video will be resized and displayed at a specified position
image(video, windowWidth - 950, 550, 384, 216);



// Declare push and pop function to isolate the ellipse's code
push();
// Declare noStroke, fill, and ellipse function to make moon
  noStroke() ;
  fill( 'rgb( 195, 197, 201 )' ) ;
  ellipse( moon, 0, 400, 400 ) ;
pop();


// Setting parameters for the song's amplitude, and how the stars will change
var vol = amp.getLevel();
var starGrowth = map(vol, 0, 0.5, 25, 200)



// Draw each star in the array.
// s is star object
stars.forEach(function(s) {


// Setting the parameters for speed of stars and make stars regenerate at random positions
  s.y += s.speed;
  if(s.y >= windowHeight) {
    s.x = windowWidth * Math.random();
    s.y = windowHeight * Math.random() - windowHeight;
  }

// Declare star function to indicate star position and star size
  drawStar(s.x, s.y, starGrowth);
});

}

// Giving parameters to the draw star function
function drawStar(x, y, size) {
  image(starImage, x, y, size, size)
}



// Create function to be able to specify how many stars I want to show
// Use push function to move them and change the speed of the stars falling at random
function createStars(num) {
  for(var i = 0; i < num; i++) {
    stars.push({
      x: windowWidth * Math.random(),
      y: windowHeight * Math.random() - windowHeight,
      speed: Math.random()
    });
  }
}
