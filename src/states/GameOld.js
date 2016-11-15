import RainbowText from 'objects/RainbowText';

export default class GameState extends Phaser.State {

	create() {
		this.game.stage.backgroundColor = '#000';

		let text = new RainbowText(
			this.game,
			this.game.world.centerX,
			this.game.world.centerY,
			"- phaser -\nwith a sprinkle of\nES6 dust!"
		);

		text.anchor.set(0.5);
	}

}
