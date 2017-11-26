var Sprite = function (options) {
  // Load image
  this.image = new Image();
  (function (sprite) {
    sprite.image.onload = function () {
      sprite.width = this.width / options.frames;
      sprite.height = this.height;
    }
  })(this);
  this.image.src = options.src;

  // Frameindex
  this.frameIndex = 0;
  this.frameLength = options.frames;

  // Offset
  this.offset = { x: 0.0, y: 0.0 };
}

Sprite.prototype.draw = function (game, x, y) {
  game.context.drawImage(
    this.image,
    this.frameIndex * this.width,
    0,
    this.width,
    this.height,
    x + this.offset.x,
    y + this.offset.y,
    this.width,
    this.height
  );
}

// Frame methods
Sprite.prototype.nextFrame = function () {
  this.frameIndex = (this.frameIndex + 1) % this.frameLength;
}

Sprite.prototype.previousFrame = function () {
  this.frameIndex = (this.frameIndex + this.frameLength - 1) % this.frameLength;
}

Sprite.prototype.setFrame = function (n) {
  this.frameIndex = n % this.frameLength;
}
