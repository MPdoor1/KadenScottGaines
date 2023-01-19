const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let h = canvas.height = 300;
let w = canvas.width = window.innerWidth - 12;

let circles = [];
let color = ['#ddf3fe', '#926f47', '#343631', '#D3D3D3', '#89d0ee'];

class Circle {
    constructor(x, y, dx, dy, g, radius, color) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.g = g
        this.color = color
        this.radius = radius
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    move(circles) {
        this.check(circles)
        this.x += this.dx;
        this.y += this.dy;
        this.dy += this.g;
    }
    check() {
        if (this.x + this.radius >= w) {
            this.dx = -this.dx;
            this.x = w - this.radius;
        }
        if (this.x - this.radius < 0) {
            this.dx = -this.dx;
            this.x = 0 + this.radius;
        }

        if (this.y + this.radius >= h ) {
            this.dy = (-this.dy) + 0.5;
            this.y = h - this.radius;
        }
        if (this.y - this.radius <= 0) {
            this.dy = (-this.dy) + 1;
            this.y = 0 + this.radius;
        }
    }
}

function submitForm() {
    var numberOfCircles = document.getElementById("userInput").value;
    setUp(numberOfCircles)
    gameLoop()
}

function gameLoop() {
    ctx.clearRect(0, 0, w, h)
   
    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i]
        circle.draw(ctx)
        circle.move(circle)
    }

    requestAnimationFrame(gameLoop)
}

function setUp(numberOfCircles) {
    circles = []
    for (var i = 0; i < numberOfCircles; i++) {
        circles.push(new Circle(Math.floor(Math.random() * w), Math.floor(Math.random() * 100), Math.random()* 3, Math.random()*3, 0.25, Math.random()*(25 - 50) +50, color[Math.floor(Math.random()*color.length)]))
    }
}

