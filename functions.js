function getSquare(a, b) {
  if (a < 1 || b < 1) return console.log("values must have higher than 0");
  return console.log(a * b);
}
getSquare(5, 10);

function hello(g) {
  console.log(g);
}
hello("World");

function showMessage(show) {
  return show
}
let result = showMessage("New message")
console.log(result);