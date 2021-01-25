const Engine = Matter.Engine   
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var particle=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
var particle
var wall
function setup() {
createCanvas(800,700);
engine=Engine.create()
world=engine.world
ground=new Ground(width/2,height,width,20)

for(var k=0;k<=width;k=k+80){
divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}   
for(var j=50;j<=width-10;j=j+50){
plinkos.push(new Plinko(j,175))
}
for(var j=75;j<=width;j=j+50){
plinkos.push(new Plinko(j,275))
}
for(var j=50;j<=width-10;j=j+50){
plinkos.push(new Plinko(j,375))
}







}
function draw() {
background(22,5,5);  
for(var i=0;i<plinkos.length;i=i+1){
plinkos[i].display()
}
if(frameCount%60===0){
Ball=new Particle(random(0,500),-10,10)   
particle.push(Ball)
}
for(var i=0;i<particle.length;i=i+1){
particle[i].display()
}
for(var i=0;i<divisions.length;i=i+1){
divisions[i].display()
}




Engine.update(engine)
drawSprites();
}