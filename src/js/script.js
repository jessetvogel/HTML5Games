$(document).ready(function () {
  // Get canvas
  var canvas = document.getElementById('canvas');
  canvas.width = $('body').width();
  canvas.height = $('body').height();

  // Create game
  var game = new Game(canvas);

  // Resizing should invoke game.resize
  $(window).resize(function () {
    canvas.width = $('body').width();
    canvas.height = $('body').height();
    game.resize();
  });

  // Create camera
  var camera = new Camera(game, {
    x: 0.0,
    y: 0.0,
    zoom: 1.0
  });

  // Load sprites
  coin = new Sprite(game, {
    src: 'img/coin.png',
    frames: 10,
    frameWidth: 44,
    frameHeight: 40,
    offset: { x: -22, y: -20 },
    scale: { x: 1 / 80, y: 1 / 80 }
  });

  numbers = new Sprite(game, {
    src: 'img/numbers.png',
    frames: 5,
    frameWidth: 80,
    frameHeight: 80,
    offset: { x: -40, y: -40 },
    scale: { x: 1 / 80, y : 1 / 80 }
  });


  var t = 0.0;

  var position = { x: 0.0, y: 0.0 };
  var velocity = { x: 0.0, y: 0.0 };

  game.updateFunction = function (dt) {

    dt /= 1000.0;
    if(dt <= 0 || dt != dt) return;

    velocity.x = 0.0;

    // Controls
    if(Input.isKeyDown(Input.KEY_UP)) if(velocity.y == 0.0) velocity.y = -10.0;
    if(Input.isKeyDown(Input.KEY_LEFT)) velocity.x = -5.0;
    if(Input.isKeyDown(Input.KEY_RIGHT)) velocity.x = 5.0;

    // Camera movement
    camera.zoom = Math.pow(1.005, Input.getMouseWheel()) * 80.0;
    if(Input.isKeyDown(Input.keyCode['W'])) camera.y -= 3.0 * dt;
    if(Input.isKeyDown(Input.keyCode['A'])) camera.x -= 3.0 * dt;
    if(Input.isKeyDown(Input.keyCode['S'])) camera.y += 3.0 * dt;
    if(Input.isKeyDown(Input.keyCode['D'])) camera.x += 3.0 * dt;

    // Physics!
    velocity.y += 30.0 * dt;
    position.x += velocity.x * dt;
    position.y += velocity.y * dt;
    if(position.y >= 0.0) {
      position.y = 0.0;
      velocity.y = 0.0;
    }

    t += dt;

  };

  game.renderFunction = function () {
    game.clear('#bbeeff');

    x = position.x + 1.5 * Math.cos(2.0 * Math.PI * t / 2.0);
    y = position.y + 1.5 * Math.sin(2.0 * Math.PI * t / 2.0);

    coin.setFrame(Math.floor(t * 30.0));
    coin.draw(x, y, camera);
    coin.draw(2 * position.x - x, 2 * position.y - y, camera);

    numbers.setFrame(Math.floor(t * 2.0));
    numbers.draw(position.x, position.y, camera);

  }

  game.start();

});
