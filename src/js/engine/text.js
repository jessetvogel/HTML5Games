var Text = function (game, options) {
  // Set game
  this.game = game;

  // Set default properties
  this.text = '';
  this.font = '10px sans-serif';
  this.color = 'black';
  this.align = 'left';
  this.baseline = 'alphabetic';

  // Set custom properties
  for(var x in options) this[x] = options[x];
}

Text.prototype.draw = function (x, y, camera = null) {
  // Determine coordinates
  var coordinates = { x: x, y: y };
  if(camera != null)
    camera.transform(coordinates);

  // Render text
  this.game.context.font = this.font;
  this.game.context.fillStyle = this.color;
  this.game.context.textAlign = this.align;
  this.game.context.textBaseline = this.baseline;
  this.game.context.fillText(this.text, coordinates.x, coordinates.y);
};

Text.prototype.setFont = function (font) {
  this.font = font;
};

Text.prototype.setColor = function (color) {
  this.color = color;
};

Text.prototype.setAlign = function (align) {
  this.align = align;
};
