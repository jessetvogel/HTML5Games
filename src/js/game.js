var Game = function (canvas) {
  // Store canvas and context
  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  this.canvasWidth = canvas.width;
  this.canvasHeight = canvas.height;

  // Default update and render function
  this.updateFunction = function () {};
  this.renderFunction = function () {};

  // Disable right-clicking
  canvas.addEventListener('contextmenu', event => event.preventDefault());

  // State variables
  this.running = false;
};

Game.prototype.clear = function (color = 'white') {
  // Clear whole canvas screen with color
  this.context.fillStyle = color;
  this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
};

Game.prototype.resize = function () {
  // Update width and height
  this.canvasWidth = this.canvas.width;
  this.canvasHeight = this.canvas.height;
};

Game.prototype.start = function () {
  // Start loop
  this.running = true;
  this.previousTimestamp = performance.now();
  this.loop = function (game, timestamp) {
    // Update game and render
    game.updateFunction(timestamp - game.previousTimestamp);
    game.renderFunction();

    // Update timestamp
    game.previousTimestamp = timestamp;

    // Request next frame
    if(game.running)
      window.requestAnimationFrame(function (timestamp) {
        game.loop(game, timestamp);
      });
  };
  this.loop(this);
};

Game.prototype.stop = function () {
  // Stop loop
  this.running = false;
};
