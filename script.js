// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;
// ==========Ball====================================
const moveball = document.querySelector('#uwu');
let ballPositionX = GAME_AREA_WIDTH/2;
let ballPositionY = GAME_AREA_HEIGHT/2;
let ballVelo = 1;
let ballRadius = 20;
let dy = -1;
let dx = -1;

// Update the pong world
function update() {
// ====================paddles=======================
    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    // ================ball=========================
    
    // ballPositionX++;
    // ballPositionY++;
    ballPositionY = ballPositionY + dy;
    ballPositionX = ballPositionX + dx;
    if(ballPositionY >= GAME_AREA_HEIGHT-BALL_SIZE || ballPositionY < 0 ){
        dy = ballPositionY * dy;
    }
    if(ballPositionX > GAME_AREA_WIDTH-BALL_SIZE-BALL_SIZE || ballPositionX  < 0 ){
        dx = ballPositionX * dx;
    }
    moveball.style.top = `${ballPositionY}px`;
    moveball.style.left = `${ballPositionX}px`;
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);