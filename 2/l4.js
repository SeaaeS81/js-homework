
let age = prompt("Enter your age");

if (age > 1 && age < 12) {
  document.write("<h1>you are child</h1>");
} else if (age >= 12 && age < 18) {
  document.write("<h1>you are teenager</h1>");
} else if (age >= 18 && age < 60) {
  console.log("you are adult person");
} else if (age >= 60) {
    document.write("<h1>you are so old</h1>");
} else {
  console.log("100");
}