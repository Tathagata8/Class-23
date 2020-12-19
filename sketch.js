const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var myengine,myworld;
var box1, ground1;


function setup() {
  createCanvas(400,400);
 
  myengine = Engine.create();
  myworld = myengine.world;

  box1 = new Box(200,300,50,50);
  ground1 = new Ground(200,height,400,20);
  box2 = new Box(240,100,50,100);
  
}


function draw() {
  background(0);  

    Engine.update(myengine);
    box1.display();
    ground1.display();
    box2.display();
    console.log(box1.body.position.x);
    console.log(box2.body.angle);
   
}