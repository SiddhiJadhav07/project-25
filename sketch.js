
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball= new Ball(200,450,20)
	dustbin= new Dustbin(700,470)
	ground= new Ground(500,490,1000,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
 ball.display();
 dustbin.display();
 ground.display();
}

function keyPressed() {
	 if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50});
 }
 }

