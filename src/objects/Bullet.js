export default class Bullet extends Phaser.Group
{

    constructor(game)
    {
        super(game);

        this.enableBody = true;
        this.createMultiple(50, 'star');
        this.setAll('checkWorldBounds', true);
        this.setAll('outOfBoundsKill', true);

        this.fireRate = 100;
        this.nextFire = 0;
    }

    fire(x, y, follow)
    {
        if (this.game.time.now > this.nextFire && this.countDead() > 0)
        {
            this.nextFire = this.game.time.now + this.fireRate;

            this.bullet = this.getFirstDead();
            this.bullet.reset(x, y);
            this.bullet.tint = Math.random() * 0xffffff;

            this.game.physics.arcade.moveToPointer(this.bullet, 500);
        }
    }

}
