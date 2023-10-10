

 let balls = []; //왠만하면 우리 주석 적자. 
let i =0;
function setup() {
  createCanvas(windowWidth, windowHeight); 
  
}

function draw() {
  background(255);
  
  for (let b of balls){
    b.update();
    b.display();
    //ball.bounceEdges();
    b.passsssEdges();
  }
  
  if (mouseIsPressed){
    balls.push(new Walker(i));
    i += 1;
  }
}