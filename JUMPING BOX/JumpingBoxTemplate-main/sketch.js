var canvas,block1,block2,block3,block4,box,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(640,600);

    //create 4 different surfaces
    block1=createSprite(80,560,150,40)
    block1.shapeColor="red";
    block2=createSprite(240,560,150,40)
    block2.shapeColor="blue";
    block3=createSprite(400,560,150,40)
    block3.shapeColor="green";
    block4=createSprite(560,560,150,40)
    block4.shapeColor="cyan";


    //create box sprite and give velocity
    box=createSprite(50,50,25,25)
    box.velocityX=10;
    box.velocityY=10;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges)
    
    if(block1.isTouching(box)){
        box.shapeColor="red";
        box.bounceOff(block1)
        music.play();
    }
    if(block2.isTouching(box)){
        box.shapeColor="blue";
        box.velocityY=0
        box.velocityX=0
    }
    if(block3.isTouching(box)){
        box.shapeColor="green";
        box.bounceOff(block3)
    }
    if(block4.isTouching(box)){
        box.shapeColor="cyan";
        box.bounceOff(block4)
    }
       
    
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    drawSprites();
}
