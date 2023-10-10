class Walker {
  constructor(i) {
    this.pos = createVector(0 + map(noise(i),0,1,0,width), height -100);
    this.vel = createVector(map(noise(i),0,1,0,5) , map(noise(i),0,1,0,19));
    this.acc = createVector(0, -0.3);
    this.r = map(sin(i),-1,1,2,12);
    this.t = 0;
    this.lineX = mouseX; 
    this.c = map(noise(i),0,1,0,255);
  }

  update() {
    
    
    this.acc.add(sin(this.t) / 100 );
    this.vel.add(this.acc);
    this.vel.mult(0.99);
    this.pos.add(this.vel);

    this.t += 0.1;
  }
  
  passEdges() {
    if (this.pos.x >= width - this.r) {
      this.pos.x = this.r;
    } else if (this.pos.x <= this.r) {
      this.pos.x = width - this.r;
    }

    if (this.pos.y >= height - this.r) {
      this.pos.y = height -this.r;
      this.vel.y *= -1;
    } else if (this.pos.y <=   this.r) {
      this.pos.y =  this.r;
      this.vel.y *= -1;
    }
  }

  bounceEdges() {
    if (this.pos.x >= width - this.r) {
      
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }

    if (this.pos.y >= height - this.r) {
      this.pos.y = height -this.r;
      this.vel.y *= -1;
    } else if (this.pos.y <=   this.r) {
      this.pos.y =  this.r;
      this.vel.y *= -1;
    }
  }

  display() {
    //noStroke();
    colorMode(HSB);
    fill(this.c, 100,100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    line(this.pos.x,this.pos.y+this.r, this.pos.x - this.vel.x , this.pos.y + this.r * 3);
    
    
  }
}
