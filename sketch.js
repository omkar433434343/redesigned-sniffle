var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18;
var player;
var bg;
var wall;
var wallImg;
var playerImg;
var lock;
var keyImg;
var NPC;
var exit;
var treasureImg;
var zombie;
var NPCImg;
var end;
var seckey;
var gameState = 0;
var keyachieve;
var newbg;
var win;
var leverImg;
var lever;
var zombie2
var zombie3;
var door;
var doorImg
var lock2;

function preload(){
    bg = loadImage("images/bg.png");
    wall = loadImage("images/wall1.png");
    wallImg = loadImage("images/wall.png");
   playerImg = loadImage("images/gb.png")
    keyImg = loadImage("images/key.png");
    NPCImg = loadImage("images/NPC1.gif");
    treasureImg = loadImage("images/tresure.png")

    end = loadSound("sounds/win.wav")
    keyachieve = loadSound("sounds/door open.wav")
    win = loadSound("sounds/win.wav");

    leverImg = loadImage("images/lever.png");
    lever = loadImage("images/lever diff.png")
    newbg = loadImage("images/bg2.jpg");

    doorImg = loadImage("images/door.png")
    
}





function setup(){
            createCanvas(displayWidth, displayHeight)   
            
            wall1=createSprite(300,600,100,10);
        
            wall2=createSprite(40,100,10,100);

            wall3=createSprite(250,50,500,10);

            wall4=createSprite(135,255,10,200);

            wall5=createSprite(160,350,100,10);

            wall6=createSprite(300,200,10,300);

            wall7=createSprite(650,450,900,10);

            wall8=createSprite(500,195,10,300);

            wall9=createSprite(430,350,150,10);

            wall10=createSprite(700,200,250,10);
            
            wall11 = createSprite(870,100,50,250);

            wall12 = createSprite(715,530,50,50)

            wall13 = createSprite(450,530,50,50)
            wall15 = createSprite(870,300,50,50)
            wall14 = createSprite(660,630,50,50);

            

            wall16 = createSprite(500,630,50,50)



            wall17 = createSprite(50000000000000000000000000000,630,50,50)

            wall18 = createSprite(500000000000000000000,630,50,50)

            lock2 = createSprite(950,200,50,50)

            door = createSprite(500000000000000000000,630,150,100)


            player = createSprite(90,10,10,10);

            lock = createSprite(620,550,50,50)

            NPC = createSprite(200,600,50,50);

            zombie = createSprite(1000,500,50,50)

            exit = createSprite(600,100,50,50)
          
            seckey = createSprite(300,550,50,50)

               
        zombie2= createSprite(1112132312350,500,50,50)
      zombie2.velocityY = 1
   
      


            wall2.addImage(wallImg)
            wall2.scale = 0.4

            wall1.addImage(wall)
            wall1.scale=0.4

            wall3.addImage(wall)
            wall3.scale = 2

            
            wall4.addImage(wallImg)
            wall4.scale = 1

            
            wall5.addImage(wall)
            wall5.scale = 0.4
            
            wall6.addImage(wallImg)
            wall6.scale = 1.5   

            
            wall7.addImage(wall)
            wall7.scale = 2

            
            wall8.addImage(wallImg)
            wall8.scale = 1.5

            
            wall9.addImage(wall)
            wall9.scale = 0.8

            
            wall10.addImage(wall)
            wall10.scale = 1.5

            wall11.addImage(wallImg)
            wall11.scale =1.7

            wall12.addImage(wallImg)

            wall13.addImage(wallImg)

            wall14.addImage(wall)

            wall15.addImage(wallImg)

            wall16.addImage(wall)
            wall16.scale = 0.8

            wall17.addImage(wall)
            wall17.scale = 0.8

            wall18.addImage(wall)

            lock.addImage(keyImg);
            lock.scale = 0.06    

            lock2.addImage(keyImg);
            lock2.scale = 0.06    


            seckey.addImage(leverImg);
            seckey.scale = 0.2

            zombie2.addImage(NPCImg)
            zombie2.scale = 0.5
    
                       
        player.addImage(playerImg)
        player.scale = 0.4

        NPC.addImage(NPCImg)
        NPC.scale = 0.5

        zombie.addImage(NPCImg)
        zombie.scale = 0.5

        exit.addImage(treasureImg)
        exit.scale = 0.19

      


        
        
        NPC.velocityX=2
        NPC.velocityY=2

        zombie.velocityX=4
        zombie.velocityY=5

        player.debug = true;
     
     
        exit.debug = true;
        seckey.debug = true;
        wall1.debug = true;
wall2.debug = true;

wall3.debug = true;

wall4.debug = true;

wall5.debug = true;

wall6.debug = true;

wall7.debug = true;


wall8.debug = true;
wall9.debug = true;

wall10.debug = true;

wall11.debug = true;

wall12.debug = true;

wall13.debug = true;

wall14.debug = true;

wall15.debug = true;

wall16.debug = true;


wall17.debug = true;

wall18.debug = true;

         player.setCollider("rectangle", 0,0, 100,200);
         NPC.setCollider("rectangle", 0,0, 100,350);

         
         zombie.setCollider("rectangle", 0,0, 100,350);
         zombie2.setCollider("rectangle", 0,0, 100,350);
 }


function draw(){
    background(bg);

   

if(keyDown("RIGHT_ARROW")){
        player.x=player.x+2



}
if(keyDown("LEFT_ARROW")){
    player.x=player.x-2



}
if(keyDown("UP_ARROW")){
    player.y=player.y-2



}
if(keyDown("DOWN_ARROW")){
    player.y=player.y   +2

    



}

if(player.y < 630 && player.x > 500 ){
   
    win.play()

}

if(player.isTouching(lock)){
    lock.x = player.x
    lock.y = player.y
    
    

    wall15.x = 1000
   wall15.y = 900
  
  win.stop();

}




if(player.isTouching(seckey)){
  
    
    seckey.addImage(lever)

   keyachieve.loop = false;
   keyachieve.play();
  

    wall16.x = 1000
   wall16.y = 900
  
  

}

if(player.isTouching(wall10)){
   
   wall10.x = 1000
   wall10.y = 900
}



    if(player. isTouching(NPC)){

        alert("you lost ", 500,500)


    }

    if(player. isTouching(zombie)){

        alert("you lost ", 500,500)


    }

    if(player.isTouching(exit)){

        end.play();
        
     gameState = 1;

      

    }
    textSize(100)
    text("level one", 300,430)
   

    if (gameState === 1){
        background(newbg);
     
        if(keyDown("UP_ARROW")){
            player.y=player.y-2
        
        
        
        }
    
    
    
       
    

          seckey.x = 2131983

          console.log(player.x)
          console.log(player.y)
 wall1.x = 360
wall1.y = 560
wall1.scale = 1


wall2.x = 450
wall2.y = 670
wall2.scale = 1

     
wall3.x = 740
wall3.y = 560
wall3.scale = 1
 
      
wall4.x = 650
wall4.y = 670
wall4.scale = 1

wall5.x = 670
wall5.y = 400
wall5.scale = 4
 

wall6.x = 850
wall6.y = 650
wall6.scale = 1
  
wall7.x = 1050
wall7.y = 750
wall7.scale = 2
   

wall8.x = 1250
wall8.y = 570
wall8.scale = 2
             
wall9.x = 150
wall9.y = 560
wall9.scale = 1.6
              
wall10.x = 1050
wall10.y = 10
wall10.scale = 2
           
wall11.x = 1250
wall11.y = 200
wall11.scale = 2
               
wall12.x = 850
wall12.y =  190
wall12.scale = 1.9
             
wall13.x = 280
wall13.y = 270
wall13.scale = 1.5
            
wall14.x = 999999999999999999999999999999999999999
wall14.y = 110
wall14.scale = 1.5

wall15.x = 99999999999999999999999999999999999999

wall15.y = 60
wall15.scale = 0.7

wall16.x = 500
wall16.y = 560
wall16.scale = 1.8

wall17.x = 50
wall17.y = 440

wall18.x = 50
wall18.y = 100

wall1.debug = true;
wall2.debug = true;

wall3.debug = true;

wall4.debug = true;

wall5.debug = true;

wall6.debug = true;

wall7.debug = true;


wall8.debug = true;
wall9.debug = true;

wall10.debug = true;

wall11.debug = true;

wall12.debug = true;

wall13.debug = true;

wall14.debug = true;

wall15.debug = true;

wall16.debug = true;


wall17.debug = true;

wall18.debug = true;

if(player.isTouching(lock2  )){
    lock2.x = player.x
    lock2.y = player.y
    
    

    wall16.x = 100077777777777777
   wall16.y = 9007777000000000000000000000000000
  
  win.stop();

}
 if (player.isTouching(door)){

   
    alert("you win!! ", 500,500)




 }
        exit.x = player.x-70
        exit.y = player.y+30
        
        lock.x = 9500000000000000000000000000000000
        lock.y = 200

        door.x = 550
        door.y = 800
        door.shapeColor= "cyan"
                 zombie2.x=1150
        
     
      textSize(100)
      text("level two", 300,230)



     
      if(player. isTouching(zombie)){

        alert("you lost ", 500,500)


    }
    if(player. isTouching(zombie2)){

        alert("you lost ", 500,500)


    }





      zombie.x = 200

      NPC.x = 9000000000000000




}






       edges = createEdgeSprites();


        NPC.bounceOff(edges);   
        NPC.bounceOff(wall1);
        NPC.bounceOff(wall2);
        NPC.bounceOff(wall3);
        NPC.bounceOff(wall4);
        NPC.bounceOff(wall5);
        NPC.bounceOff(wall6);
        NPC.bounceOff(wall7);
        NPC.bounceOff(wall8);
        NPC.bounceOff(wall9);
        NPC.bounceOff(wall10);
        NPC.bounceOff(wall11);
        NPC.bounceOff(wall12);
        NPC.bounceOff(wall13);
        NPC.bounceOff(wall14);
        NPC.bounceOff(wall15);

        zombie.bounceOff(edges);
        zombie.bounceOff(wall1);
        zombie.bounceOff(wall2);
        zombie.bounceOff(wall3);
        zombie.bounceOff(wall4);
        zombie.bounceOff(wall5);
        zombie.bounceOff(wall6);
        zombie.bounceOff(wall7);
        zombie.bounceOff(wall8);
        zombie.bounceOff(wall9);
        zombie.bounceOff(wall10);
        zombie.bounceOff(wall11);
        zombie.bounceOff(wall12);
        zombie.bounceOff(wall13);
        zombie.bounceOff(wall14);
        zombie.bounceOff(wall15);

        
        zombie2.bounceOff(edges);
        zombie2.bounceOff(wall1);
        zombie2.bounceOff(wall2);
        zombie2.bounceOff(wall3);
        zombie2.bounceOff(wall4);
        zombie2.bounceOff(wall5);
        zombie2.bounceOff(wall6);
        zombie2.bounceOff(wall7);
        zombie2.bounceOff(wall8);
        zombie2.bounceOff(wall9);
        zombie2.bounceOff(wall10);
        zombie2.bounceOff(wall11);
        zombie2.bounceOff(wall12);
        zombie2.bounceOff(wall13);
        zombie2.bounceOff(wall14);
        zombie2.bounceOff(wall15);
        zombie2.bounceOff(wall16);
        zombie2.bounceOff(wall17);

        player.collide(edges);
        
        player.collide(wall1)
        player.collide(wall2)
        player.collide(wall3)
        player.collide(wall4)
        player.collide(wall5)
        player.collide(wall6)
        player.collide(wall7)
        player.collide(wall8)
        player.collide(wall9)
        player.collide(wall10)
        player.collide(wall11)
        player.collide(wall12)
        player.collide(wall13)
        player.collide(wall14)
        player.collide(wall15)
        player.collide(wall16)
            drawSprites();
       
}
