class Enemy {
    constructor(){
        this.xDir = 1;
        this.position = {
            x:Math.random() * (350 - 50) + 50,
            y:0,
        }
        this.velocity={
            x:0,
            y:1,
        }
        this.size = Math.random() * (60 - 20) + 20;
        this.image = new Image();
        this.image.src = "./Images/meteor.gif";
        this.isDead = false;
    }
    draw(){
        context.beginPath();
        // context.fillStyle = "white";
        // context.fillRect(0,0,50,50);
        context.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
    }
    move(){
        this.position.y += this.velocity.y;
        // if(enemy.position.x + enemy.size > canvas.width){
        //     enemy.velocity.x = -1;
        //     // console.log("vayo");
        // }
        // else if(enemy.position.x < 0){
        //     enemy.velocity.x = 1;
        // }
        // this.position.y += this.velocity.y;
    }
    // checkCollision(){
    //     if(this.position.x + this.size > enemy.position.x && this.position.x < enemy.position.x + enemy.size && this.position.y > enemy.position.y + enemy.size)
    //     {
    //         console.log("collision vayo");
    //     }
    // }
    dead(){
        this.velocity.y = 0;
        setTimeout(()=>{
            this.position.x = -100;
            this.position.y = -100;
            this.isDead = true;
            score++;
        },100);
    }

    bulletCollision(bullets){
        for(let i = 0; i < bullets.length; i++){
            if(this.position.x + this.size >= bullets[i].position.x &&
                this.position.x <= bullets[i].position.x + bullets[i].size &&
                this.position.y + this.size >= bullets[i].position.y &&
                this.position.y <= bullets[i].position.y + bullets[i].size
                ){
                    // bullets[i].position.x = -200;
                    // bullets[i].position.y = -200;
                    this.image.src = "./Images/explosion.png";
                    this.dead();
                }
        }
    }
    
    playerCollision(player){
        if(this.position.x + this.size >= player.position.x &&
            this.position.x <= player.position.x + player.size &&
            this.position.y + this.size >= player.position.y &&
            this.position.y <= player.position.y + player.size ||
            this.position.y + this.size > canvas.height 
            ){
                // console.log("colision vayo");
                player.isAlive = false;
            }
    }
    update(){
        this.draw();
        if(player.isAlive){
            this.move();
        }
        // this.checkCollision();
    }
}