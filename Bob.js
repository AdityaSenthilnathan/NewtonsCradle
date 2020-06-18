class Bob {
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution:1.1,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.rad = radius;
        World.add(world, this.body);
    }
    display(){
        strokeWeight(0);
        var pos = this.body.position;
        //let c = color(255, 204, 0); 
        fill(0, 0, 255);
        //circle(pos.x,pos.y, 2 * this.rad);
        ellipse(pos.x,pos.y,this.rad * 2, this.rad * 2);
    }
}
