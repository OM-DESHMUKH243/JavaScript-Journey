//Example

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("\n-------------\n");

//reverse loop

for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("\n-------------\n");

//while loop

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
console.log("\n-------------\n");

//break (stop loop)

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log("\n-------------\n");

//continue(skip iteration)

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
console.log("\n-------------\n");

//print even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("\n-------------\n");

//sum of numbers 1-10

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log(sum);
console.log("\n-------------\n");

//multiplication table of 5 

let num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}
console.log("\n-------------\n");