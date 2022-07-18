import PlayerChar from '../objects/playerChar'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText
  player:PlayerChar;
  cursors:Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.player = new PlayerChar(this, this.cameras.main.width / 2, 0);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.fpsText = new FpsText(this);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);
  }

  update() {
    this.fpsText.update();
    const walkSpeed = 200;

    this.player.setVelocity(0);

    if (this.cursors.left.isDown)
    {
      this.player.setVelocityX(-walkSpeed);
    }
    else if (this.cursors.right.isDown)
    {
      this.player.setVelocityX(walkSpeed);
    }

    if (this.cursors.up.isDown)
    {
      this.player.setVelocityY(-walkSpeed);
    }
    else if (this.cursors.down.isDown)
    {
      this.player.setVelocityY(walkSpeed);
    }

    this.player.update();
    
  }
}
