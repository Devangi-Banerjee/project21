//to create variables
var bullet , wall;
var speed , weight , thickness;

function setup() 
{

  //to create canvas
  createCanvas(1600,400);
  
  //to create a bullet 
  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor= color(255);

  //to create wall
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(230,230,230)
 
  // to have random speed , thickness and weight
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
}

function draw() {
  background("black");  
  
  bullet.velocityX = speed;
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage= 0.5* weight* speed* speed/(thickness *thickness *thickness);
  }
  if(damage > 10)
  {
    wall.shapeColor = color(255,0,0);
  }
 
  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }



  drawSprites();
}

function hasCollided(lbullet , lwall)
{
  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }

return false;

}