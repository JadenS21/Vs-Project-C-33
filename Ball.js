class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle)
      fill(26,145,169);
      ellipse(0, 0, this.radius);
      pop();
      
      for(var i = 0;i <= width-60;i = i + 80){
        ball1.push(new Ball(i,200))
      }
      for(var j = 0;j <= width;j = j + 80){
        ball2.push(new Ball(j,200))
      }
      for(var k = 0;k <= width-60;k = k + 80){
        ball3.push(new Ball(k,200))
      }
      for(var l = 0;l <= width;l = l + 80){
        ball4.push(new Ball(l,200))
      }
    }
  };