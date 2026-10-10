bodycolor = {r: 255, g:0, b:100};
handlecolor = {r: 150, g:75, b:0};
havewindow = true; windowwidth = 1; windowheight = 1;  windowshape = 0;
havecrossv = true; havecrossh = true;
havelock = true;
isdouble = true;
handleshape = 0; handlewidth = 1; handleheight = 1;
doorheight = 1; doorwidth = 1;
numofhinges = 2;
bodyseed = 0; windowseed = 0; handleseed = 0; newseed = true;

function setup() {
 // put setup code here
  textOutput();
  createCanvas(400, 500, WEBGL);

}

function draw() {
  // put drawing code here
  background(220);
  orbitControl();

  if(isdouble == false){
    drawDoor(false);
  }
  else{
    translate(-50*doorwidth,0,0);
    drawDoor(true);
    scale(-1, 1);
    translate(-100*doorwidth,0,0);
    drawDoor(false);
    scale(-1, 1);
    translate(150*doorwidth,0,3);
  }
  
  

}

function drawDoor(issecond){
  fill(bodycolor.r, bodycolor.g, bodycolor.b); //body
  box(100*doorwidth,300*doorheight,10);


  fill(handlecolor.r, handlecolor.g, handlecolor.b); //hinges
  for(i = 0; i < numofhinges; i++){
    translate(-52*doorwidth,-120*doorheight+300*i/(numofhinges/doorheight),0);
    cylinder(4,20+60/numofhinges,6,2);
    translate(52*doorwidth,120*doorheight-300*i/(numofhinges/doorheight),0);
  }

  fill(handlecolor.r, handlecolor.g, handlecolor.b); //handle
  switch (handleshape){
    case 0: //circular handle
      translate(25,0,15);
      sphere(10*handleheight,6,6);
      translate(0,0,-30);
      sphere(10*handleheight,6,6);

      translate(0,8,10);    box(12,25,2);
      translate(0,0,10);
      box(12*handlewidth,25*handleheight,2);    

      translate(0,-8,-10); translate(0,0,-10); translate(0,0,30); translate(-25,0,-15);
      break;

    case 1: //bar handle
      translate(30,0,15);
      cylinder(5*handlewidth,40*handleheight,6,2);
      translate(0,10,-15);
      box(5*handlewidth,5*handleheight,30,2);
      translate(0,-20,0);
      box(5*handlewidth,5*handleheight,30,2);
      translate(0,10,0);
      translate(0,0,-15);
      cylinder(5*handlewidth,40*handleheight,6,2);
      translate(-30,0,15);
      break;

    case 2: //lever handle
      translate(20,0,15);
      rotate(HALF_PI);
      cylinder(4*handlewidth,30*handleheight,8,4);
      translate(0,0,-30);
      cylinder(4*handlewidth,30*handleheight,8,4);
      translate(0,0,30);
      rotate(-HALF_PI);
      translate(12,0,-15);
      box(8*handlewidth,8*handleheight,30,2);
      translate(-12,0,15);
      translate(-20,0,-15);
      break;
    case 3: //bar push handle, 
      translate(0,0,12);
      box(55*handlewidth, 12*handleheight, 10);
      translate(0,0,-2);
      box(65*handlewidth, 20*handleheight, 10);
      translate(0,0,-8);
      break;
  }


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
        rect(0,-70,50*windowwidth,50*windowheight);
        rectMode(CORNER);
        translate(0,0,15);  
        break;
        
    }
  }
  translate(0,0,-7.5);

  translate(0,0,10); //window cross
  if(havewindow && (havecrossv || havecrossh)){
    rectMode(CENTER);
    noStroke();        
    fill(bodycolor.r, bodycolor.g, bodycolor.b);
    if(havecrossv){
      rect(0,-70,10,70);
    }
    if(havecrossh){
      rect(0,-70,70,10);
    }

    translate(0,0,-20);   
    if(havecrossv){
      rect(0,-70,10,70);
    }
    if(havecrossh){
      rect(0,-70,70,10);
    }
    stroke(10,10,10);   
    translate(0,0,20); 
    rectMode(CORNER);
  }
  translate(0,0,-10);

}

function generateDoor(){
  if(newseed){
    randomSeed(bodyseed);
  }
  bodycolor.r = random(0,255); bodycolor.g = random(0,255); bodycolor.b = random(0,255);
  doorheight = random(0.7,1.3); doorwidth = random(0.7,1.3);
  numofhinges = random([2,3,4,5,6]);
  if(random(0,2) < 1){
    isdouble = true;
  }
  else{
    isdouble = false;
  }

  if(newseed){
    randomSeed(handleseed);
  }
  handlecolor.r = random(0,255); handlecolor.g = random(0,255); handlecolor.b = random(0,255);
  handleshape = random([0,1,2,3]); handlewidth = random(0.7,1.4); handleheight = random(0.7,1.5);
  if(random(0,2) < 1){
    havelock = true;
  }
  else{
    havelock = false;
  }
  
  if(newseed){
    randomSeed(windowseed);
  }
  if(random(0,2) < 1){
    havewindow = true; windowwidth = random(0.7,1.5); windowheight = random(0.7,1.5);
     windowshape = random([0,1]);
     
    if(random(0,2) < 1.1){
      havecrossv = true;
    }
    else{
      havecrossv = false;
    }

    if(random(0,2) < 1.1){
      havecrossh = true;
    }
    else{
      havecrossh = false;
    }
  }
  else{
    havewindow = false;
  }

  newseed = false;
}

function setSeed(){
  bodyseed = document.getElementById("bodyseed").value;
  windowseed = document.getElementById("windowseed").value;
  handleseed = document.getElementById("handleseed").value;
  newseed = true;
  //randomSeed(newSeed);
}

function saveDoor(){

}