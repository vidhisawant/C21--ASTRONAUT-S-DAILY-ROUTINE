var bg, sleep, brush, gym, eat, move, bath;
var astronaut;

//Game States
var START=2;
var PLAY=1;
var gameState=START;

function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  gym = loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png");
  eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
  move = loadAnimation("move1.png","move1.png");
  bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
}

function setup() {
  createCanvas(600, 500);

  //creating the astronaut
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;


}

function draw() {
  background(bg);
  drawSprites();
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  
    //welcome text
  textSize(15);
  fill("white");
  text("Press d for Drinking",50,35);
  text("Up Arrow for Brushing",50,50);
  text("Down Arrow for Gym",50,65);
  text("Left Arrow for Eating",50,80);
  text("Right Arrow for Bathing",50,95);
  text("Press m for Moving",50,110);
  text("Press s for Sleeping",50,125);

  //up key pressed - brushing
  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  }
  //down key pressed - Gym
  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  }
  //right key pressed - bathing
  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  }
  //left key pressed - eating
  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  }
  //m key pressed - moving
  if(keyDown("m")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 300;
    astronaut.velocityX = 1;
    astronaut.velcoityY = 1;
  }
  //d key pressed - brushing
  if(keyDown("d")) {
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  }
  //s key pressed - sleeping
  if(keyDown("s")) {
    astronaut.addAnimation("sleeping", sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velcoityY = 0;
  } 
}