var ground;
var ball;

function setup() {
  createCanvas(400,400);
  ground=createSprite(400,350,900,10);
  ground.shapeColor="white";
  ball=createSprite(80,315,50);
  ball.shapeColor="turquoise";
  ball.scale=0.5;
}

function draw() {
  background("black");  

  if(keyDown("space")){
    ball.velocityY=-12;
    restitution=1;
    //ball.scale=3;
    }
 ball.velocityY=ball.velocityY+0.8;
 //ball.velocityX=ball.velocity+0.8;
 ball.collide(ground);
 
 if(keyDown("DOWN_ARROW")){
   ball.velocityX=12;
   ball.scale=1;
 }

 ball.display();
 keyPressed();

  drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball.body.position,{x:-100,y:-100}); } 
}