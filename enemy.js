class Enemy {
    constructor(){
        this.xDir = 1;
        this.position = {
            x:0,
            y:0,
        }
        this.velocity={
            x:1,
            y:0,
        }
        this.size = 50;
        this.image = new Image();
        this.image.src = "./Images/meteor.gif";
    }
    draw(){
        // context.beginPath();
        context.fillStyle = "white";
        // context.fillRect(0,0,50,50);
        context.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
    }
    move(){
        this.position.x += this.velocity.x;
        if(enemy.position.x + enemy.size > canvas.width){
            enemy.velocity.x = -1;
            // console.log("vayo");
        }
        else if(enemy.position.x < 0){
            enemy.velocity.x = 1;
        }
        this.position.y += this.velocity.y;
    }
    // checkCollision(){
    //     if(this.position.x + this.size > enemy.position.x && this.position.x < enemy.position.x + enemy.size && this.position.y > enemy.position.y + enemy.size)
    //     {
    //         console.log("collision vayo");
    //     }
    // }
    update(){
        this.draw();
        this.move();
        // this.checkCollision();
    }
}