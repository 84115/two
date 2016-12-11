import Dude from 'objects/Dude';
import Dude2 from 'objects/Dude2';

export default class GameState extends Phaser.State
{

	create()
	{
		this.game.stage.backgroundColor = '#000';

		this.game.world.setBounds(0, 0, 1600, 600);

	    this.dude = new Dude(this, 0, 0, 'dude');
	    this.game.add.existing(this.dude);
	    this.dude.tint = Math.random() * 0xffffff;

	    this.enemy = new Dude2(this, 120, 400, 'dude');
	    this.game.add.existing(this.enemy);
	    this.enemy.tint = Math.random() * 0xffffff;

		this.platforms = this.add.physicsGroup();
		this.platforms.create(200, 550, 'dude');
		this.platforms.create(300, 500, 'dude');
		this.platforms.create(100, 450, 'dude');
		this.platforms.create(400, 400, 'dude');
		this.platforms.create(500, 350, 'dude');
		this.platforms.setAll('body.allowGravity', false);
		this.platforms.setAll('body.immovable', true);

		this.activePlayer = this.dude;

		this.cKey = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
		this.cKey.onDown.add(function(){
			if (this.activePlayer == this.dude)
			{
				this.activePlayer = this.enemy;
			}
			else
			{
				this.activePlayer = this.dude;
			}

			this.game.camera.follow(this.activePlayer, Phaser.Camera.FOLLOW_LOCKON);
		}, this);

		this.game.camera.follow(this.activePlayer, Phaser.Camera.FOLLOW_LOCKON);
	}

	update()
	{
		this.game.physics.arcade.collide(this.dude, this.enemy);
    	this.game.physics.arcade.collide(this.dude, this.platforms);
    	this.game.physics.arcade.collide(this.enemy, this.platforms);
	}

	render()
	{
	    // this.game.debug.cameraInfo(this.game.camera, 32, 32);
    	// this.game.debug.spriteCoords(this.dude, 32, 500);
	}

}
