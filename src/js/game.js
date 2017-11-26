var Game = function (canvas) {
  // Store canvas and context
  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  this.width = canvas.width;
  this.height = canvas.height;
}

Game.prototype.clear = function (color = 'white') {
  // Clear whole canvas screen with color
  this.context.fillStyle = color;
  this.context.fillRect(0, 0, this.width, this.height);
};
