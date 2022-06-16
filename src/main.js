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


ctx.fillStyle = 'red';
ctx.fillRect(30, 30, 100, 100);

console.log(update)

function update() {
	window.requestAnimationFrame(update);
}