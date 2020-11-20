 class Stone {
     constructor (x,y,radius) {
        var stoneoptions = {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,stoneoptions);
        this.image = loadImage("stone.png");
        this.image.scale = 0.8
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