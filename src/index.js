// Import game states.
import * as states from 'states';

class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);

  		// Dynamically add all required game states.
		Object.entries(states).forEach(([key, state]) => this.state.add(key, state));

		this.state.start('Boot');
	}

    quitGame(pointer) {
        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        // this.state.start('MainMenu');
    }

}

const game = new Game;
