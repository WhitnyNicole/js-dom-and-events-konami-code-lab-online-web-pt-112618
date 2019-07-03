const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {

let index = 0
  // Write your JavaScript code inside the init() function
  document.body.addEventListener("keydown", function(event) {

    const key = parseInt(event.detail || event.which);

    if (key === code[index]) {
      index++;


       if (index === code.length) {

        alert("Yay!")

        index = 0
      }
    } else {
      index = 0
    }
  });
}

init();



// event.which tells me the number associated with the key pressed
// event.detail tells me the key codes



//used to test code in the browser console:
// function logKey(e) {
//   debugger
// return ` ${e.code}`;
// }
