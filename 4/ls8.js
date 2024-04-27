



let num = prompt('Enter you number (i will make factorial n!)');
num = parseInt(num);

for (let i = 0; i <= num; i++) {
  if (i >= 5 && i <= 10) {
    continue;
  }

  if (i >= 100) {
    break;
  }

  console.log(i);
}
