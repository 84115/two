import Hero from 'objects/Hero';

let hero;

// https://phaser.io/examples/v2/arcade-physics/platformer-tight

export default class GameState extends Phaser.State
{

	create() {

		this.game.stage.backgroundColor = '#000';

	    hero = new Hero(this, 0, 0);
	    this.game.add.existing(hero);

	}

	update() {
	
	}

}
