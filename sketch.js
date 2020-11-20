
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var tree, ground, stone, boy, boy_Image
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;

function preload() {
boy_Image = loadImage("boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//creating boy sprite
		boy = createSprite(200,610,20,20);
		boy.addImage("boyImage", boy_Image);
		boy.scale = 0.08;

	//Create the Bodies Here.
		tree = new Tree(650,450,350,560);
		ground = new Ground(0,680,1600,50);
		mango1 = new Mango(680,330,50);
		mango2 = new Mango(710,360,50);
		mango3 = new Mango(760,390,50);
		mango4 = new Mango(800,380,50);
		mango5 = new Mango(650,400,50);
		mango6 = new Mango(600,400,50);
		mango7 = new Mango(620,300,50);
		mango8 = new Mango(600,250,50);
		mango9 = new Mango(530,410,50);
		mango10 = new Mango(550,350,50);
		mango11 = new Mango(760,300,50);
		mango12 = new Mango(700,250,50);
		stone = new Stone(150,550,45);
		elastic = new Elastic(stone.body,{x:150,y:550});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
    background("pink");

	//Display the Bodies Here.
		tree.display();
		ground.display();
		mango1.display();
		mango2.display();
		mango3.display();
		mango4.display();
		mango5.display();
		mango6.display();
		mango7.display();
		mango8.display();
		mango9.display();
		mango10.display();
		mango11.display();
		mango12.display();
		stone.display();
		elastic.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);
	detectCollision(stone,mango11);
	detectCollision(stone,mango12);
  
    drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    elastic.fly();
}

function keyPressed () {
	if (keyCode===32) {
		Matter.Body.setPosition(stone.body,{x:150,y:550});
		elastic.attach(stone.body);
	}

}

function detectCollision (lstone,lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if (distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
}


