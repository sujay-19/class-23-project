const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerbase,computerbase;
var player,computer;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerbase = new Playerbase(150,400,180,150)
   computerbase = new Playerbase(1000,400,180,150)
   player = new Player(150, playerbase.body.position.y - 153, 50, 180)
   computer = new Player(1000,playerbase.body.position.y - 153,50,180)

 }

function draw() {

  background("blue");

  Engine.update(engine);

  // Title
  fill("yellow");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    playerbase.display()
    computerbase.display()
    player.display()
    computer.display()
   //display Player and computerplayer


}
