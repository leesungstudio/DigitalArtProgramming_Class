

 let balls = [];
let i =0;
function setup() {
  createCanvas(windowWidth, windowHeight); 
  
}

function draw() {
  background(255);
  
  for (let b of balls){
    b.update();
    b.display(); // 주석 추가 2023.10.10.
    //ball.bounceEdges();
    b.passEdges();
  }
  
  if (mouseIsPressed){
    balls.push(new Walker(i));
    i += 1;
  }
}