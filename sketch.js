
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject = new ground(width / 2, 670, width, 20);
	dustbinObj = new dustbin(1200, 650);
	leftSide = new dustbin(550, 620, 20, 100)
	bottom = new dustbin(610, 660, 100, 20)
	rightSide = new dustbin(670, 620, 20, 100)
	paper = newPaper(100, 600, 10)
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background('lightBlue');
	Engine.update(engine);
	paper.display();
	ground.display();
	leftSide.display();
	bottom.display();
	rightSide.display();

	groundObject.display();
	dustbinObj.display();

	drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.body.applyForce(paper.body, paper.body.position, { x: 15, y: -15 })

	}

}









