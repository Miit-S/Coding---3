  var trex_running;
  var edges;
  var groundImage;
  var cloud;
  var cactus1;
  var cactus2;
  var cactus3;
  var cactus4;
  var cactus5;
  var cactus6;
  var score=0; 
  var cloudGroup, cactusGroup; 
  var gameState="play"
  



  function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
  groundImage=loadImage("ground2.png")
  cloudImage=loadImage("cloud.png")
  cactus1=loadImage("obstacle1.png")
  cactus2=loadImage("obstacle2.png")
  cactus3=loadImage("obstacle3.png")
  cactus4=loadImage("obstacle4.png")
  cactus5=loadImage("obstacle5.png")
  cactus6=loadImage("obstacle6.png")
  }

  function setup() {
  createCanvas(600,200);
  trex=createSprite(150, 130, 30, 75);
  trex.addAnimation("running",trex_running)
  trex.scale=0.7;
  ground=createSprite(300,180,600,10);
  ground.addImage("ground",groundImage);
  ground1=createSprite(300,190,600,10);
  ground1.visible=false;  
  console.log("inside setup") 
console.log(ground.depth)


  cloudGroup = new Group();
  cactusGroup = new Group();

  var test = Math.round(random(1,6));
  console.log("test"+test);
  }

  function draw() {
  background("white"); 
  
  if(gameState === "play"){
  
    if (keyDown("space") && trex.y>150){ 
      trex.velocityY=-12
   }
  trex.velocityY=trex.velocityY+0.8;
  edges=createEdgeSprites()
  ground.velocityX=-2;
  if(ground.x<0){
    ground.x=300;
    }
    createcactus();
    createClouds();
    score=Math.round(score+frameCount/125);
    
    if(trex.isTouching(cactusGroup)){
     gameState="end"
      text("Game Over",200,200);

    }
  }
  else if (gameState === "end"){
  ground.velocityX=0;
  console.log("gamestate==end")
  }
 
  trex.collide(ground1);
  
  drawSprites();
  text("Score: "+ score , 400,100);
  
  }
  function createClouds(){
  if (frameCount %100==0){
  console.log(frameCount);
  cloud = createSprite(500, 80, 40,10);
  cloud.velocityX = -2;
  cloud.addImage(cloudImage); 
  cloud.scale=0.6;
  cloud.y=Math.round(random(20,80)); 
  
  trex.depth=cloud.depth;
  trex.depth=trex.depth+1;
  cloudGroup.add(cloud)

  console.log("trex.depth :"+trex.depth );
  console.log("cloud.depth :"+cloud.depth);
  }
  }

  function createcactus(){
  if (frameCount %150==0){
  cactus = createSprite(500,170,10,40);
  cactus.velocityX=-5;
  cactus.scale=0.6;

  var test=Math.round(random(1,6));
  cactusGroup.add(cactus)
  


  switch(test){
  case 1:cactus.addImage(cactus1);
  break;
  case 2:cactus.addImage(cactus2);
  break;
  case 3:cactus.addImage(cactus3);
  break;
  case 4:cactus.addImage(cactus4);
  break;
  case 5:cactus.addImage(cactus5);
  break;
  case 6:cactus.addImage(cactus6);
  break; 
  default:("obstacle1.png, obstacle2.png, obstacle3.png, obstacle4.png, obstacle5.png,  obstacle6.png");
  break;

  }
  }
  }


//spritename.addImage(variablename from preload function)