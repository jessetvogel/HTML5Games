var pos = { x: 200, y: 200 };

$(document).ready(function () {

  var canvas = document.getElementById('canvas');
  canvas.width = $('body').width();
  canvas.height = $('body').height();

  var game = new Game(canvas);

  $(window).resize(function () {
    canvas.width = $('body').width();
    canvas.height = $('body').height();
    game.resize();
  });

  coin = new Sprite({
    src: 'img/coin.png',
    frames: 10,
    frameWidth: 44,
    frameHeight: 40
  });

  numbers = new Sprite({
    src: 'img/numbers.png',
    frames: 5,
    frameWidth: 80,
    frameHeight: 80
  });

  var t = 0.0;

  var velocity = { x: 0.0, y: 0.0 };

  game.updateFunction = function (dt) {

    dt /= 1000.0;
    if(dt <= 0 || dt != dt) return;

    velocity.x = 0.0;

    if(Input.isKeyDown(Input.KEY_UP)) if(velocity.y == 0.0) velocity.y = -1200.0;
    if(Input.isKeyDown(Input.KEY_LEFT)) velocity.x = -512.0;
    if(Input.isKeyDown(Input.KEY_RIGHT)) velocity.x = 512.0;

    // Physics!
    velocity.y += 2000 * dt;
    pos.x += velocity.x * dt;
    pos.y += velocity.y * dt;
    if(pos.y >= 500) {
      pos.y = 500;
      velocity.y = 0.0;
    }

    t += dt;

  };

  game.renderFunction = function () {
    game.clear('#bbeeff');

    x = pos.x + 100.0 * Math.cos(2.0 * Math.PI * t / 2.0);
    y = pos.y + 100.0 * Math.sin(2.0 * Math.PI * t / 2.0);

    coin.setFrame(Math.floor(t * 30.0));
    coin.draw(game, x, y);
    coin.draw(game, 2 * pos.x - x, 2 * pos.y - y);

    numbers.setFrame(Math.floor(t * 2.0));
    numbers.draw(game, pos.x, pos.y);

  }

  var TTT = setInterval(function () {
    if(!coin.loaded || !numbers.loaded) {
      console.log('Loading...');
      return false;
    }

    // Setup
    coin.offset.x = -coin.frameWidth / 2;
    coin.offset.y = -coin.frameHeight / 2;
    numbers.offset.x = -numbers.frameWidth / 2;
    numbers.offset.y = -numbers.frameHeight / 2;

    game.start();

    clearInterval(TTT);
  }, 100);

});
