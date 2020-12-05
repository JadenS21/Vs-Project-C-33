const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinko =[];
var ground;
var ball1 =[];
var ball2 =[];
var ball3 =[];
var ball4 =[];
var wall1,wall2,wall3,wall4,wall5,wall6;

function setup() {
  var canvas = createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);
  wall1 = new Ground(0,500,20,200);
  wall2 = new Ground(100,500,20,200);
  wall3 = new Ground(200,500,20,200);
  wall4 = new Ground(300,500,20,200);
  wall5 = new Ground(400,500,20,200);
  wall6 = new Ground(500,500,20,200);
  
  ball1 = new Ball(60,100,20);
  ball2 = new Ball(90,150,20);
  ball3 = new Ball(60,200,20);
  ball4 = new Ball(90,250,20);
  
}

function draw() {
  background(100);
  Engine.update(engine);
  
  //plinko.display();
  ground.display();
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
    
}