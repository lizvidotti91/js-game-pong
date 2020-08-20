// Variáveis de Renderização do Canvas
var canvasContext;
var player1Y;
var player2Y;
var p1Points;
var p2Points;

// Variáveis para inicializar e resetar a bolinha
var ballYOrientation;
var ballXOrientation;
var ballX;
var ballY;

// Variáveis de Renderização do Canvas
const heightCanvas = 500;
const widthCanvas = 800;
const playerWidth = 20;
const playerHeight = 200;
const player1X = 10;
const player2X = widthCanvas - playerWidth - 10;

function setup(){
    const canvas = document.querySelector('div#canvas');
    canvasContext = canvas.getContext("2d");

    // Inicializa as posições Y do player1 e do player2 para metade da tela
    player1Y = player2Y = (heightCanvas/2) - (playerHeight/2);

    // Inicializa os pontos dos jogadores como 0
    p1Points = 0;
    p2Points = 0;

    // Define um intervalo de 60 fps <<frames por segundo>> para o loop
    setInterval(loop,1000/60);
}

function loop(){

}

setup();

function initBall(){
    console.log(`${p1Points} VS ${p2Points}`);
    ballYOrientation = Math.pow(2, Math.floor(Math.random()*2)+1)-3;
    ballXOrientation = Math.pow(2, Math.floor(Math.random()*2)+1)-3;
    ballX = widthCanvas / 2 - 10;
    ballY = heightCanvas / 2 - 10; 
}