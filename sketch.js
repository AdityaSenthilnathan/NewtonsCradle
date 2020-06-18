var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	roof1 = new Roof(350,100, 100,20);
	roof2 = new Roof(380,100, 100,20);
	roof3 = new Roof(410,100, 100,20);
	roof4 = new Roof(440,100, 100,20);
	roof5 = new Roof(470,100, 100,20);

	bobObject1 = new Bob(360,300,20); 
	bobObject2 = new Bob(380,300,20);
	bobObject3 = new Bob(400,300,20);
	bobObject4 = new Bob(420,300,20);
	bobObject5 = new Bob(440,300,20);

	rope1 = new Rope(bobObject1.body, roof1.body, 0, 0);
	rope2 = new Rope(bobObject2.body, roof2.body, 0, 0);
	rope3 = new Rope(bobObject3.body, roof3.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof4.body, 0, 0);
	rope5 = new Rope(bobObject5.body, roof5.body, 0, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();



  if (keyIsDown(UP_ARROW)) {
	Matter.Body.setVelocity( bobObject1.body, {x: -10, y: 0});
	//Body.applyForce( bobObject1, {x: bobObject1.body.position.x, y: bobObject1.body.position.y}, {x: 10, y: 0});
  //Body.applyForce( ball, {x: ball. position.x, y: ball.position.y}, {x: 0.05, y: 0});
}
 

  drawSprites();
 
}









