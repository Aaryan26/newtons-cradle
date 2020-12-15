class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restituion:0.3,
            friction:0.5,
            density:0.8,           
        }
        this.body=Bodies.circle(x,y,radius-50/2,options);
        World.add(world,this.body);
        

        this.radius=radius;
   }
   display(){
       var pos=this.body.position;
       //ellipseMode(RADIUS);
       //ellipse(pos.x, pos.y, this.radius, this.radius);

       ellipseMode(CENTER);
       ellipse(pos.x, pos.y, this.radius, this.radius);
   }
}
































