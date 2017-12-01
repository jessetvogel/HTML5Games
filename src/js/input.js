var Input = {
  keyState: [],
  mouseState: [],
  mousePosition: { x: 0, y: 0 },
  mouseWheel: 0
};

// Event listeners
$(document).ready(function () {
  document.addEventListener('keydown', function (event) { Input.keyState[event.keyCode] = Input.STATE_DOWN; });
  document.addEventListener('keyup', function (event) { Input.keyState[event.keyCode] = Input.STATE_UP; });
  document.addEventListener('mousedown', function (event) { Input.mouseState[event.which] = Input.STATE_DOWN; })
  document.addEventListener('mouseup', function (event) { Input.mouseState[event.which] = Input.STATE_UP; })
  document.addEventListener('mousemove', function (event) { Input.mousePosition.x = event.pageX; Input.mousePosition.y = event.pageY; });
  window.addEventListener('mousewheel', function(event) { Input.mouseWheel += event.wheelDelta / 120.0; /* TODO: 120.0? */ });
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

Input.isMouseDown = function (button) {
  var state = Input.mouseState[button];
  if(state == undefined) return false;
  return state == Input.STATE_DOWN;
};

Input.isMouseUp = function (button) {
  return !Input.isMouseDown(button);
};

Input.getMousePosition = function () {
  return Input.mousePosition;
};

Input.getMouseWheel = function () {
  return Input.mouseWheel;
};

// Constant values
Input.STATE_UP = true;
Input.STATE_DOWN = false;

Input.MOUSE_LEFT = 1;
Input.MOUSE_MIDDLE = 2;
Input.MOUSE_RIGHT = 3;

Input.KEY_UP = 38;
Input.KEY_DOWN = 40;
Input.KEY_LEFT = 37;
Input.KEY_RIGHT = 39;

Input.KEY_SPACE = 32;

Input.keyCode = { 'A': 65, 'B': 66, 'C': 67, 'D': 68, 'E': 69, 'F': 70, 'G': 71, 'H': 72, 'I': 73, 'J': 74, 'K': 75, 'L': 76, 'M': 77, 'N': 78, 'O': 79, 'P': 80, 'Q': 81, 'R': 82, 'S': 83, 'T': 84, 'U': 85, 'V': 86, 'W': 87, 'X': 88, 'Y': 89, 'Z': 90 };
