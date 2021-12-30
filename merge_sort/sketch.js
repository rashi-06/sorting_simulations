let values = [];
let w = 5;

let states = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	values = new Array(floor(width / w));
	for (let i = 0; i < values.length; i++) {
		values[i] = random(height);
		states[i] = -1;
	}
	console.log(values);
	mergesort(values);
	console.log(values);
}

async function mergesort(array) {
	var n = array.length,
		a0 = array,
		a1 = new Array(n);
	for (var m = 1; m < n; m <<= 1) {
		for (var i = 0; i < n; i += m << 1) {
			var left = i,
				right = Math.min(i + m, n),
				end = Math.min(i + (m << 1), n);
			await sleep(100);
			merge(a0, a1, left, right, end);
		}
		(i = a0), (a0 = a1), (a1 = i);
	}
	if (array === a1) {
		for (var i = 0; i < n; ++i) {
			array[i] = a0[i];
		}
	}
}

async function merge(a0, a1, left, right, end) {
	for (var i0 = left, i1 = right; left < end; ++left) {
		if (i0 < right && (i1 >= end || a0[i0] <= a0[i1])) {
			a1[left] = a0[i0++];
		} else {
			a1[left] = a0[i1++];
		}
		states[i0] = 0;
		states[i1] = 1;
	}
}

function draw() {
	background(0);
	for (let i = 0; i < values.length; i++) {
		if (states[i] == 0) {
			fill("#FF0000");
		} else if (states[i] == 1) {
			fill("#7FFF00");
		} else {
			fill(255);
		}
		rect(i * w, height - values[i], w, values[i]);
	}
}

async function swap(arr, a, b) {
	await sleep(50);
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}