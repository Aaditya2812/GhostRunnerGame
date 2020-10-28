var ghost,ghostImage;

var tower,towerImage,doorImage,climberImage;

var sound;

var play=1;
var end=0;
var gameState=1;


function preload() {
  ghostImage=loadImage("ghost-standing.png");
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  sound=loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  
 sound.loop()
  
  ghost=createSprite(250,250);
  ghost.addImage(ghostImage);
  ghost.scale=0.4;
  
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=1;
  // tower.y=tower.height/2;
  
  ghost.depth=tower.depth;
  ghost.depth=ghost.depth+1;
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleGroup=new Group();
}

function draw() {
   background(0);  
  
   
  if(gameState===play){
  
              
  if(tower.y>600){
    tower.y=tower.height/2;
  }
  
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+1;
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-5;
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+5;
  }
  
  doors();
  
  
  if(ghost.isTouching(climbersGroup)){
     ghost.velocityY=0;
    
  }  
    if(invisibleGroup.isTouching(ghost) || ghost.y > 600){ 
      
      
      ghost.destroy();
      gameState = end;
    }

drawSprites();
  }
  
  if(gameState===end){
    
    stroke("yellow");
    fill("yellow");
    textSize(35);
    text("GAME OVER",180,300)
  }
  
  
}

function doors(){
  if(frameCount%240===0){
  var doors=createSprite(200,100,10,10);
    
    var climbers=createSprite(200,165,10,10)
    
   var invisibleGround=createSprite(200,155,100,5);
    invisibleGround.width=climber.width;
    
    invisibleGround.height=2;
    
    doors.x=Math.round(random(120,400));
    
    climbers.x=doors.x;
    
    invisibleGround.x=doors.x;
    
    doors.addImage(doorImage);
    
       climbers.addImage(climberImage);
    
    
    
    invisibleGround.velocityY=1
    
     climbers.velocityY=1
    
    doors.velocityY=1
    
    ghost.depth=doors.depth;
    
    ghost.depth=ghost.depth+1;
    
    doors.lifetime=800;
    
    ghost.lifetime=800;
    
    climbers.lifetime=800;
    
  //visibleGround.visible=false;
     invisibleGround.debug=true;
  
    doorsGroup.add(doors);
   
    climbersGroup.add(climbers);
    
    invisibleGroup.add(invisibleGround);
}
}
