import Dude1 from 'objects/Dude1';

export default class GameState extends Phaser.State
{

	create() {

		this.game.stage.backgroundColor = '#000';

	    this.dude1 = new Dude1(this, 0, 0, 'dude');
	    this.game.add.existing(this.dude1);
	    this.dude1.tint = Math.random() * 0xffffff;

	}

	update() {
	
	}

}
