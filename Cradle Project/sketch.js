

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg=loadImage("green.jpg")
}

function setup() {
	//canvas should be 841, 580
	createCanvas(841, 580);
	engine = Engine.create();
	world = engine.world;

	//rod is created
	l1 = new Rod(420,60);
	l2 = new Rod(420,560);	
	
	//balls are created
	b1 = new Ball(280.5,380);
	b2 = new Ball(350.5,380);
	b3 = new Ball(420.5,380);
	b4 = new Ball(490.5,380);
	b5 = new Ball(560.5,380);

	//creating ropes
	//r1 =new Rope(b1.body,l1.body,-Ball.Diameter*2,0)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(bg);

  l1.display();
  l2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  drawSprites();
}