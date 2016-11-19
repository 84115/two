import Bullet from 'objects/Bullet';

/*
 * Dude
 * ====
 *
 * A sample prefab (extended game object class), for displaying the Phaser
 * logo.
 */

export default class Dude extends Phaser.Sprite {

  create() {
  	// this.load.image('hero', 'hero.png');
  }

  constructor(game, x, y) {
    super(game, x, y, 'hero');
  }

  update() {

  }

}
