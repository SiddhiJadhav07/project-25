class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("dustbin.png");
      this.leftBody = Bodies.rectangle(x-10, y-50, 20, 20 , {isStatic:true} );
      World.add(world, this.leftBody);
      this.rightBody = Bodies.rectangle(x+10, y-50, 20, 100 , {isStatic:true} );
      World.add(world, this.rightBody);
      this.baseBody = Bodies.rectangle(x, y, 20, 20 , {isStatic:true} );
      World.add(world, this.baseBody);
       }
    display(){
      var leftpos =this.leftBody.position;
      var rightpos =this.rightBody.position;
      var basepos =this.baseBody.position;
      rectMode(CENTER);
      fill(180);
      stroke(180);
      rect(leftpos.x,leftpos.y,20,100);
      rect(rightpos.x,rightpos.y,20,100);
      rect(basepos.x,basepos.y,200,20);
      imageMode(CENTER);
      image(this.image,basepos.x,basepos.y-70,140,170)
    }
  };