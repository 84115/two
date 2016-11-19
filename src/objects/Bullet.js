export default class Bullet extends Phaser.Sprite
{

    constructor(game, x = 0, y = 0, asset = 'star')
    {
        super(game, x, y, 'star');
    }

}
