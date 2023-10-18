// this function clear all the values.
function clearScreen() {
  document.getElementById("result").value = "";
}

// this function display values
function display(value) {
  document.getElementById("result").value += value;
}
// this function evaluates the expression and return results
function calculate() {
  let p = document.getElementById("result").value;
  let q = eval(p);
  document.getElementById("result").value = q;
}
