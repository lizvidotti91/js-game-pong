let ctx/*Canvas Context Responsável por renderizar objetos no canvas*/, player1_y/*Jogador 1*/, player2_y/*Jogador 2*/, p1_points/*Pontos Player 1 */, p2_points /*Pontos Player 2 */
let ball_y_orientation/*Eixo Y da Bola */, ball_x_orientation/*Eixo X da Bola */, ball_x/*Posição X da bola */, ball_y /*Posição Y da Bola */
const h=500
const width=800
const player_width=20
const player_height=200
const player1_x=10
const player2_x= width-player_width-10


function setup(){
    const canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d")
    //inicializa as posições y do p1 e do p2 para metade da tela
    player1_y=player2_y=(h/2)-(player_height/2);
    //inicializa os pontos dos jogadores como 0
    p1_points=0
    p2_points=0

    //define um intervalo de 60fps para o loop
    setInterval(loop,1000/60)

    initBall()

}
function loop(){
    draw()
}

function initBall(){
    console.log(`${p1_points} VS ${p2_points}`)
    ball_y_orientation = Math.pow(2, Math.floor( Math.random() *2)+1) -3
    ball_x_orientation = Math.pow(2, Math.floor( Math.random() *2)+1) -3
    ball_x = width/2 - 10
    ball_y = h/2 -10

}


function draw(){
    //fundo
    drawRect(0,0,width,h,"#000")
    //Jogador 1
    drawRect(player1_x,player1_y, player_width, player_height)
    //Jogador 2
    drawRect(player2_x,player2_y, player_width, player_height)
    //Barra Lateral
    drawRect(width/2-5,0,5,h)
    //bola
    drawRect(ball_x,ball_y,10,10)
    
}
//DrawRect desenha um retangulo dentro de uma função
function drawRect(x,y,w,h,color="#fff"){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,w,h);
    ctx.fillStyle = "#000"
}


setup()
