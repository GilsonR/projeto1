let cor;
let posicaoHorizontal; //x
let posicaoVertical; //y

function setup() {
  createCanvas(500, 500);
  random(0,255);
  background(220);
  cor = color(random(0,255),random(0,255),random(0,255));
  posicaoHorizontal= 100; //x
  posicaoVertical= 100;//y
}

function draw() {
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,50);
  
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal - 1;
  }
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal + 1;
  }
  if(mouseY < posicaoVertical){
    posicaoVertical--;
  }
  if(mouseY > posicaoVertical){
    posicaoVertical++;
  }
  if(mouseIsPressed){
     cor = color(random(0,255),random(0,255),random(0,255),random(0,255));
  }

}
