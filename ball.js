class ball {
    constructor(x, y, radius) {
        var options = { restitution: 1 }
        this.body = Matter.Bodies.circle(x, y, radius, options)
        Matter.World.add(world, this.body)
        this.radius = radius;
    }
    display() {
        fill("#ed4f3e");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}