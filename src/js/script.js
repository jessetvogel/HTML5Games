var pos = { x: 200, y: 200 };

$(document).ready(function () {

  var canvas = document.getElementById('canvas');
  canvas.width = $('body').width();
  canvas.height = $('body').height();

  var game = new Game(canvas);

  var coin = new Sprite({
    src: 'img/coin.png',
    frames: 10
  });

  var numbers = new Sprite({
    src: 'img/numbers.png',
    frames: 5
  });

  var t = 0.0;
  var dt = 1.0 / 60.0;

  setInterval(function () {

    if(Input.isKeyDown(Input.KEY_UP)) pos.y -= 2.0;
    if(Input.isKeyDown(Input.KEY_DOWN)) pos.y += 2.0;
    if(Input.isKeyDown(Input.KEY_LEFT)) pos.x -= 2.0;
    if(Input.isKeyDown(Input.KEY_RIGHT)) pos.x += 2.0;

    t += dt;
    x = pos.x + 100.0 * Math.cos(2.0 * Math.PI * t / 10.0);
    y = pos.y + 100.0 * Math.sin(2.0 * Math.PI * t / 10.0);

    game.clear('#bbeeff');

    coin.offset.x = -coin.width / 2;
    coin.offset.y = -coin.height / 2;
    numbers.offset.x = -numbers.width / 2;
    numbers.offset.y = -numbers.height / 2;

    coin.setFrame(Math.floor(t / dt / 10.0));
    coin.draw(game, x, y);
    coin.draw(game, 2 * pos.x - x, 2 * pos.y - y);

    numbers.setFrame(Math.floor(t / dt / 60.0));
    numbers.draw(game, pos.x, pos.y);

  }, dt / 1000.0);

});
