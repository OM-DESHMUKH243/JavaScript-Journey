//array
let numbers = [10, 20, 30, 40];
//index starts from 0(zero)
console.log(numbers[0]); // 10
console.log(numbers[3]); // 40

//modify array elements
numbers[1] = 25;
console.log(numbers); // [10, 25, 30, 40]

//array lenght
let fruits = ["apple", "banana", "mango"];

console.log(fruits.length); // 3

//loop through array

//for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Important array methods *****
fruits.push("orange");//push
fruits.pop();//pop
fruits.unshift("grapes");//unshift
fruits.shift();//shift

// ==========================
// Modern Array Methods
// ==========================

// MAP
let numsForMap = [1, 2, 3, 4];

let squares = numsForMap.map((num) => num * num);
console.log("Squares:", squares);

// FILTER
let numsForFilter = [1, 2, 3, 4, 5];

let evens = numsForFilter.filter((num) => num % 2 === 0);
console.log("Even numbers:", evens);

// REDUCE
let numsForReduce = [1, 2, 3, 4];

let sum = numsForReduce.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// ==========================
// Real Practice Programs
// ==========================

// FIND MAXIMUM
let numsForMax = [10, 25, 7, 40];

let max = numsForMax[0];
for (let i = 1; i < numsForMax.length; i++) {
  if (numsForMax[i] > max) {
    max = numsForMax[i];
  }
}

console.log("Maximum:", max);

// COUNT EVEN NUMBERS
let numsForCount = [1, 2, 3, 4, 5, 6];

let count = 0;
for (let num of numsForCount) {
  if (num % 2 === 0) {
    count++;
  }
}

console.log("Even count:", count);





