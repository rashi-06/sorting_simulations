let w = 5;
let states = [];

function setup() {
	createCanvas(windowWidth, windowHeight - 100);
	arr = new Array(floor(width / w));
	for (let i = 0; i < arr.length; i++) {
		arr[i] = random(height);
		states[i] = -1;
	}
	bubble_sort();
}

let b = 0;

function draw() {
	// frameRate(10);
	background(0);
	for (let i = 0; i < arr.length; i += 1) {
		if (states[i] == 0) {
			fill("#FF0000");
		} else if (states[i] == 1) {
			fill("#7FFF00");
		} else {
			fill(255);
		}
		rect(i * w, height - arr[i], w, arr[i]);
	}
}

async function bubble_sort() {
	for (let a = 0; a < arr.length; a++) {
		for (b = 0; b < arr.length; b++) {
			if (arr[b] > arr[b + 1]) {
				await swap(arr, b, b + 1);
			}
		}
		states[arr.length - a - 1] = 0;
	}
	noLoop();
}

async function swap(array, first, sec) {
	states[first] = 1;
	await sleep(0);

	let temp = array[first];
	array[first] = array[sec];
	array[sec] = temp;
	states[first] = -1;
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}