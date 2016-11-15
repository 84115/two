let sprite;
let upKey;
let downKey;
let leftKey;
let rightKey;
let fKey;

export default class GameState extends Phaser.State {

	preload() {
		this.load.image('star', 'assets/star.png');
	}

	create() {
		this.game.stage.backgroundColor = '#000';

	    upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
	    downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
	    leftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
	    rightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
	    fKey = this.input.keyboard.addKey(Phaser.Keyboard.F);

	    let style = { font: "65px Arial", fill: "#ff0044", align: "center" };
	    let text = this.add.text(this.world.centerX, this.world.centerY, "Waddup!", style);

	    text.anchor.set(0.5);

	    sprite = this.add.sprite(0, 0, 'star');

		this.physics.enable(sprite, Phaser.Physics.ARCADE);

	    sprite.body.bounce.y = 0.2;
	    sprite.body.collideWorldBounds = true;

	}

	update() {

	    if (upKey.isDown) {
	        sprite.y--;
	    }
	    else if (downKey.isDown) {
	        sprite.y++;
	    }

	    if (leftKey.isDown) {
	        sprite.x--;
	    }
	    else if (rightKey.isDown) {
	        sprite.x++;
	    }

	}

}
