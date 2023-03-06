let cellSize;
let grid1

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  grid1 = new Grid(100, 50, 80, 40, 'rgb(190,72,92)', 'rgb(37,54,93)')

  colorMode(RGB);
  stroke(0)
}

function draw() {
  background('rgba(213,209,218,0.54)');
  
  
  // cellSize = min(width / 10, height / 10);
  
  // //rectangular grid in background, recode decode 1
  // for (let x = cellSize -50; x < width; x += cellSize) {
  //   for (let y = cellSize -50; y < height; y += cellSize) {
  //   push()
  //   translate(x,y)
  //   // rotate(0.5)
      
  //   let chance = random(1);
  //   if (chance < 0.5) {
  //     sign = 1;
  //   } else {
  //     sign = -1;
  //   }
  //   let angle = random(0, -60 * sign);
  //   rotate(angle);
      
  //   stroke(255)
  //   fill('rgba(210,209,211,0.41)')
  //   rect(0, 0, 20, 10)
  //   pop()
  //   }
  // } 
  
  //   //vertical grid
  // for(let x=350; x<width-150; x+=15){
  //   for (let y=0; y<height; y+=15){
    
  //   let startColor = color('rgb(37,54,93)')
  //   let endColor = color('rgb(190,72,92)');
  //   let grad = lerpColor(startColor, endColor, x/y*0.2)
      
  //   fill(grad) 
  //   strokeWeight(0.01)
  //   stroke(255)
  //   rect(x, y, 15)
      
  //   strokeWeight(1)
  //   }
  // }

  //  //pink rotated columns
  // for(let x=width*0.05; x<width*1.4; x+=40){
  //   for (let y=height*0.5; y<height*0.7; y+=60){
      
  //   push()
  //   translate(110, -200)
  //   rotate(0.5)
    
  //   let startColor = color('rgb(196,32,60)');
  //   let endColor = color('rgba(225,220,229,0.97)');
  //   let grad = lerpColor(startColor, endColor, x/y*0.5)
    
  //   stroke('rgba(227,223,231,0.54)')
  //   fill(grad)
  //   rect(x, y, 30, 60)
    
  //   rect(x, y-50, 30, 60)
  //   rect(x, y+100, 30, 60)
    
  //   pop()
  //   }
  // }
  
  //   //base, large grid below
  // for (let y=50; y<400; y+=40){
  //   for(let x=100; x < 400; x+=40){
    
  //   let startColor = color('rgb(190,72,92)')
  //   let endColor = color('rgb(37,54,93)');
  //   let grad = lerpColor(startColor, endColor, x/y*0.6)
      
  //   fill(grad) 
  //   stroke(0)
  //   rect(x, y, 80,40)
  //   }
  // }
  
  //  //light blue grid on top
  // for(let x=150; x<300; x+=30){
  //   for (let y=100; y<250; y+=30){
      
  //   let startColor = color('rgb(36,62,122)');
  //   let endColor = color(150);
  //   let grad = lerpColor(startColor, endColor, x/y*0.3)
      
  //   fill(grad)
  //   stroke(255)
  //   rect(x, y, 30, 60)
  //   }
  // }
  
  // //rotated rectangles, recode decode 1
  //  for(let x=200; x<250; x+=12){
  //   for (let y=75; y<110; y+=12){
  //     push()
  //     translate(x,y)
  //     rotate(1)
  //     fill('rgba(213,209,218,0.95)')
  //     rect(0, 0, 10)
  //     pop()
  //   }
  // }
  


  
  // //color palette
  //   let from = color('rgb(190,72,92)')
  //   let to = color('rgb(37,54,93)');

  //   let interA = lerpColor(from, to, 0.33);
  //   let interB = lerpColor(from, to, 0.66);
  //   fill(from);
  //   rect(20, height-80, 20, 60);
  //   fill(interA);
  //   rect(40, height-70, 20, 60);
  //   fill(interB);
  //   rect(60, height-80, 20, 60);
  //   fill(to);
  //   rect(80, height-70, 20, 60);
  

  
  //  //white columns
  // for(let x=width*0.35; x<width*0.9; x+=60){
  //   for (let y=height*0.55; y<height*0.75; y+=60){
  //     fill(255)
  //     rect(x, y+5, 30, 60)
  //     }
  //   }
  
  // //for 3 gradient sticks
  //   strokeWeight(1.5)
  //   let stickStart = color('rgb(214,53,80)')
  //   let stickEnd = color('rgb(3,29,88)');
  //   let stickMiddle1 = lerpColor(stickStart, stickEnd, 0.25);
  //   let stickMiddle2 = lerpColor(stickStart, stickEnd, 0.5);
  //   let stickMiddle3 = lerpColor(stickStart, stickEnd, 0.75);
  //   stroke('rgba(213,209,218,0.54)')
  
  //   fill(stickMiddle2);
  //   rect(width*0.45, (height*0.55)+0, 30, 60);
  //   fill(stickMiddle3);
  //   rect(width*0.45, (height*0.55)+60, 30, 60);
  //   fill(stickEnd);
  //   rect(width*0.45, (height*0.55)+120, 30, 60);
  
  //   fill(stickMiddle1);
  //   rect((width*0.45)+60, (height*0.55)+0, 30, 60);
  //   fill(stickMiddle2);
  //   rect((width*0.45)+60, (height*0.55)+60, 30, 60);
  //   fill(stickMiddle3);
  //   rect((width*0.45)+60, (height*0.55)+120, 30, 60);
  
  //   fill(stickStart);
  //   rect((width*0.45)+120, (height*0.55)+0, 30, 60);
  //   fill(stickMiddle1);
  //   rect((width*0.45)+120, (height*0.55)+60, 30, 60);
  //   fill(stickMiddle2);
  //   rect((width*0.45)+120, (height*0.55)+120, 30, 60);
  
  // //trying to make 3 stick gradients cleaner
  //  // for(let x=width*0.45; x<width*0.5; x+=60){
  //  //  for (let y=height*0.5; y<height*0.7; y+=60){
  //  //    let grad = lerpColor(stickEnd, stickStart, 0)
  //  //    fill(grad)
  //  //    rect(x, y, 30, 60)
  //  //     // console.log(x,y) y=342 402 462, x=283. want 0, 0.25, 0.5. would need a lot of math
  //  //  }
  //  //  }
  
  // strokeWeight(1)

  // for (let y=50; y<400; y+=40){
  //     for(let x=100; x < 400; x+=40){
  //     rect(x, y, 80,40)
  //     }
  //   }

  // grid1.colr()
  grid1.show()
  // grid1.show()
  

  noLoop()
}

function mousePressed(){
  loop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class Grid{
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

        rect(i, j, this.w, this.h)
      }
    }
  }


}


// for (let y=50; y<400; y+=40){
//   for(let x=100; x < 400; x+=40){
  
//   let startColor = color('rgb(190,72,92)')
//   let endColor = color('rgb(37,54,93)');
//   let grad = lerpColor(startColor, endColor, x/y*0.6)
    
//   fill(grad) 
//   stroke(0)
//   rect(x, y, 80,40)
//   }
// }
