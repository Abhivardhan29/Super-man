const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  boxA1 = new Box(600, 100, 70, 70);
  boxA2 = new Box(600, 100, 70, 70);
  boxA3 = new Box(900, 100, 70, 70);
  boxA4 = new Box(900, 100, 70, 70);

  boxB1 = new Box(600, 100, 70, 70);
  boxB2 = new Box(600, 100, 70, 70);
  boxB3 = new Box(900, 100, 70, 70);
  boxB4 = new Box(900, 100, 70, 70);

  boxC1 = new Box(750, 100, 70, 70);
  boxC2 = new Box(750, 100, 70, 70);
  boxC3 = new Box(750, 100, 70, 70);
  boxC4 = new Box(750, 100, 70, 70);
  boxC5 = new Box(750, 100, 70, 70);
  boxC6 = new Box(750, 100, 70, 70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  boxA1.display();
  boxA2.display();
  boxA3.display();
  boxA4.display()
  
  boxB1.display();
  boxB2.display();
  boxB3.display();
  boxB4.display()
  
  boxC1.display();
  boxC2.display();
  boxC3.display();
  boxC4.display();
  boxC5.display();
  boxC6.display();
 
  hero.display();
  rope.display();
  monster.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  }
  