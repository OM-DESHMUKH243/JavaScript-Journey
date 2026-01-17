//print 1-50 , skip divisible by 5 

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}
console.log("\n-------------\n");

//count digits of a number 45678

let num = 45678;
let count = 0;

while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}

console.log(count);
console.log("\n-------------\n");


//reverse a number 1234

let nums = 1234;
let reverse = 0;

while (nums > 0) {
  let digit = nums % 10;
  reverse = reverse * 10 + digit;
  nums = Math.floor(nums / 10);
}

console.log(reverse);
