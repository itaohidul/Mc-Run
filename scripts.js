const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

let gameSpeed = 5;
let gravity = 1;

let player = {
    x: 50,
    y: 150,
    width: 50,
    height: 50,
    speed: 0,
    jumpPower: -15,
    isJumping: false
};

let ground = {
    x: 0,
    y: canvas.height - 50,
    width: canvas.width,
    height: 50
};

let obstacles = [];

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    player.speed += gravity;
    player.y += player.speed;

    if (player.y + player.height > ground.y) {
        player.y = ground.y - player.height;
        player.isJumping = false;
    }

    ctx.fillStyle = 'green';
    ctx.fillRect(ground.x, ground.y, ground.width, ground.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(gameLoop);
}

canvas.addEventListener('click', () => {
    if (!player.isJumping) {
        player.speed = player.jumpPower;
        player.isJumping = true;
    }
});

gameLoop();

// Daily Login Bonus Logic
let lastLogin = localStorage.getItem('lastLogin');
let loginStreak = localStorage.getItem('loginStreak') || 0;
let today = new Date().toDateString();

if (lastLogin !== today) {
    loginStreak++;
    localStorage.setItem('lastLogin', today);
    localStorage.setItem('loginStreak', loginStreak);
}

document.getElementById('claimBonus').addEventListener('click', () => {
    let bonus = Math.min(loginStreak * 50, 500);
    document.getElementById('bonusMessage').innerText = `You claimed ${bonus} coins!`;
});

// Spin Wheel Logic
document.getElementById('spinWheel').addEventListener('click', () => {
    let result = Math.floor(Math.random() * 101);
    document.getElementById('spinResult').innerText = `You won ${result} coins!`;
}); 
