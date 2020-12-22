var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(5, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.velocityX = 4;

	helicopterSprite=createSprite(5, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	helicopterSprite.velocityX = 4;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(5 , 200 , 5 , {restitution: 1.0 , isStatic:true});
	World.add(world, packageBody);
	packageBody.velocityX = 4;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x = helicopterSprite.x ;
  //packageSprite.y = helicopterSprite.y ;

  //packageSprite.x= packageBody.position.x  ;
  packageSprite.y= packageBody.position.y  ;

  if (helicopterSprite.x >= 900){
	  helicopterSprite.x=5;
  }

  //To draw the sprites
  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}




