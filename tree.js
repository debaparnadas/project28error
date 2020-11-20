class Tree {
    constructor (x,y,width,height) {
        var treeoptions = {
            isStatic: true,
            friction: 0.5, 
            density: 1.2
        }
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height; 
        this.body = Bodies.rectangle(x,y,width,height,treeoptions);
        this.image = loadImage("tree.png");
        this.image.scale = 2.8;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        
        push ()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}