import Bullet from 'objects/Bullet';

let upKey;
let downKey;
let leftKey;
let rightKey;
let fKey;

let bullets;
let fireRate = 100;
let nextFire = 0;

let jumpTimer = 0;
/*
 * Dude
 * ====
 *
 * A sample prefab (extended game object class), for displaying the Phaser
 * logo.
 */

export default class Dude extends Phaser.Sprite
{

	create() {
		// this.load.image('hero', 'hero.png');
	}

	constructor(game, x, y) {

		super(game, x, y, 'hero');

	    upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
	    downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
	    leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
	    rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
	    fKey = this.game.input.keyboard.addKey(Phaser.Keyboard.F);

		bullets = this.game.add.group();
		bullets.enableBody = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;

		bullets.createMultiple(50, 'star');
		bullets.setAll('checkWorldBounds', true);
		bullets.setAll('outOfBoundsKill', true);

		this.game.physics.enable(this, Phaser.Physics.ARCADE);

	    this.body.gravity.y = 1000;
	    this.body.maxVelocity.y = 500;

	    this.body.bounce.y = 0.2;
	    this.body.collideWorldBounds = true;
	}

	update() {

		if (this.game.input.activePointer.isDown)
		{
			this.fire();
		}

	    if (upKey.isDown)
		{
		    if (this.body.onFloor() && this.game.time.now > jumpTimer)
		    {
		        this.body.velocity.y = -500;
		        jumpTimer = this.game.time.now + 750;
		    }
		}

	    if (leftKey.isDown) {
	    	this.body.velocity.x = -100;
	        this.x--;
	    }
	    else if (rightKey.isDown) {
	    	this.body.velocity.x = 100;
	        this.x++;
		}
		else {
			this.body.velocity.x = 0;
		}

	}

	fire() {

		if (this.game.time.now > nextFire && bullets.countDead() > 0)
		{
			nextFire = this.game.time.now + fireRate;

			var bullet = bullets.getFirstDead();

			bullet.reset(this.x, this.y);

			this.game.physics.arcade.moveToPointer(bullet, 300);
		}

	}

}
