
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin,ground,paper,binp1,binp1,binp3;

function preload(){

	paperimg = loadImage("paper.png");
	binimg = loadImage("bin.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

groundop = {

isStatic: true
}
	ground = Bodies.rectangle(600,580,width,10,groundop);
	World.add(world,ground);

paperop = {

	restitution: 0.3,
	friction: 0.5,
	density:1.2
}
	paper = Bodies.circle(100,100,20,paperop)
	World.add(world,paper);

binop = {

	isStatic: true
}
binp1 = Bodies.rectangle(920,467.5,20,215,binop);
binp2 = Bodies.rectangle(1090,467.5,20,215,binop);
binp3 = Bodies.rectangle(1000,564,200,20,binop)
World.add(world,binp1);
World.add(world,binp2);
World.add(world,binp3);

	Engine.run(engine);
}

function draw() {
  background(200);
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,width,10);
  imageMode(CENTER);
  image(paperimg,paper.position.x,paper.position.y,50,50);
  image(binimg,1000,470,200,205);

/* 	fill("white");
    beginShape();
	vertex(900, 360);
	vertex(920, 360);
	vertex(920, 555);
	vertex(1080, 555);
	vertex(1080, 360);
	vertex(1100, 360);
	vertex(1100, 575);
	vertex(900, 575);
	endShape(CLOSE); */

  if(keyDown("up")){

	  Matter.Body.applyForce(paper,paper.position,{x:15,y:-20});
  }
}



