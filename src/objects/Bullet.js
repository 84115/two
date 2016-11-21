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

}
