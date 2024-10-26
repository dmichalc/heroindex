// hello world
console.log("Hello World");

const my_button = document.getElementById("demo");
document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}