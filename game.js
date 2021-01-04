class Game{
    constructor(){

    }

    start(){
        
        gamer=createSprite(displayWidth/2,displayHeight-50,10,10)
       gamer.addImage(rocketImg)
        gamer.scale=0.3
        
            game.spawnUfo()


            
            
        }
   
           spawnUfo() {
                //write code here to spawn the clouds
               //if (frameCount % 10 === 0) {
                   ufo = createSprite(displayWidth/2,displayHeight/2,40,10);
                 
                  ufo.addImage(ufoImg);
                ufo.scale = 0.5;
                ufo.velocityX = -2;
                  console.log(ufo.x)
                   //assign lifetime to the variable
                   
                   if(ufo.x<200){
                   ufo.velocityX=2
                  }

                  if(ufo.x>500){
                     ufo.velocityX=-2
                    }
                   //ufo.lifetime = 134;
                  
                  //adjust the depth
                 // cloud.depth = trex.depth;
                  //trex.depth = trex.depth + 1;
                  //cloudsGroup.add(cloud);
               // }
            }
        }
              



    









