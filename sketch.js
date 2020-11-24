var r1 , r2


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  r1 = createSprite(200,200,100,20);
  r2 = createSprite(200,300,100,20);
  
}
function color1 (){

  if (r1.x - r2.x < r1.width/2 + r2.width/2 && r2.x - r1.x < r1.width/2 + r2.width/2){
    r1.shapeColor = "red"
    r2.shapeColor = "red"
  }
  if (r1.y - r2.y < r1.height/2 + r2.height/2 && r2.y - r1.y < r1.height/2 + r2.height/2){
    r1.shapeColor = "blue"
    r2.shapeColor = "blue"
  }
}
function draw() {
  background(255,255,255);
  console.log(r2.x-r1.x);
  r2.x = World.mouseX ; 
  r2.y = World.mouseY ;   
  r1.shapeColor = "green";
  r2.shapeColor = "green"; 

 color1();

  drawSprites();
}