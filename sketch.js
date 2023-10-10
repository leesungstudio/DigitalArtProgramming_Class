

 let balls = [];
let i =0;
function setup() {
  createCanvas(500, 500); 
  
}

function draw() {
  background(255);
  
  for (let b of balls){
    b.update();
    b.display();
    //ball.bounceEdges();
    b.passEdges();
  }
  
  if (mouseIsPressed){
    balls.push(new Walker(i));
    i += 1;
  }
}