const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var DivisionHeight = 300;
function setup(){
    var canvas = createCanvas(800,480);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,470,1200,20);
    for (var k = 0; k<=width; k = k + 80)
    {
        divisions.push(new Division(k,height-DivisionHeight/2,10,DivisionHeight));
    }
    Engine.run(engine);
}
function draw()
{
    background('Fuchsia');
    Engine.update(engine);
    
    ground.display();
}