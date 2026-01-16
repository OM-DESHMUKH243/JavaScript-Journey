let age = 21;
let citizen = true;

if (age >= 18 && citizen) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

//

let num = 7;

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

//

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please login");
} else {
  console.log("Welcome back");
}

//

let aged = 65;

if (aged < 18) {
  console.log("Child");
} else if (aged >= 18 && aged <= 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

//


let a = 15;
let b = 20;

if (a > b) {
  console.log("a is greater");
} else if (b > a) {
  console.log("b is greater");
} else {
  console.log("Both are equal");
}

//

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}
