var apple, obstacle;
var ground;
var appleImg,rockImg,trashImg;
var rand;
var count = 0;

function preload(){
  appleImg = loadImage("apple-7.png");
  rockImg = loadImage("rock.png");
  trashImg = loadImage("trash.png");
}

function setup(){
  canvas = createCanvas(500,500);

  ground = createSprite(250,470,800,20);
  ground.shapeColor = "black";
  
  apple = createSprite(40,468,20,20);
  apple.addImage(appleImg);
  apple.scale = 0.2;
}


function draw(){
  background("#0000FF");
  text("Score: "+count,420,20);
  count = count+Math.round(frameCount/50);

  apple.collide(ground);

  if(keyDown("space") && apple.y>420){
    apple.velocityY = -11;
  }

  apple.velocityY = apple.velocityY+0.8;
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%90===0){
    obstacle = createSprite(510,450,50,50);
    obstacle.velocityX = -5;
    obstacle.scale = 0.35;
    rand = Math.round(random(1,2));
    switch(rand){
      case 1: obstacle.addImage(rockImg);
        break;
      case 2: obstacle.addImage(trashImg);
        break;
        default: break;
    }
    }
}
