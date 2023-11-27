// 最終課題を制作しよう

let x,y;
let p,q;
let a,b;
let balls = [];
let numberOfBalls = 10;
let gameStart = true;
let gameFailure = true; 
let gameClear = true;
let speedX,speedY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
  a = random(windowWidth);
  b = random(windowHeight);
  for(let i = 0; i < numberOfBalls; i++){
  balls.push({
    p: random(windowWidth),
    q: random(windowHeight),
    speedX: random(-5,5),
    speedY: random(-5,5),
  });
}
}
function draw(){
  //タイトル画面の設定
  if(gameStart){
  background(0,20,50);
  fill(255,200,50);
  textSize(60);
  textAlign(CENTER)
  text("ボールを避けて星を獲ろう",windowWidth/2,windowHeight/4);
  fill(255);
  textSize(40);
  textAlign(CENTER)
  text("スペースキーを押してスタート",windowWidth / 2,windowHeight*3/4);
  gameFailure = false;
  gameClear = false;

}else{  
  background(160, 192, 255);
  fill(255);
//ランダムなボールの生成  
  for(let i=0; i < numberOfBalls; i++){
    fill(0);
    ellipse(balls[i].p, balls[i].q,25);
  //ランダムな速さでボールが動く
  balls[i].p += balls[i].speedX;
  balls[i].q += balls[i].speedY;
  //画面端で反転
  if(balls[i].p < 0 || balls[i].p > windowWidth){
    balls[i].speedX *= -1;
  }
  if(balls[i].q < 0 || balls[i].q > windowHeight){
    balls[i].speedY *= -1;
  }
}
//星を描く
fill(243,233,0);
noStroke();
star(a, b, width / 20);

//プレイヤーの設定
  fill(255);
  ellipse(x, y, 25);
  x = constrain(x,0,windowWidth);
  y = constrain(y,0,windowHeight);

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if(x < 0 || x > windowWidth){
    x == 0;
  }
  if(y < 0 || y > windowHeight){
    y == 0;
  }

  if (keyIsDown("A".charCodeAt(0))) {
    if (keyIsDown(LEFT_ARROW)) {
      x -= 10;
    } else if (keyIsDown(RIGHT_ARROW)) {
      x += 10;
    } else if (keyIsDown(UP_ARROW)) {
      y -= 10;
    } else if (keyIsDown(DOWN_ARROW)) {
      y += 10;
    }
  }
  //ゲームオーバーの条件設定（ボールに当たったらアウト）
  for(let i = 0; i < numberOfBalls; i++){
  let distance = dist(x,y,balls[i].p,balls[i].q);
  if(distance < 37.5){
    gameFailure= true;
  }
  }
  if(gameFailure){
    background(0);
    fill(255,0,0);
    textSize(90);
    textAlign(CENTER);
    text("GAME OVER",windowWidth / 2,windowHeight / 4);
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text("スペースキーでリスタート",windowWidth / 2, windowHeight * 3 / 4)
  }

  //ゲームクリア時の条件設定
  if(dist(a, b, x, y) < 37.5){
    gameClear = true;
  }
  if(gameClear){
    background(0,20,50);
    fill(243,233,0);
    textSize(60);
    textAlign(CENTER);
    text("おめでとう！ゲームクリアだ！",windowWidth / 2,windowHeight / 2);
  }
}
}
function keyPressed(){
  if (key==" "){
    gameStart=!gameStart;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 //星を描くための関数
 function star(ca,cb,radius){
  let theta = TWO_PI / 5 ; 
  let halfTheta = theta / 2;
  beginShape();
  for(let j = 0; j < 5; j++){
    let theta = TWO_PI * j * 2 / 5 - HALF_PI;
    let x = ca + cos(theta) * radius;
    let y = cb + sin(theta) * radius;
    vertex(x,y);
}
endShape(CLOSE);
}