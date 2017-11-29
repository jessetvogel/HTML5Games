var Camera = function (game, options) {
  // Set game
  this.game = game;

  // Default parameters
  this.x = 0.0;
  this.y = 0.0;
  this.zoom = 1.0;
  
  // Set custom options
  for(var x in options) this[x] = options[x];
};

Camera.prototype.transform = function (coordinate) {
  coordinate.x = this.game.canvasWidth * 0.5 + (coordinate.x - this.x) * this.zoom;
  coordinate.y = this.game.canvasHeight * 0.5 + (coordinate.y - this.y) * this.zoom;
};
