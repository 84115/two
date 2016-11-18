let sprite;

let upKey;
let downKey;
let leftKey;
let rightKey;
let fKey;

let bullets;

let fireRate = 100;
let nextFire = 0;

// https://phaser.io/examples/v2/arcade-physics/platformer-tight

export default class GameState extends Phaser.State {

	preload() {
		// game.load.image('star', 'star.png');
	}

	create() {
		this.game.stage.backgroundColor = '#000';

	    bullets = this.add.group();
	    bullets.enableBody = true;
	    bullets.physicsBodyType = Phaser.Physics.ARCADE;

	    bullets.createMultiple(50, 'star');
	    bullets.setAll('checkWorldBounds', true);
	    bullets.setAll('outOfBoundsKill', true);

	    upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
	    downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
	    leftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
	    rightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
	    fKey = this.input.keyboard.addKey(Phaser.Keyboard.F);

	    sprite = this.add.sprite(0, 0, 'hero');

		this.physics.enable(sprite, Phaser.Physics.ARCADE);

		sprite.body.gravity.y = 100;

	    sprite.body.bounce.y = 0.2;
	    sprite.body.collideWorldBounds = true;

	}

	update() {

	    if (this.input.activePointer.isDown)
	    {
	        this.fire();
	    }

	    if (upKey.isDown) {
	        sprite.body.velocity.y = -50;
	        sprite.y--;
	    }
	    else if (downKey.isDown) {
	        sprite.y++;
	    }

	    if (leftKey.isDown) {
	    	sprite.body.velocity.x = -50;
	        sprite.x--;
	    }
	    else if (rightKey.isDown) {
	    	sprite.body.velocity.x = 50;
	        sprite.x++;
		}
		else {
			sprite.body.velocity.x = 0;
		}

	}

	fire() {

	    if (this.time.now > nextFire && bullets.countDead() > 0)
	    {
	        nextFire = this.time.now + fireRate;

	        var bullet = bullets.getFirstDead();

	        bullet.reset(sprite.x, sprite.y);

	        this.physics.arcade.moveToPointer(bullet, 300);
	    }

	}

}
