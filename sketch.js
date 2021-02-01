
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4,ground5;
var paper;
var log1,log2,log3

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  //Create the Bodies Here.
  paper=new Paper(100,300,10)
  ground1=new Ground(width/2,350,width,10)
 ground2=new Ground(width/2,340,width,10);
  
    
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  paper.display()
  ground2.display();

  drawSprites();
 
}



