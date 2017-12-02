var Shape = function (game, options) {
  // Set game
  this.game = game;

  // Set default properties
  this.type = 'rectangle';
  this.color = 'white';
  this.width = 1.0;
  this.height = 1.0;

  // Set custom properties
  for(var x in options) this[x] = options[x];
};

Shape.prototype.draw = function (x, y, camera = null) {
  // Determine coordinates
  var from = { x: x, y: y };
  var to = { x: x + this.width, y: y + this.height };
  if(camera != null) {
    camera.transform(from);
    camera.transform(to);
  }

  // Set styles
  this.game.context.fillStyle = this.color;

  switch(this.type) {
    case 'rectangle':
      this.game.context.fillRect(from.x, from.y, to.x - from.x, to.y - from.y);
      break;

    case 'circle':
      // TODO
      break;
  }
};
