import Hero from 'objects/Hero';

let hero;

let upKey;
let downKey;
let leftKey;
let rightKey;
let fKey;

let bullets;

let fireRate = 100;
let nextFire = 0;

var jumpTimer = 0;

// https://phaser.io/examples/v2/arcade-physics/platformer-tight

export default class GameState extends Phaser.State {

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

	    hero = new Hero(this, 0, 0);
	    this.game.add.existing(hero)

		this.physics.enable(hero, Phaser.Physics.ARCADE);

	    hero.body.gravity.y = 1000;
	    hero.body.maxVelocity.y = 500;

	    hero.body.bounce.y = 0.2;
	    hero.body.collideWorldBounds = true;
	}

	update() {

	    if (this.input.activePointer.isDown)
	    {
	        this.fire();
	    }

	    if (upKey.isDown)
	    {

		    if (hero.body.onFloor() && this.time.now > jumpTimer)
		    {
		        hero.body.velocity.y = -500;
		        jumpTimer = this.time.now + 750;
		    }
	    }

	    if (leftKey.isDown) {
	    	hero.body.velocity.x = -100;
	        hero.x--;
	    }
	    else if (rightKey.isDown) {
	    	hero.body.velocity.x = 100;
	        hero.x++;
		}
		else {
			hero.body.velocity.x = 0;
		}

	}

	fire() {

	    if (this.time.now > nextFire && bullets.countDead() > 0)
	    {
	        nextFire = this.time.now + fireRate;

	        var bullet = bullets.getFirstDead();

	        bullet.reset(hero.x, hero.y);

	        this.physics.arcade.moveToPointer(bullet, 300);
	    }

	}

}
