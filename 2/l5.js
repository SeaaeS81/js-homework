
let name = prompt("Yevhen");

switch (name) {
  case "Admin":
    console.log("I have full access");
    break;
  case "Student":
    console.log("Im student");
    break;
  case "Teacher":
    console.log("Im teacher");
    break;
  case "Young":
    document.write("<h1>I young and ready to party</h1>");
    break;
  default:
    console.log("You entered own name");
}