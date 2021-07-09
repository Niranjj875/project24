class CannonBall{
    constructor(x,y){
var ball = {
    resititution:0.08,
    friction: 1.0,
    density:1.0,
    isStatic: true 
}
this.r=40;
this.body = Bodies.circle(x,y,this.r,ball)
World.add (world,this.body)
this.image = loadImage("./assets/cannonball.png");
    }
 display(){
     var angle=this.body.angle;
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
     }



}