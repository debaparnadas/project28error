class Mango {
    constructor (x,y,radius) {
        var mangooptions = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,mangooptions);
        this.image = loadImage("mango.png");
        this.image.scale = 1.6;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop()
    }
}