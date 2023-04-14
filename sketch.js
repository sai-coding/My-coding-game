var bunny, bunnyImage, carrot, carrotImage, obstacle1, obstacle1Image, obstacle2, obstacle2Image
var bg

function preload() {
    bg = loadImage("background.jpeg");

    bunnyImage = loadImage("bunny.png");
    carrotImage = loadImage("carrot.png");
    obstacle1Image = loadImage("obstacle1.png");
    obstacle2Image = loadImage("obstacle2.jpeg");
}

function setup() {
     createCanvas(600, 500);

     bunny = createSprite(10, 480, 20, 50);
     carrot = createSprite(300, 400, 20, 20);
     obstacle1 = createSprite(200, 400, 20, 20);
     obstacle2 = createSprite(500, 400, 20, 20);

}
 function draw() {
    background(bg);
  drawSprites()
 }