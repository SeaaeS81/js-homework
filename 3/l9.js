
//9. Дано 2 prompt, Один дізнається ім'я, а інший число.
//- Якщо імя Admin а число більше 100 вивести: good job
//- Якщо імя System а число рівне 10 вивести: admin job
//- Якщо імя World а число більше 200 вивести: good world
//- Якщо імя Smth а число менше 0 вивести: minus num

let name = prompt("name");
let num = prompt("nunber");

if (name === "Admin" && num > 100) {
  document.write("good job");
} else if (name === "System" && num == 10) {
  document.write("admin job");
} else if (name === "World" && num > 200) {
  document.write("good world");
} else if (name === "Smth" && num < 0) {
  document.write("minus num");
}
  
