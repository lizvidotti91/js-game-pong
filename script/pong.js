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

// Variáveis para mover as barras laterais
let player1_key;
let player2_key;

// Iniciar o jogo quando clica no botão
function start() {

    // Esconde a tela inicial e abre a tela do jogo
    window.document.getElementById('canvas').style.display = 'block';
    window.document.getElementById('game').style.display = 'none';

    function setup() {
        const canvas = document.getElementById('canvas');
        canvasContext = canvas.getContext('2d');
        //console.log(canvasContext);

        // Inicializa as posições Y do player1 e do player2 para metade da tela
        player1Y = player2Y = (heightCanvas / 2) - (playerHeight / 2);

        // Inicializa os pontos dos jogadores como 0
        p1Points = 0;
        p2Points = 0;

        // Define um intervalo de 60 fps <<frames por segundo>> para o loop
        setInterval(loop, 1000 / 60);

        // Função para fazer o reset da bolinha
        initBall();
    }

    function loop() {

        // Movendo as barras laterais
        if (player1_key == 87 && player1Y > 0) {
            player1Y = player1Y - 10;
        } else if (player1_key == 83 && player1Y + playerHeight < heightCanvas) {
            player1Y = player1Y + 10;
        }

        // Movendo as barras laterais
        if (player2_key == 38 && player2Y > 0) {
            player2Y = player2Y - 10;
        } else if (player2_key == 40 && player2Y + playerHeight < heightCanvas) {
            player2Y = player2Y + 10;
        }

        // Se a bola está colidindo com a barra do Player 1
        if (ballX >= player1X && ballX <= player1X + 10 && ballY >= player1Y && ballY <= player1Y + playerHeight) {
            // A bola muda de direção e vai para a direita
            ballXOrientation = 1;
        }

        // Se a bola está colidindo com a barra da Player 2
        if (ballX >= player2X && ballX <= player2X + 10 && ballY >= player2Y && ballY <= player2Y + playerHeight) {
            // A bola muda de direção e vai para a esquerda
            ballXOrientation = -1;
        }

        // Se a bola bateu no chão ou no teto
        if (ballY + 10 >= heightCanvas || ballY <= 0) {
            // A bola se move para cima ou para baixo
            ballYOrientation = ballYOrientation * -1;
        }

        // Move a bola nos eixos X e Y
        ballX = ballX + 5 * ballXOrientation;
        ballY = ballY + 5 * ballYOrientation;

        // Se a bola estiver numa posição maior que a largura do canvas
        if (ballX + 10 > widthCanvas) { // Aqui, a bola ultrapassou a margem direita do canvas
            p1Points = p1Points + 1;
            initBall(); // o jogo recomeça
        } else if (ballX < 0) { // Aqui, a bola ultrapassou a margem esquerda do canvas
            p2Points = p2Points + 1;
            initBall(); // o jogo recomeça
        }

        if (player1_key == 87 && player1Y > 0) {
            player1Y = player1Y - 10;
        } else if (player1_key == 83 && player1Y + playerHeight < heightCanvas) {
            player1Y = player1Y + 10;
        }

        if (player2_key == 38 && player2Y > 0) {
            player2Y = player2Y - 10;
        } else if (player2_key == 40 && player2Y + playerHeight < heightCanvas) {
            player2Y = player2Y + 10;
        }

        // Desenha os elementos do jogo
        draw();
        // Função para mostrar o placar final, quando o vencedor chegar a 10 pontos
        finalGame();
    }

    function initBall() {
        console.log(`${p1Points} VS ${p2Points}`);
        ballYOrientation = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3;
        ballXOrientation = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3;
        ballX = widthCanvas / 2 - 10;
        ballY = heightCanvas / 2 - 10;
    }

    // Desenha os elementos do jogo
    function draw() {
        drawRect(0, 0, widthCanvas, heightCanvas, "#000"); // Cor de Fundo
        drawRect(player1X, player1Y, playerWidth, playerHeight, "#fff"); // Player 1
        drawRect(player2X, player2Y, playerWidth, playerHeight, "#fff"); //Player 2
        drawRect(widthCanvas / 2 - 5, 0, 5, heightCanvas, "#fff"); // Barra Lateral
        drawRect(ballX, ballY, 10, 10, "#fff"); // Bola

        writePoints(); // Escrevendo os pontos na tela
    }

    // Criar um elemento
    function drawRect(x, y, w, h, color = "#fff") {
        canvasContext.fillStyle = color;
        canvasContext.fillRect(x, y, w, h);
        canvasContext.fillStyle = "#000";
    }

    // Adicionando .eventListener() para controlar as barras laterais do jogo
    // Ele dispara uma função quando o evento acontece
    window.document.addEventListener("keydown", function (ev) {
        // Para o código 87, use o W em seu teclado
        // Para o código 83, use o S em seu teclado
        if (ev.keyCode == 87 || ev.keyCode == 83) {
            player1_key = ev.keyCode;
        }

        // Para o código 38, use o arrow up em seu teclado
        // Para o código 40, uso o arrow down em seu teclado
        if (ev.keyCode == 38 || ev.keyCode == 40) {
            player2_key = ev.keyCode;
        }
    })

    // Escrevendo os pontos no Canvas
    function writePoints() {
        canvasContext.font = "50px monospace";
        canvasContext.fillStyle = "#fff";

        canvasContext.fillText(p1Points, widthCanvas / 4, 50); // metade da tela do player 1
        canvasContext.fillText(p2Points, 3 * (widthCanvas / 4), 50); // metade da tela do player 2
    }

    // Função para mostrar o placar final, quando o vencedor chegar a 10 pontos
    function finalGame() {
        let score = window.document.getElementById('score');

        if (p1Points == 5 || p2Points == 10) {
            window.document.getElementById('canvas').style.display = 'none';
            score.style.display = 'block';

            score.innerHTML = `
                <h1 style = "color: white; font-size: 50px; text-align: center"> GAME OVER! </h1>
                <h5 style = "color: white; font-size: 30px; text-align: center"> ${p1Points} X ${p2Points} <h5>
            `;
        }
    }

    setup();
}