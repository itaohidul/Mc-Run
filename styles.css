const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mario = new Image();
mario.src = 'mario.png'; // Ensure you have a mario.png image in your project directory

const coin = new Image();
coin.src = 'coin.png'; // Ensure you have a coin.png image in your project directory

const marioWidth = 50;
const marioHeight = 50;
let marioX = 50;
let marioY = canvas.height - marioHeight - 50;
let isJumping = false;
let jumpHeight = 0;
const maxJumpHeight = 100;
const gravity = 5;
let coins = [];
let score = 0;
let level = 1;

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !isJumping) {
        isJumping = true;
    }
});

function generateCoins() {
    for (let i = 0; i < 10; i++) {
        coins.push({
            x: Math.random() * canvas.width,
            y: Math.random() * (canvas.height - marioHeight - 50)
        });
    }
}

function drawMario() {
    if (isJumping) {
        marioY -= gravity;
        jumpHeight += gravity;
        if (jumpHeight >= maxJumpHeight) {
            isJumping = false;
        }
    } else if (jumpHeight > 0) {
        marioY += gravity;
        jumpHeight -= gravity;
    } else {
        marioY = canvas.height - marioHeight - 50;
    }

    ctx.drawImage(mario, marioX, marioY, marioWidth, marioHeight);
}

function drawCoins() {
    coins.forEach((coin, index) => {
        ctx.drawImage(coin, coin.x, coin.y, 30, 30);
        if (marioX < coin.x + 30 && marioX + marioWidth > coin.x &&
            marioY < coin.y + 30 && marioY + marioHeight > coin.y) {
            coins.splice(index, 1);
            score += 10;
        }
    });
}

function checkLevelCompletion() {
    if (coins.length === 0) {
        if (level === 1) {
            document.getElementById('levelComplete').style.display = 'block';
        } else {
            document.getElementById('comingSoon').style.display = 'block';
        }
        cancelAnimationFrame(gameLoopId);
    }
}

function restartGame() {
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('comingSoon').style.display = 'none';
    document.getElementById('levelComplete').style.display = 'none';
    marioX = 50;
    marioY = canvas.height - marioHeight - 50;
    isJumping = false;
    jumpHeight = 0;
    score = 0;
    coins = [];
    level = 1;
    generateCoins();
    gameLoop();
}

function startNextLevel() {
    document.getElementById('levelComplete').style.display = 'none';
    marioX = 50;
    marioY = canvas.height - marioHeight - 50;
    isJumping = false;
    jumpHeight = 0;
    coins = [];
    level = 2; // Example: Setting to the next level
    generateCoins();
    gameLoop();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMario();
    drawCoins();
    checkLevelCompletion();

    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${score}`, 10, 30);

    gameLoopId = requestAnimationFrame(gameLoop);
}

let gameLoopId;
mario.onload = () => {
    generateCoins();
    gameLoop();
}; 
