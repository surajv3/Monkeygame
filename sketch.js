
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime =0
var ground
var score

function preload(){
  
  
  monkey_running =            loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 600);

monkey = createSprite(50,520,15,15)
monkey.addImage("monkeyRunning", monkey_running )
monkey.scale = 0.2

ground = createSprite(400,590,900,20);
ground.velocityX = -4 
ground.x = ground.width/2;
console.log(ground.x)

  
foodGroup = new Group()
obstacleGroup = new Group()

}


function draw() {
  
  background("white  ");
 if(keyDown("space")&& monkey.y >= 500) {
  monkey.velocityY = -15;
        
    }
 
food()
obstacle()
  
stroke("white")
textSize(20)
fill("white")
text("Score: "+score, 100,50)

stroke("black");
textSize(20);
fill("white");
survivalTime = Math.round(frameCount/20);
text("Survivaltime: "+survivalTime, 100,50);  
  
  
monkey.velocityY = monkey.velocityY + 0.5
  
monkey.collide(ground)
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
drawSprites()  
}

function food() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var food = createSprite(600,200,40,10);
    food.y = Math.round(random(300,500));
    food.addImage(bananaImage);
    food.scale = 0.1 ;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
    
    
    foodGroup.add(food);
  }
}


function obstacle() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,585,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    
    obstacleGroup.add(obstacle);
  }
}

