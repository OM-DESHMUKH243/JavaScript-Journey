//function

function add(a, b) {
  console.log(a + b);
}

add(5, 10);
console.log("\n-------------\n");

//function with syntax

function greet() {
  console.log("Hello!");
}

greet(); // function call
console.log("\n-------------\n");

//functions with parameters

function greet(name) {
  console.log("Hello " + name);
}

greet("Om");
greet("Developer");
console.log("\n-------------\n");

//return statement

function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);
console.log("\n-------------\n");

//use function , not console.log

function sum(a, b) {
  return a + b;
}
console.log("\n-------------\n");

//even or odd

function isEven(num) {
  if (num % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

console.log(isEven(10));
console.log("\n-------------\n");

//find larger number 

const max = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

console.log(max(5, 8));
console.log("\n-------------\n");


//factorial

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
console.log("\n-------------\n");




