let src = ['img1.jpg',
	'img2.jpg',
	'img3.jpg',
	'img4.jpg',
	'img5.jpg',
	'img6.jpg',
	'img7.jpg',
	'img8.jpg',
	'img9.jpg',
	'img10.jpg',
	'img11.jpg',
	'img12.jpg',
	'img13.jpg',
	'img14.jpg',
	'img15.jpg',
	'img16.jpg'
];
let img = [];
let circles = [];

function preload() {
	src.forEach(
		u => img.push(loadImage('https://raw.githubusercontent.com/jeffpaletta/Processing/master/assets/lores/Batch_02/' + u))
	);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	ellipseMode(RADIUS);
	frameRate(15);
	background(0);
	fill(0, 50);
}

function draw() {
	circles.forEach((c, index) => {
		c.ttl -= 1;
		if(c.ttl < 50) {
			ellipse(c.x, c.y, c.r + 1, c.r + 1);
			if (c.ttl < 1) circles.splice(index, 1);
		}
	});
	let r = random(25, 500), x, y;
	let valid = false;
	
	for(let nAttempt = 0; nAttempt < 100 && !valid ; nAttempt += 1) {
		x = floor(random(r, width - r));
		y = floor(random(r, height - r));
		valid = true;
		for(c of circles) {
			if(dist(x, y, c.x, c.y) < c.r + r) {
				valid = false;
				break;
			}
		}
	}
	
	if (valid) {
		circles.push({
			'x' : x,
			'y' : y,
			'r' : r,
			'ttl' : round(random(50, 320))
		});
		translate(x, y);
		rotate(random(TAU));
			
		let N = round(random(50, 300));
		let w = ceil(random(r * TAU / N, 10));
		let dA = TAU / N;
		let Nmix = floor(random(1, 3));
		shuffleFirstImages(Nmix);	
				
		let I = img[0];
		let W = I.width / N;
				
		for(let i = 0; i < N; i += 1) {
			if(Nmix > 1) {
				I = img[floor(random(Nmix))];
				W = I.width / N;
			}
			let j = i;
			if(random(1) < 0.2) {
				j += N + floor(random(-7, 7));
				j %= N;
			}
			rotate(dA);
			image(I, 0, 0, w, r, j * W, 0, W, I.height);
		}
	}
}

function shuffleFirstImages(Nmix) {
	let N = min(Nmix, img.length - 1);
	for(let i = 0 ; i < N; i += 1) {
  	let j = floor(random(N, img.length));
    let k = img[i];
		img[i] = img[j];
		img[j] = k;
	}
}