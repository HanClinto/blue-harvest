export default class PlayerChar extends Phaser.Physics.Arcade.Sprite {
  
  // currentFrame number
  currentFrame:number = 0;
  // The frameset representing the direction we're currently facing
  spriteFrameset:number = 0;
  lastPositionX:number = 0;
  lastPositionY:number = 0;

  walkFrame:number = 0;

  constructor(scene, x, y) {
    super(scene, x, y, 'jawa', 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setScale(4);
    this.setCollideWorldBounds(true)
//      .setInteractive()
      .on('pointerdown', () => {
        this.setVelocityY(-400);
        this.currentFrame = (this.currentFrame + 1) % 16;
        this.setFrame(this.currentFrame);
      });
  }

  update() {
    // Down, right, up, left
    // Read the velocity of the object and see if we are falling
    if (this.body.velocity.y < 0) {
      this.spriteFrameset = 2;
    }
    if (this.body.velocity.y > 0) {
      this.spriteFrameset = 0;
    }
    if (this.body.velocity.x > 0) {
      this.spriteFrameset = 1;
    }
    if (this.body.velocity.x < 0) {
      this.spriteFrameset = 3;
    }
    const deltaX = Math.abs(this.lastPositionX - this.x);
    const deltaY = Math.abs(this.lastPositionY - this.y);
    const walkSpeed = 8;
    if (deltaX > walkSpeed || deltaY > walkSpeed) {
      this.walkFrame = (this.walkFrame + 1) % 4;
      this.lastPositionX = this.x;
      this.lastPositionY = this.y;
    }
    var animFrame = this.spriteFrameset * 4 + this.walkFrame;
    this.setFrame(animFrame);
  }
}
