import Bullets from 'objects/Bullet';

/*
 * Dude
 * ====
 *
 * A sample prefab (extended game object class), for displaying the Phaser
 * logo.
 */

export default class Dude extends Phaser.Sprite
{

    constructor(game, x, y, asset)
    {
        super(game, x, y, asset);

        this.jumpTimer = 0;

        this.setHealth(10);
        this.setControls();

        this.bullets = new Bullets(this.game);

        this.setPhysics();
    }

    update()
    {
        if (this.alive)
        {
            if (this.game.input.activePointer.isDown)
            {
                this.bullets.fire(this.x, this.y);
            }

            if (this.upKey.isDown && (this.body.blocked.down || this.body.touching.down))
            {
                if (this.game.time.now > this.jumpTimer)
                {
                    this.body.velocity.y = -500;
                    this.jumpTimer = this.game.time.now + 500;
                }
            }

            if (this.leftKey.isDown) {
                this.body.velocity.x = -100;
                this.x--;
            }
            else if (this.rightKey.isDown) {
                this.body.velocity.x = 100;
                this.x++;
            }
            else {
                this.body.velocity.x = 0;
            }
        }
    }

    setHealth(health)
    {
        this.health = health;
        this.maxHealth = this.health;
    }

    setControls()
    {
        this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.fKey = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
    }

    setPhysics()
    {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);

        this.body.gravity.y = 1000;
        this.body.maxVelocity.y = 500;
        this.body.bounce.y = 0.2;
        this.body.collideWorldBounds = true;
    }

    damage(amount)
    {
        super.damage(amount);
    }

}
