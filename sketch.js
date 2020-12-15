var ball1, ball2, ball3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1= new Ball(100,100,10);
	ball2= new Ball(200,100,10);
	ball3= new Ball(300,100,10);
	ball4= new Ball(400,100,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  ball2.display();
  ball2.display();
  ball3.display();
  drawSprites();
 
}



