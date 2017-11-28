var Sprite = function (options) {
  // Load image
  this.loaded = false;
  this.image = new Image();
  (function (sprite, options) {
    sprite.image.onload = function () {
      // Set default properties

      // Dimensions
      sprite.width = this.width;
      sprite.height = this.height;

      // Frames
      sprite.frames = 1;
      sprite.frameIndex = 0;
      sprite.frameWidth = sprite.width;
      sprite.frameHeight = sprite.height;
      sprite.framesPerRow = Infinity;

      // Offset
      sprite.offset = { x: 0.0, y: 0.0 };

      // Set custom options
      for(var x in options) {
        if(x != 'src') sprite[x] = options[x];
      }

      // Set loaded to true
      sprite.loaded = true;
    }
  })(this, options);
  this.image.src = options.src;
}

Sprite.prototype.draw = function (game, x, y) {
  game.context.drawImage(
    this.image,
    this.frameWidth * (this.frameIndex % this.frames),
    this.frameHeight * Math.floor(this.frameIndex / this.frames),
    this.frameWidth,
    this.frameHeight,
    x + this.offset.x,
    y + this.offset.y,
    this.frameWidth,
    this.frameHeight
  );
}

// Frame methods
Sprite.prototype.nextFrame = function () {
  this.frameIndex = (this.frameIndex + 1) % this.frames;
}

Sprite.prototype.previousFrame = function () {
  this.frameIndex = (this.frameIndex + this.frames - 1) % this.frames;
}

Sprite.prototype.setFrame = function (n) {
  this.frameIndex = n % this.frames;
}
