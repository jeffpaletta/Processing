let img = [];
let x = [];
let y = [];
let sx = [];
let sy = [];

let num = 14;

// populate array with images based on 'num'
function preload() {
  for (let i = 1; i < num; i++) {
    img[i] = loadImage('https://raw.githubusercontent.com/jeffpaletta/Processing/master/assets/lores/Batch_02/img' + i + '.jpg' );
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 1; i < num; i++) {
    x.push(random(width));
    y.push(random(height));
    sx.push(random(-0.1, 0.1));
    let w = img[i].width;
    let h = img[i].height;
    let n = map(sqrt(w * h), sqrt(200 * 200), sqrt(800 * 800), 1, 0.2);
    sy.push(n);
  }
}

function draw() {
  background(0);
  for (let i = 1; i < num; i++) {
    imageMode(CENTER);
    image(img[i], x[i], y[i]);
    x[i] += sx[i];
    y[i] += sy[i];

    // Resize image if it is too big to display
    if (y[i] - img[i].height / 2 > height) {
      x[i] = random(width);
      y[i] = y[i] - height - img[i].height - random(100,300);
    }
  }
}