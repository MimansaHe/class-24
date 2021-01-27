const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myEngine,myWorld;
var box1,box2;
var ground1;

function setup(){ 
createCanvas(1000,800); 
 myEngine=Engine.create();
 myWorld=myEngine.world; 
 AngryB = new Bird(100,400);
box1=new Box(600,670,50,50); 
box2=new Box(800,670,50,50);
box3=new Box(600,590,50,50);
box4=new Box(800,590,50,50);
box5 = new Box(700,510,50,50);
pig1=new pigs(700,670);
pig2=new pigs(700,590);
 ground1 = new ground(500,700,1000,30);
 log1 =new logs (700,650,300,PI/2);
 log2 =new logs (700,570,300,PI/2);
 log3 = new logs(600,500,150,PI/7);
 log4 = new logs(750,500,150,-PI/7);
console.log(box1);
 }
  function draw(){ 
background("black"); 
Engine.update(myEngine);
AngryB.display();
box1.display(); 
box2.display();
  ground1.display();
  pig1.display();
log1.display();
  box3.display();
  box4.display();
  log2.display();
  pig2.display();
  box5.display();
  log3.display();
  log4.display();
} 