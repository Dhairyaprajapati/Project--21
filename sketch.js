var astronaut




function preload(){
bg=loadImage("images/iss.png");
sleep=loadAnimation("images/sleep.png");
brush=loadAnimation("images/brush.png");
gym=loadAnimation("images/gym21.png","images/gym22.png");
eat=loadAnimation("images/eat1.png","eat2.png");
move=loadAnimation("move.png")
drink=loadAnimation("drink1.png","drink2.png")
}
function setup() {
  createCanvas(400, 400);
  background = createSprite(0,0,400,400);
  background.addImage(bg);
  background.scale = 2.5;
  

  background(0)
  stroke(white);
  fill(white)
  text("Instructions:",50,30)

 astronaut=createSprite(300,230)
astronaut.addAnimation("sleeping",sleep)
astronaut.scale=0.1;
}
function draw() {
  background(220);

if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }
    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }
if(keyDown("m")){
astronaut.addAnimation("moving",move);
astronaut.changeAnimation("moving");
astronaut.y=350;
astronaut.velocityX=3;
astronaut.velocityY=-3;
 }
}