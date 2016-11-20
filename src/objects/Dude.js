import Bullet from 'objects/Bullet';

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

        this.game.physics.enable(this, Phaser.Physics.ARCADE);

        this.jumpTimer = 0;

        this.health = 10;
        this.maxHealth = this.health;

        this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.fKey = this.game.input.keyboard.addKey(Phaser.Keyboard.F);

        this.bullets = new Phaser.Group(this.game);
        this.bullets.enableBody = true;
        this.bullets.createMultiple(50, 'star');
        this.bullets.setAll('checkWorldBounds', true);
        this.bullets.setAll('outOfBoundsKill', true);

        this.fireRate = 100;
        this.nextFire = 0;

        this.body.gravity.y = 1000;
        this.body.maxVelocity.y = 500;
        this.body.bounce.y = 0.2;
        this.body.collideWorldBounds = true;
    }

    update()
    {
        if (this.alive)
        {
            if (this.game.input.activePointer.isDown)
            {
                this.fire();
            }

            if (this.upKey.isDown)
            {
                if (this.game.time.now > this.jumpTimer)
                {
                    this.body.velocity.y = -500;
                    this.jumpTimer = this.game.time.now + 1000;
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

    fire()
    {
        if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0)
        {
            this.nextFire = this.game.time.now + this.fireRate;

            this.bullet = this.bullets.getFirstDead();
            this.bullet.reset(this.x, this.y);
            this.bullet.tint = Math.random() * 0xffffff;

            this.game.physics.arcade.moveToPointer(this.bullet, 300);
        }
    }

    damage(amount)
    {
        super.damage(amount);
    }

}
