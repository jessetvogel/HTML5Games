var Sprite = function (game, options) {
  // Set game
  this.game = game;

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

      // Scale
      sprite.scale = { x: 1.0, y: 1.0 };

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

Sprite.prototype.draw = function (x, y, camera = null) {
  // If not yet loaded, don't draw
  if(!this.loaded) return;

  // Determine coordinates where to draw to
  var from = { x: x + this.offset.x * this.scale.x, y: y + this.offset.y * this.scale.y };
  var to = { x: from.x + this.frameWidth * this.scale.x, y: from.y + this.frameHeight * this.scale.y };
  if(camera != null) {
    camera.transform(from);
    camera.transform(to);
  }

  // Draw the image
  this.game.context.drawImage(
    this.image,
    this.frameWidth * (this.frameIndex % this.framesPerRow),
    this.frameHeight * Math.floor(this.frameIndex / this.framesPerRow),
    this.frameWidth,
    this.frameHeight,
    from.x,
    from.y,
    to.x - from.x,
    to.y - from.y
  );
};

// Frame methods
Sprite.prototype.nextFrame = function () {
  this.frameIndex = (this.frameIndex + 1) % this.frames;
};

Sprite.prototype.previousFrame = function () {
  this.frameIndex = (this.frameIndex + this.frames - 1) % this.frames;
};

Sprite.prototype.setFrame = function (n) {
  this.frameIndex = n % this.frames;
};
