var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13;


function setup() {
createCanvas(800,500)

}

function draw() {
  background(0);

wall1 = createSprite(400,10,800,20);
wall1.shapeColor="green";

wall2 = createSprite(10,250,20,500);
wall2.shapeColor="green";

wall3 = createSprite(400,490,800,20);
wall3.shapeColor="green";

wall4 = createSprite(790,250,20,500);
wall4.shapeColor="green";

wall5 = createSprite(70,90,100,20);
wall5.shapeColor="green";

wall6 = createSprite(230,70,20,100);
wall6.shapeColor="green";

wall7 = createSprite(120,400,20,220);
wall7.shapeColor="green";

wall8 = createSprite(370,70,20,100);
wall8.shapeColor="green";

wall9 = createSprite(280,390,20,200);
wall9.shapeColor="green";

wall10 = createSprite(290,250,200,20);
wall10.shapeColor="green";

wall11 = createSprite(500,250,20,200);
wall11.shapeColor="green";

wall12 = createSprite(600,250,200,20);
wall12.shapeColor="green";

wall13 = createSprite(640,370,20,230);
wall13.shapeColor="green";

wall14 = createSprite(650,70,20,100);
wall14.shapeColor="green";
  
drawSprites()
}

