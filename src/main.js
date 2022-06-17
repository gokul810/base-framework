/* A base boiler plate for making games with HTML & JS :) */

// Bunch Of Errors

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = window.innerWidth;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;
// Basic Fixes Done
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);

class Sprite {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
   }
   draw() {
   	ctx.fillStyle = this.color;
       ctx.fillRect(this.x, this.y, this.width, this.height, this.color);
   }
}

var player = new Sprite(20, 20, 50, 50, 'green');
player.draw();

console.warn(player);

function update() {
	window.requestAnimationFrame(update);
}