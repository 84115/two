import Hero from 'objects/Hero';

let hero;

let upKey;
let downKey;
let leftKey;
let rightKey;
let fKey;

var jumpTimer = 0;

// https://phaser.io/examples/v2/arcade-physics/platformer-tight

export default class GameState extends Phaser.State
{

	create() {

		this.game.stage.backgroundColor = '#000';

	    upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
	    downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
	    leftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
	    rightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
	    fKey = this.input.keyboard.addKey(Phaser.Keyboard.F);

	    hero = new Hero(this, 0, 0);
	    this.game.add.existing(hero);

	}

	update() {
	
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

}
