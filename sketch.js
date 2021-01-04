var player
var gamestate



function preload(){


}

function setup(){
    createCanvas(800, 700);

    player1= new Player(30, 75)


}

function draw(){
    background("white")
    camera.x=player.x
    player.movement()
    
    drawSprites();
    
}

