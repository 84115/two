import Dude from 'objects/Dude';

/*
 * Dude
 * ====
 *
 * A sample prefab (extended game object class), for displaying the Phaser
 * logo.
 */

export default class Dude1 extends Dude
{

	create() {
		// this.load.image('hero', 'hero.png');
	}

	constructor(game, x, y, asset) {

		super(game, x, y, asset);

	    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
	    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
	    this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
	    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
	    this.fKey = this.game.input.keyboard.addKey(Phaser.Keyboard.F);

	}

}
