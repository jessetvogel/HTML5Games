$(document).ready(function () {

  var canvas = document.getElementById('canvas');
  canvas.width = $('body').width();
  canvas.height = $('body').height();

  var game = new Game(canvas);

  var i = 0;
  (function (i) { setInterval(function () {

    game.clear('hsl(' + i + ', 100%, 50%)');
    i += 0.5;

  }, 1000.0 / 60.0); })(i);

});
