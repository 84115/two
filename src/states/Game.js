import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {

	create() {
		let text = new RainbowText(
			this.game,
			this.game.world.centerX,
			this.game.world.centerY,
			"- phaser -\nwith a sprinkle of\nES6 dust!"
		);

		text.anchor.set(0.5);
	}

}

export default GameState;
