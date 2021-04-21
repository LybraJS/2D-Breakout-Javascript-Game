var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 5;
var dy = -2;

var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    drawBall();
    drawPaddle();
    x += dx;
    y += dy;

    if(y - ballRadius < 0 || y + ballRadius > canvas.height) {
        dy = -dy;
    }

    if(x - ballRadius < 0 || x + ballRadius > canvas.width) {
        dx = -dx;
    }

}

setInterval(draw, 10);



