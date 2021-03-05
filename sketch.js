function setup() {
  createCanvas(800,400);
  a= createSprite(400, 200, 50, 50);
  b=createSprite(600,200,50,30);
}

function draw() {
  background(255,255,255); 
  a.x=World.mouseX
  a.y=World.mouseY
  console.log(a.x-b.x) 
  if(b.x-a.x<(a.width+b.width)/2&& a.x-b.x<(a.width+b.width)/2){ 
        a.shapeColor="green";
    b.shapeColor="green";
   
}
else{
  a.shapeColor="red";
  b.shapeColor="red";

}
  drawSprites();
  
}