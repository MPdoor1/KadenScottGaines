const canvas = document.getElementById('canvas')
const index = document.getElementById('indexPageContainer');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Variables
const beachBall = {
    x: 1000,
    y: 300,
    r: 50,
    dx: 1.5,
    dy: 0.25
}

let gravity = {
    g: 0.5
}

//running the whole function
function animate() {
    //Clear Page
    c.clearRect(0, 0, innerWidth, innerHeight);

    //beachBall
    c.beginPath();
    c.arc(beachBall.x, beachBall.y, beachBall.r, 0, Math.PI * 2, false);
    c.fillStyle = '#000';
    c.fill();

    //moving the beachBall
    beachBall.x -= beachBall.dx;
    beachBall.y -= beachBall.dy
    beachBall.dy -= gravity.g

    //making it bounce
    if (beachBall.y + beachBall.r >= innerHeight) {
        beachBall.dy = -beachBall.dy
    }

    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)