function registerEventHandlers() {
    zero.addEventListener("click", buttonInputClickHandler, false);
    one.addEventListener("click", buttonInputClickHandler, false);
    two.addEventListener("click", buttonInputClickHandler, false);
    three.addEventListener("click", buttonInputClickHandler, false);
    four.addEventListener("click", buttonInputClickHandler, false);
    five.addEventListener("click", buttonInputClickHandler, false);
    six.addEventListener("click", buttonInputClickHandler, false);
    seven.addEventListener("click", buttonInputClickHandler, false);
    eight.addEventListener("click", buttonInputClickHandler, false);
    nine.addEventListener("click", buttonInputClickHandler, false);
    add.addEventListener("click", buttonInputClickHandler, false);
    subtract.addEventListener("click", buttonInputClickHandler, false);
    multiply.addEventListener("click", buttonInputClickHandler, false);
    divide.addEventListener("click", buttonInputClickHandler, false);
    point.addEventListener("click", buttonInputClickHandler, false);
    equals.addEventListener("click", buttonEqualsClickHandler, false);
    clear.addEventListener("click", buttonClearClickHandler, false);
  }
  
  // handle click event for buttons that enter and display input
  function buttonInputClickHandler(eventArg) {
    var display = document.getElementById("display");
    display.value = display.value + eventArg.target.value;
  }
  
  // handle click event for equals button that evaluates and displays result
  function buttonEqualsClickHandler(eventArg) {
    var display = document.getElementById("display");
    display.value = eval(display.value);
  }
  
  // handle click event for clearing display
  function buttonClearClickHandler(eventArg) {
    var display = document.getElementById("display");
    display.value = "";
  }