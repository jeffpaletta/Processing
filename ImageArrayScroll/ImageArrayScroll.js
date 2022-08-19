let img = [];
let x = [];
let y = [];
let sx = [];
let sy = [];

let num = 30;

function preload() {
  for (let i = 0; i < num; i++) {
    let n = floor(random(1000));
    let w = floor(random(2, 6)) * 100;
    let h = floor(random(2, 6)) * 100;
    // img[i] = loadImage("https://picsum.photos/" + w + "/" + h + "?image=" + i*3);
    img[i] = loadImage(`http://fpoimg.com/&{w}x300?text=Hanselman` + w + "/" + h + "?image=" + i*3);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < num; i++) {
    x.push(random(width));
    y.push(random(height));
    sx.push(random(-0.1, 0.1));
    let w = img[i].width;
    let h = img[i].height;
    let n = map(sqrt(w * h), sqrt(200 * 200), sqrt(600 * 600), 3, 0.2);
    sy.push(n);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < num; i++) {
    imageMode(CENTER);
    image(img[i], x[i], y[i]);
    x[i] += sx[i];
    y[i] += sy[i];

    if (y[i] - img[i].height / 2 > height) {
      x[i] = random(width);
      y[i] = y[i] - height - img[i].height - random(100,300);
    }
  }
}