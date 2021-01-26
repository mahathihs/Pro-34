class Block{
    constructor(x,y,w,h){
        var options={
            'restitution':0.8,
            'density':20,
            'friction':1.0
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
    display(){
        var blockPos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(blockPos.x,blockPos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("orange");
        fill("hotpink");
        rect(0,0,this.w,this.h);
        pop();
    }
};