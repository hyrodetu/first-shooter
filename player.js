class Player{
    constructor(){
        this.kills=0;
        this.name=null;
        this.x=x
        
   }
        movement(){
          
             background("white");
             
            //this.block.rotation= Math.atan2(mouseY,mouseX)*180/PI
            //console.log(this.block.rotation)
            
            if(keyDown("A")){
                this.updateposition (-5,0);
            }
            else if(keyDown("D")){
                this.updateposition (5,0);
            }
            else if(keyDown("w")){
                this.updateposition (0,-5);
            }
            else if(keyDown("S")){
                this.updateposition (0,5);
            }
           triangle(30, 75, 58, 5, 86, 75);
            drawSprites();
           // angleMode(DEGREES)
           
          
            
        }
    
     updateposition(x,y){
        this.block.x=this.block.x+x
        this.block.y=this.block.y+y
    }

     

}




    

    

