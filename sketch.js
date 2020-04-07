//create gamearea
function setup() {
  createCanvas(400, 400);
 }

function draw() {
  background(220);


  //create the robot   
 
   textSize(30);
   //text("chitti robot in action",100,50);
   
  
  //body
     rect(150,200,100,100);
  //head
  ellipse(200,160,80,80);
  //arms
  rect(130,230,20,10)
  rect(250,230,20,10);
  //legs
  rect(170,300,10,50);
  rect(220,300,10,50);
  
  //hand
  rect(130,240,10,50);
  rect(260,240,10,50);
  
  fill("white")
  
  //face
  ellipse(200,160,60,60);
  fill("yellow");
  
  //eyes
  rect(180,150,10,10);
  rect(210,150,10,10);
  
  //inner body
  rect(170,220,60,60);
  //hat
  triangle(170, 125, 198, 70, 226, 125);
  fill("orange")
  
//behavior of robot if mouseIsPressed  
if (mouseIsPressed){
   fill("red")
   
 

                  
  textSize(32);
     text("Robomix in action",80,50);
  //text('HALLOWEEN:)',70, 30);
  fill(0, 102, 153);
  
  fill("green");
  //increase the size of head
  ellipse(200,160,100,100);
  
  fill("red")
  //create hat
  triangle(170, 115, 198, 60, 226, 115);
  
  //change the color of the arms
  rect(130,240,10,50);
  rect(260,240,10,50);
  
  //increase the height of the legs
  rect(220,300,10,80);
  rect(170,300,10,80);
  
  fill("blue")
  //change eyes color and size
  rect(175,150,20,20);
  rect(205,150,20,20);
  
  
fill ("red");
 
}
}