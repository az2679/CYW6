let cellSize;
let colr=[]

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  stroke(0)
}

function draw() {
  background('rgba(213,209,218,0.54)');
  
  cellSize = min(width / 10, height / 10);
  
//rectangle background
  for (let x = cellSize -50; x < width; x += cellSize) {
    for (let y = cellSize -50; y < height; y += cellSize) {
    push()
    translate(x,y)
    // rotate(0.5) 
    let chance = random(1);
    if (chance < 0.5) {
      sign = 1;
    } else {
      sign = -1;
    }
    let angle = random(0, -60 * sign);
    rotate(angle); 
    stroke(255)
    fill('rgba(210,209,211,0.41)')
    rect(0, 0, 20, 10)
    pop()
    }
  } 
  
  //back wall grid
    let grid3 = new squareGrid(350, 0, 75, width/15, 15, 'rgb(37,54,93)', 'rgb(190,72,92)')
    grid3.show()

  //pink rotated columns
    diagonalSticks(width*0.05, height*0.5, 'rgb(196,32,60)', 'rgba(225,220,229,0.97)')
  
  //base, large grid below
    let grid1 = new horizontalGrid(100, 50, 80, 40, 'rgb(190,72,92)', 'rgb(37,54,93)')
    grid1.show()

  //light blue grid on top
    let grid2 = new verticalGrid(150, 100, 30, 60, 'rgb(36,62,122)', 150)
    grid2.show()
  
  //rotated rectangles
    let grid4 = new rotatedGrid(200, 75, 5, 3, 12, 'rgba(213,209,218,0.95)', 'rgba(213,209,218,0.95)')
    grid4.show()

  //color palette
    let from = color('rgb(190,72,92)')
    let to = color('rgb(37,54,93)');
    let interA = lerpColor(from, to, 0.33);
    let interB = lerpColor(from, to, 0.66);
    fill(from);
    rect(20, height-80, 20, 60);
    fill(interA);
    rect(40, height-70, 20, 60);
    fill(interB);
    rect(60, height-80, 20, 60);
    fill(to);
    rect(80, height-70, 20, 60);

  //white columns
    solidSticks(width*0.35, height*0.55, 255)

  //3 gradient sticks
    gradSticks(width*0.45, height*0.55, 'rgb(214,53,80)', 'rgb(3,29,88)')


  noLoop()
}

function mousePressed(){
  loop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class horizontalGrid{
  constructor(x, y, w, h, color1, color2){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color1 = color1;
    this. color2 = color2;
  }

  show(){
    for(let j=this.y; j<this.h*10; j+=this.h){
      for(let i=this.x; i<this.h*10; i+=this.h){
        let startColor = color(this.color1)
        let endColor = color(this.color2);
        let grad = lerpColor(startColor, endColor, i/j*0.6)
        fill(grad) 
        stroke(0)
        strokeWeight(1)
        rect(i, j, this.w, this.h)
      }
    }
  }


}

class verticalGrid{
  constructor(x, y, w, h, color1, color2){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color1 = color1;
    this. color2 = color2;
  }

  show(){
    for(let i=this.x; i<this.w*10; i+=this.w){
      for(let j=this.y; j<this.w*8; j+=this.w){
        let startColor = color(this.color1)
        let endColor = color(this.color2);
        let grad = lerpColor(startColor, endColor, i/j*0.3)
        fill(grad) 
        strokeWeight(1)
        stroke(255)
        rect(i, j, 30, 60)
      }
    }
  }

}

class squareGrid{
  constructor(x, y, col, row, siz, color1, color2){
    this.x = x;
    this.y = y;
    this.col = col;
    this.row = row;
    this.siz = siz
    this.color1 = color1;
    this. color2 = color2;
  }

  show(){
    for(let i=this.x; i<this.col*this.siz; i+=this.siz){
      for(let j=this.y; j<this.row*this.siz; j+=this.siz){
        let startColor = color(this.color1)
        let endColor = color(this.color2);
        let grad = lerpColor(startColor, endColor, i/j*0.2)
        fill(grad) 
        strokeWeight(0.01)
        stroke(255)
        square(i, j, this.siz)
      }
    }
  }

}

class rotatedGrid{
  constructor(x, y, col, row, siz, color1, color2){
    this.x = x;
    this.y = y;
    this.col = col;
    this.row = row;
    this.siz = siz
    this.color1 = color1;
    this. color2 = color2;
  }

  show(){
    for(let i=this.x; i<this.x+(this.col*this.siz); i+=this.siz){
      for(let j=this.y; j<this.y+(this.row*this.siz); j+=this.siz){
        let startColor = color(this.color1)
        let endColor = color(this.color2);
        let grad = lerpColor(startColor, endColor, i/j*0.2)
        fill(grad) 
        strokeWeight(1)
        stroke(255)
        push()
        translate(i,j)
        rotate(1)
        square(0, 0, this.siz)
        pop()
      }
    }
  }
}


function gradSticks(x, y, color1, color2){
  strokeWeight(1.5)
  let stickStart = color('rgb(214,53,80)')
  let stickEnd = color('rgb(3,29,88)');
  stroke('rgba(213,209,218,0.54)')
  for(let i=0; i<1.1; i+=0.25){
    colr.push(lerpColor(stickStart, stickEnd, i))
  }
  for(let j=2; j<5; j++){
    fill(colr[j])
    // rect(x, ((y+(60*(j-2))), 30, 60))     
    rect(x, ((y+(60*j))-120), 30, 60)          
  }
  for(let j=1; j<4; j++){
    fill(colr[j])
    rect(x+60, ((y+(60*j))-60), 30, 60)           
  }
  for(let j=0; j<3; j++){
    fill(colr[j])
    rect(x+120, (y+ (60*j)), 30, 60)             
  }
}

function solidSticks(x, y, color1) {
  for(let i=x; i<x*2.5; i+=60){
    for (let j=y; j<y*1.3; j+=60){
      fill(color1)
      rect(i, j+5, 30, 60)
      }
    }
}



function diagonalSticks(x, y, color1, color2){
  for(let i=x; i<x*30; i+=40){
    for (let j=y; j<y*1.5; j+=60){
    push()
    translate(110, -200)
    rotate(0.5)
    let startColor = color('rgb(196,32,60)');
    let endColor = color('rgba(225,220,229,0.97)');
    let grad = lerpColor(startColor, endColor, i/j*0.5)
    stroke('rgba(227,223,231,0.54)')
    fill(grad)
   //cant loop because plus/minus 
    rect(i, j, 30, 60)
    rect(i, j-50, 30, 60)
    rect(i, j+100, 30, 60)
    pop()
    }
  }
}

 








