body {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #87CEEB;
}

.game-container {
    position: relative;
}

canvas {
    display: block;
    background-color: #ffffff;
}

.ui {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-around;
}

.ui div {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
}

.ui h2 {
    margin: 0;
    font-size: 16px;
}

.coming-soon {
    color: red;
}

.locked-button {
    padding: 10px;
    background-color: gray;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: not-allowed;
} 
