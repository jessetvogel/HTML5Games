var Input = {
  keyState: []
};

// Event listeners
$(document).ready(function () {
  $(document).keydown(function (event) { Input.keyState[event.keyCode] = Input.STATE_DOWN; });
  $(document).keyup(function (event) { Input.keyState[event.keyCode] = Input.STATE_UP; });
});

// Get state methods
Input.isKeyDown = function (keyCode) {
  var state = Input.keyState[keyCode];
  if(state == undefined) return false;
  return state == Input.STATE_DOWN;
};

Input.isKeyUp = function (keyCode) {
  return !Input.isKeyDown(keyCode);
};

// Constant values
Input.STATE_UP = 0;
Input.STATE_DOWN = 1;

Input.KEY_UP = 38;
Input.KEY_DOWN = 40;
Input.KEY_LEFT = 37;
Input.KEY_RIGHT = 39;

Input.KEY_SPACE = 32;
