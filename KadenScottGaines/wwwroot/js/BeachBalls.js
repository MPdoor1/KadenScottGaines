﻿const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let h = canvas.height = window.innerHeight + 20;
let w = canvas.width = window.innerWidth - 12;
const numberOfCircles = 10;
let circles = [];
let color = ['red', 'blue', 'yellow'];

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

        if (this.y + this.radius >= h || this.y - this.radius <= 0) {
            this.dy = (-this.dy) + 2;
            this.y = h - this.radius;
        }
    }
}

setUp()
gameLoop()

function gameLoop() {
    ctx.clearRect(0, 0, w, h)
   
    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i]
        circle.draw(ctx)
        circle.move(circle)
    }
    requestAnimationFrame(gameLoop)
}

function setUp() {
    circles = []
    for (var i = 0; i < numberOfCircles; i++) {
        circles.push(new Circle(Math.floor(Math.random() * w), Math.floor(Math.random() * h), Math.random()* 4, Math.random()*4, 0.5, Math.random()*(25 - 50) +50, color[Math.floor(Math.random()*color.length)]))
    }
}
