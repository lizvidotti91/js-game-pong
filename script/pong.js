// Variáveis de Renderização do Canvas
let canvasContext;
let player1Y;
let player2Y;
let p1Points;
let p2Points;

// Variáveis para inicializar e resetar a bolinha
let ballYOrientation;
let ballXOrientation;
let ballX;
let ballY;

// Variáveis de Renderização do Canvas
const heightCanvas = 500;
const widthCanvas = 800;
const playerWidth = 20;
const playerHeight = 200;
const player1X = 10;
const player2X = widthCanvas - playerWidth - 10;

function setup(){
    const canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    //console.log(canvasContext);

    // Inicializa as posições Y do player1 e do player2 para metade da tela
    player1Y = player2Y = (heightCanvas/2) - (playerHeight/2);

    // Inicializa os pontos dos jogadores como 0
    p1Points = 0;
    p2Points = 0;

    // Define um intervalo de 60 fps <<frames por segundo>> para o loop
    setInterval(loop,1000/60);

    // Função para fazer o reset da bolinha
    initBall();
}

function loop(){
    draw();
}

function initBall(){
    console.log(`${p1Points} VS ${p2Points}`);
    ballYOrientation = Math.pow(2, Math.floor(Math.random()*2)+1)-3;
    ballXOrientation = Math.pow(2, Math.floor(Math.random()*2)+1)-3;
    ballX = widthCanvas / 2 - 10;
    ballY = heightCanvas / 2 - 10; 
}

// Desenha os elementos do jogo
function draw(){
    drawRect(0, 0, widthCanvas, heightCanvas,"#000"); // Cor de Fundo
    drawRect(player1X, player1Y, playerWidth, playerHeight, "#fff"); // Player 1
    drawRect(player2X, player2Y, playerWidth, playerHeight, "#fff"); //Player 2
    drawRect(widthCanvas/2 - 5, 0, 5, heightCanvas, "#fff"); // Barra Lateral
    drawRect(ballX, ballY, 10, 10, "#fff"); // Bola
}

// Criar um elemento
function drawRect(x,y,w,h,color="#fff"){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x,y,w,h);
    canvasContext.fillStyle="#000";
}

setup();