class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image=loadImage("paper.png");

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      strokeWeight(4);
      stroke("green");
      fill(255);
      imageMode(CENTER);
      image(this.image, 0,0,70,70)
    
      pop();
      
    }
  };
  