//Create variables here
var dog,dog1,happyDog,foodS,foodStock,database
function preload()
{
  //load images here
  dog=loadImage("dogImg.png")
 happyDog=loadImage("dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
dog1 = createSprite(250,300,10,10)
dog1.addImage(dog)
dog1.scale=0.2
foodStock=database.ref('food')
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog1.shapeColor="blue"
  dog1.addImage(happyDog)
}
//readStock()
//writeStock()

  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  
text("press UP ARROW to feed pinkey",250,150)

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    food:x
  })
}

