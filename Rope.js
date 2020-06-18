class Rope {
    constructor(A, B, offSetX, offSetY){
        this.offSetX = offSetX
        this.offSetY = offSetY
        var options = {
            length: 200,
            stiffness: 0.4,
            bodyA: A,
            bodyB: B,
           
            pointB : {x:this.offSetX, y:this.offSetY}

        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        strokeWeight(3);
        line(this.chain.bodyA.position.x , this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);

    }


}