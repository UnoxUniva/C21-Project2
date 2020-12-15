var wallsprite, thickness
var bulletsprite, speed, weight



function setup() {
  createCanvas(1600,400)

  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  wallsprite=createSprite(1200,200,thickness,height/2)
  wallsprite.shapeColor=color(80,80,80)

  bulletsprite=createSprite(200,200,30,10)
  bulletsprite.velocityX=speed
  
}

function draw() {
  background(255,255,220);  
  
  
  if(hasCollided(bulletsprite,wallsprite)){
    bulletsprite.x = wallsprite.x - (wallsprite.width/2+bulletsprite.width/2)
    bulletsprite.velocityX=-0
    var damage=0.5 * weight* speed* speed/(thickness*thickness*thickness)
    
    if(damage>10){
      wallsprite.shapeColor=color(255,0,0)
    }

    if(damage<10){
      wallsprite.shapeColor=color(0,255,0)
    }
    

  }
  
  drawSprites();
}

function hasCollided(bullet,wall){

  var bulletRightEdge,wallLeftEdge
  bulletRightEdge=bullet.x + bullet.width
  wallLeftEdge=wall.x

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}