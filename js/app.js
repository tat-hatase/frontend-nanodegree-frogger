// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = y;
	// Each enemy is assined a random speed
    this.speed = Math.random()*300+150;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed*dt;
	// Once an enemy gets to the end of the frame, it returns
	// to the left side at one of the three rows at random
	// with a new assigned speed.
    if (this.x >=505) {
        this.x = 0;
        this.y = Math.floor(Math.random()*3)*87 + 60;
        this.speed = Math.random()*300+150;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 400;
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {

};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Takes the directional input and update the player's location
// information apprpriately.
Player.prototype.handleInput = function(direction) {
    if (direction === 'left'){
        if (this.x > 0) {
            this.x = this.x - 101;
        };
    };
    if (direction === 'right'){
        if (this.x < 404) {
            this.x = this.x + 101;
        }; 
    };
    if (direction === 'up'){
        if (this.y > 87) {
            this.y = this.y - 87;
        }
		// Once the player reaches the river, they return
		// to the initial position.
        else {
            this.x = 202;
            this.y = 400;
        };
    };
    if (direction === 'down'){
        if (this.y < 400) {
            this.y = this.y + 87;
        }; 
    };
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// The game begins with each row having an enemy.
var bug1 = new Enemy(60);
var bug2 = new Enemy(147);
var bug3 = new Enemy(234);

var allEnemies = [bug1, bug2, bug3];

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
