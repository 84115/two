import Dude1 from 'objects/Dude1';
import Dude2 from 'objects/Dude2';
import Dude3 from 'objects/Dude3';
import Dude4 from 'objects/Dude4';

// https://phaser.io/examples/v2/arcade-physics/platformer-tight

export default class GameState extends Phaser.State
{

	create() {

		this.game.stage.backgroundColor = '#000';

	    this.dude1 = new Dude1(this, 0, 0, 'dude');
	    this.game.add.existing(this.dude1);
	    this.dude1.tint = Math.random() * 0xffffff;

	    this.dude2 = new Dude2(this, 120, 40, 'dude');
	    this.game.add.existing(this.dude2);
	    this.dude2.tint = Math.random() * 0xffffff;

	    this.dude3 = new Dude3(this, 240, 40, 'dude');
	    this.game.add.existing(this.dude3);
	    this.dude3.tint = Math.random() * 0xffffff;

	    this.dude4 = new Dude4(this, 360, 40, 'dude');
	    this.game.add.existing(this.dude4);
	    this.dude4.tint = Math.random() * 0xffffff;

	}

	update() {
	
	}

}
