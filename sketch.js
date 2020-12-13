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

  for(var i = 0;i <= width-60;i = i + 80){
    ball1.push(new Ball(i,200))
  }
  for(var j = 0;j <= width;j = j + 80){
    ball2.push(new Ball(j,200))
  }
  for(var k = 0;k <= width-60;k = k + 80){
    ball3.push(new Ball(k,200))
  }
  for(var l = 0;l <= width;l = l + 80){
    ball4.push(new Ball(l,200))
  }
  
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