let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let sound = document.getElementById("sound");

//loading background music
const backgroundMusic = new Audio();
backgroundMusic.src = "./Sound/backgroundMusic.mp3";

//loading bullet sound
const bulletSound = new Audio();
bulletSound.src = "./Sound/bulletSound.wav";
bulletSound.volume = 0.5;

const player = new Player();
const allbullet = [];

const enemy = new Enemy();

document.addEventListener("keydown",(e)=>{
    if(e.code === "ArrowUp") player.velocity.y = -5;
    if(e.code === "ArrowDown") player.velocity.y = 5;
    if(e.code === "ArrowLeft") player.velocity.x = -5;
    if(e.code === "ArrowRight") player.velocity.x = 5;
    if(e.code === "Space"){
        allbullet.push(new Bullet(player.position.x + 10 ,player.position.y));
        bulletSound.play()
    }
    
});

document.addEventListener("keyup",(e)=>{
    if(e.code === "ArrowUp") player.velocity.y = 0;
    if(e.code === "ArrowDown") player.velocity.y = 0;
    if(e.code === "ArrowLeft") player.velocity.x = 0;
    if(e.code === "ArrowRight") player.velocity.x = 0;
});

sound.addEventListener("click",(e)=>{
    backgroundMusic.play();
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
});
// if(player.position.x + player.size > canvas.width || player.position.x < 0 ){
//     player.velocity.x = 0;
// }

//enemy movement
if(enemy.position.x + enemy.size > canvas.width){
    enemy.velocity.x = -1;
    console.log("vayo");
}

//game loop
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    enemy.update();
    player.update();
    for(let i = 0; i< allbullet.length; i++){
        allbullet[i].update();
    }
    window.requestAnimationFrame(animate);
}
animate();