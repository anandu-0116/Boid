const flock=[];
let depth=500;
let gap=300;
let unitX,unitY,unitZ;


let alignSlider,cohesionSlider,separationSlider;


function setup(){
    createCanvas(800,800,WEBGL);
    alignSlider=createSlider(0,5,1,0.1);
    cohesionSlider=createSlider(0,5,1,0.1);
    separationSlider=createSlider(0,5,1,0.1);

    let cameraX = 630 / 600 * width;
  let cameraY = 140 / 500 * height;
  let cameraZ = -400 / 500 * depth;
  camera(cameraX, cameraY, cameraZ, 0, 0, 0, 0, 0, 1);

    for(let i=0;i<200;i++){
     flock.push(new Boid());   
    }
}

function draw(){

    background(40);
    directionalLight(150, 150, 150, 1, 1, 0);
  ambientLight(150);
  orbitControl();
/*
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  //cylinder(70, 70);
  pop();

  translate(240, 0, 0);

  //scale(1,0.5,0.5);
  push();
  fill (255,204,0);
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  box(70, 70, 70);

  pop();*/


    for(let boid of flock){
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
    
}