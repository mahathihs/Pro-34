const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var bgImg,monsterImg1,monsterImg2;
var block1, block2, block3,block4,block5,block7,blcok8,block9,block10,block11,blcok12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block15,block26;

function preload(){
//preload the images here
bgImg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);

  engine=Engine.create();
  world= engine.world;

  ground=new Ground(400,650,2500,20);
  roof=new Ground(100,50,50,50);
  hero1=new Hero(250,450,400);
  monster=new Monster(1550,450,350,350);

  hero1Diameter=200;
  flyrope=new Fly(hero1.body,roof.body,hero1Diameter,0);

  block1=new Block(600,100,70,70);
  block2=new Block(900,100,70,70);
  block3=new Block(900,100,70,70);
  block3=new Block(900,100,70,70);
  block4=new Block(900,100,70,70);
  block5=new Block(900,100,70,70);
  block6=new Block(900,100,70,70);
  block7=new Block(800,100,70,70);
  block8=new Block(800,100,70,70);
  block9=new Block(800,100,70,70);
  block10=new Block(800,100,70,70);
  block11=new Block(800,100,70,70);
  block12=new Block(800,100,70,70);
  block13=new Block(800,100,70,70);
  block14=new Block(800,100,70,70);
  block15=new Block(700,100,70,70);
  block16=new Block(700,100,70,70);
  block17=new Block(700,100,70,70);
  block18=new Block(700,100,70,70);
  block19=new Block(700,100,70,70);
  block20=new Block(700,100,70,70);
  block21=new Block(600,100,70,70);
  block22=new Block(600,100,70,70);
  block23=new Block(600,100,70,70);
  block24=new Block(600,100,70,70);
  block25=new Block(600,100,70,70);
  block26=new Block(600,100,70,70);
}
  function draw(){
  background(bgImg);
  Engine.update(engine);

  ground.display();
  hero1.display();
  roof.display();
  flyrope.display();
  monster.display();

  block1.display();
  block3.display();
  block5.display();
  block7.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX , y:mouseY});
};