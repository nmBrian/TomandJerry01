var mouse , mouseani , mouseani2 , mouseani1, cat , 
catani , catani1 , catani2 , bg , bgi ;

var STILL = 1;
var END = 0;
var gameState = END;

function preload() 
{
    //Mouse
    mouseani = loadAnimation( "jerryTwo.png" , "jerryThree.png");
    mouseani2 = loadImage ("jerryFour.png"); 
    mouseani1 = loadImage ("jerryOne.png");

    //Cat
    catani = loadAnimation("tomThree.png" , "tomTwo.png");
    catani1 = loadImage("tomOne.png");
    catani2 = loadImage("tomFour.png");


    //background
    bgi = loadImage ("garden.png");


}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here

    bg = createSprite (600,400);
    bg.addImage ("background" , bgi);

    mouse = createSprite (200,600);
    mouse.addImage ("1" , mouseani1);
    mouse.addImage("2" , mouseani2);
    mouse.addAnimation("3" , mouseani);
    mouse.scale = 0.13;

    cat = createSprite (800 ,600);
    cat.addImage ("5" , catani1);
    cat.addAnimation ("4" , catani);
    cat.addImage ("6" , catani2);
    cat.scale = 0.24;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(gameState === END){
      keyPressed();

      if(((cat.x - 50) - mouse.x < (cat.width - mouse.width)/2))
      {
        gameState = STILL;
      }
 

    if(gameState === STILL)
    {
        if((cat.x - 50) - mouse.x < (cat.width - mouse.width)/2)
        {
          cat.changeAnimation ("6" , catani2);
          cat.velocityX = 0;

          mouse.changeImage("2" , mouseani2);
        }

        
    }
    

    
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  
  if(keyCode === LEFT_ARROW && gameState === END){
      cat.velocityX = -5;
      cat.changeAnimation ("4" , catani);
      
      mouse.changeAnimation ("3" , mouseani1);
  }

}
