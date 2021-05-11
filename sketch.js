var canvas;
var music;
var s1,s2,s3,s4;
var square;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   s1 = createSprite(93,575,185,30);
   s2 = createSprite(299,575,185,30);
   s3 = createSprite(505,575,185,30);
   s4 = createSprite(711,575,185,30);
   box = createSprite(random(20,750), 300, 35, 35);

   s1.shapeColor = ("red");
   s2.shapeColor = ("blue");
   s3.shapeColor = ("green");
   s4.shapeColor = ("yellow");
   box.shapeColor = ("white");

   box.velocityX = 1;
   box.velocityY = 5;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    edges = createEdgeSprites();


    if(box.bounceOff(s1)){
       box.shapeColor = ("red");
       box.velocityX = 0;
       box.velocityY = 0; 

       
    }

    if(box.bounceOff(s2)){
        box.shapeColor = ("blue");
     }

     if(box.bounceOff(s3)){
        box.shapeColor = ("green");
       
     }

     if(box.bounceOff(s4)){
        box.shapeColor = ("yellow");
     }

     box.bounceOff(edges[0]);
     box.bounceOff(edges[1]);
     box.bounceOff(edges[2]);
     box.bounceOff(edges[3]);

    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
