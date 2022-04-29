let cvs = document.getElementById('canvas');
let ctx = cvs.getContext("2d");

let bird = new Image ();
let bg = new Image ();
let ground = new Image ();
let flapUp = new Image ();
let flapBottom = new Image ();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
ground.src = "images/ground.png";
flapUp.src = "images/flapUp.png";
flapBottom.src = "images/flapBottom.png";

let gap = 90;

//blocks
let flap = [];
flap[0] = {
    x : cvs.width,
    y : 0
}

// Audio files
let fly = new Audio();
let audio = new Audio();
fly.src = "audio/fly.mp3";
audio.src = "audio/score.mp3";

// click any button
document.addEventListener("keydown", moveUp);

function moveUp () {
    yPos -= 35;
    fly.play();
}

let score = 0;
// bird position
let xPos = 15;
let yPos =180;
let gravity = 1.4;


function draw() {
    ctx.drawImage(bg, 0, 0);
    for(let i = 0; i < flap.length; i++){
        ctx.drawImage(flapUp, flap[i].x, flap[i].y);
        ctx.drawImage(flapBottom, flap[i].x, flap[i].y + flapUp.height + gap);
        flap[i].x--;

        if (flap[i].x == 80) {
            flap.push ({
                x : cvs.width,
                y : Math.floor(Math.random() * flapUp.height) - flapUp.height
            });
        }
        if (xPos + bird.width >= flap[i].x
            && xPos <= flap[i].x + flapUp.width
            && (yPos <= flap[i].y + flapUp.height
                || yPos + bird.height >= flap[i].y + flapUp.height + gap)
            ||yPos + bird.height >= cvs.height - ground.height
            || yPos + bird.height <= 0)
             {
            location.reload(); // TRY AGAIN
        }
        if (flap[i].x == 15) {
            score++;
            audio.play();
        }
    }

    ctx.drawImage(ground, 0, cvs.height - ground.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += gravity;

    ctx.fillStyle = "#000";
    ctx.font = "24px Arial";
    ctx.fillText("Счёт: " + score, 15, cvs.height - 20);
    requestAnimationFrame(draw)
}

let button = document.getElementsByClassName('red')
    document.addEventListener('click',draw)

flapBottom.onload = function () {
    document.getElementById('btn').onclick = function () {
        this.disabled = "disabled";
    }
}

document.getElementById('blue').onclick = function () {
    this.disabled = "disabled";
    location.reload();
}









