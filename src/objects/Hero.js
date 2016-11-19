import Bullet from 'objects/Bullet';

let bullets;
let fireRate = 100;
let nextFire = 0;

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
