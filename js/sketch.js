bodycolor = {r: 255, g:0, b:100};
handlecolor = {r: 150, g:75, b:0};
havewindow = true; windowwidth = 1; windowheight = 1;  windowshape = 0;
havecross = true;
havelock = true;
isdouble = true;
//window;

function setup() {
 // put setup code here
  textOutput();

  createCanvas(400, 500, WEBGL);

  //angleMode(DEGREES);

  //window = buildGeometry();
    //let v0 = createVector(-40, 0, 0);
    //let v1 = createVector(0, -40, 0);
    //let v2 = createVector(40, 0, 0);
    //window.vertices = [v0, v1, v2];

}

function draw() {
  // put drawing code here
  background(220);
  orbitControl();

  if(isdouble == false){
    drawDoor(false);
  }
  else{
    translate(-50,0,0);
    drawDoor(true);
    scale(-1, 1);
    translate(-100,0,0);
    drawDoor(false);
    scale(-1, 1);
    translate(150,0,3);
  }
  
  

}

function drawDoor(issecond){
  fill(bodycolor.r, bodycolor.g, bodycolor.b); //body
  box(100,300,10);
  //resetMatrix();

  //fill(100, 100, 100);
  //circle(100,100,50);

  fill(handlecolor.r, handlecolor.g, handlecolor.b); //handle
  translate(30,0,15);
  sphere(10,6,6);
  translate(0,0,-30);
  sphere(10,6,6);

  translate(0,8,10);    box(12,25,2);
  translate(0,0,10);
  box(12,25,2);    

  translate(0,-8,-10); translate(0,0,-10); translate(0,0,30); translate(-30,0,-15);

  if(havelock && issecond == false){
     fill(handlecolor.r, handlecolor.g, handlecolor.b);
    translate(30,40,5);
    box(10,20,2);
    fill(20,20,20);
    translate(0,0,2);
    circle(0,-4,8);
    triangle(0,-3,4,8,-4,8)
    translate(-30,-40,-7);

     fill(handlecolor.r, handlecolor.g, handlecolor.b);
    translate(30,40,-5);
    box(10,20,2);
    fill(20,20,20);
    translate(0,0,-2);
    circle(0,-4,8);
    triangle(0,-3,4,8,-4,8)
    translate(-30,-40,7);
  }

  translate(0,0,7.5); //window
  if(havewindow){
    fill(240, 240, 240);
    switch (windowshape){
      case 0: //circle window
        circle(0,-70,50*windowwidth);
        translate(0,0,-15);  
        circle(0,-70,50*windowwidth);
        translate(0,0,15);
        break;
      case 1: //rectangle window
        rectMode(CENTER);
        rect(0,-70,50*windowwidth,50*windowheight);
        translate(0,0,-15);  
        circle(0,-70,50*windowwidth,50*windowheight);
        rectMode(CORNER);
        translate(0,0,15);  
        break;
        
    }
  }
  translate(0,0,-7.5);

  translate(0,0,10); //window cross
  if(havewindow && havecross){
    rectMode(CENTER);
    noStroke();        
    fill(bodycolor.r, bodycolor.g, bodycolor.b);
    rect(0,-70,10,70);
    rect(0,-70,70,10);

    translate(0,0,-20);   
    rect(0,-70,10,70);
    rect(0,-70,70,10);
    stroke(10,10,10);   
    translate(0,0,20); 
    rectMode(CORNER);
  }
  translate(0,0,-10);

}

function generateDoor(){

  bodycolor.r = random(0,255); bodycolor.g = random(0,255); bodycolor.b = random(0,255);
  handlecolor.r = random(0,255); handlecolor.g = random(0,255); handlecolor.b = random(0,255);
  if(random(0,2) < 1.3){
    havewindow = true; windowwidth = random(0.7,1.3); windowheight = random(0.7,1.3);
     windowshape = random([0,1]);
    if(random(0,2) < 1.3){
      havecross = true;
    }
    else{
      havecross = false;
    }
  }
  else{
    havewindow = false;
  }

  if(random(0,2) < 1){
    isdouble = true;
  }
  else{
    isdouble = false;
  }

  if(random(0,2) < 1){
    havelock = true;
  }
  else{
    havelock = false;
  }
  /*quad(doorx, doory, doorx + 80, doory + 20, doorx+80, doory +170, doorx, doory + 150); //frame
  quad(doorx, doory, doorx + 80, doory + 20, doorx + 100, doory+10, doorx+20, doory-10);
  quad(doorx + 80, doory + 20, doorx + 100, doory+10, doorx + 100, doory+160, doorx + 80, doory + 170);*/
}
