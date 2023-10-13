class Player{
    constructor(){
        this.position = {
            x:180,
            y:350,
        };
        this.velocity = {
            x:0,
            y:0,
        };
        this.size = 50;
        this.image = new Image();
        this.image.src = "./Images/ship.png";
    }
    draw(){
        context.fillStyle = "red";
        // context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
    }
    move(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    update(){
        this.draw();
        this.move();
    }
}