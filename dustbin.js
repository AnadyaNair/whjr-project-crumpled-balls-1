class dustbin {
    constructor(x, y, width, height) {
        var options = { isStatic: false }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options)
        Matter.World.add(world,this.body)
        this.width = width;
        this.height = height;
    }
    display(){
        fill("#4287f5")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}