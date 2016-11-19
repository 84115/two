import Dude from 'objects/Dude';

/*
 * Dude
 * ====
 *
 * A sample prefab (extended game object class), for displaying the Phaser
 * logo.
 */

export default class Dude3 extends Dude
{

	create() {
		// this.load.image('hero', 'hero.png');
	}

	constructor(game, x, y, asset) {

		super(game, x, y, asset);

	    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.I);
	    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
	    this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
	    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.L);
	    this.fKey = this.game.input.keyboard.addKey(Phaser.Keyboard.F);

	}

}
