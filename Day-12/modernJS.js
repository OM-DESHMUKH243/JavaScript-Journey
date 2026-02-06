// ============================================
// DAY 12 — MODERN JAVASCRIPT (IMPORTANT FOR REACT)
// ============================================

// --------------------------------------------
// 1. TEMPLATE LITERALS
// --------------------------------------------

let userNameValue = "Om";
let learningText = `Hello ${userNameValue}, welcome to modern JS`;

console.log(learningText);



// --------------------------------------------
// 2. ARROW FUNCTIONS
// --------------------------------------------

const addNumbers = (a, b) => {
  return a + b;
};

console.log(addNumbers(5, 3));



// --------------------------------------------
// 3. SHORT ARROW FUNCTION
// --------------------------------------------

const multiplyNumbers = (a, b) => a * b;
console.log(multiplyNumbers(4, 6));



// --------------------------------------------
// 4. DESTRUCTURING (VERY IMPORTANT)
// --------------------------------------------

let userObjectData = {
  name: "Om",
  age: 20,
  city: "Pune"
};

let { name, age, city } = userObjectData;

console.log(name);
console.log(age);
console.log(city);



// --------------------------------------------
// 5. SPREAD OPERATOR
// --------------------------------------------

let numbersArrayOne = [1, 2, 3];
let numbersArrayTwo = [...numbersArrayOne, 4, 5];

console.log(numbersArrayTwo);



// --------------------------------------------
// 6. DEFAULT PARAMETERS
// --------------------------------------------

function greetUser(user = "Guest") {
  console.log("Hello " + user);
}

greetUser("Om");
greetUser();



// --------------------------------------------
// WHY THIS MATTERS
// --------------------------------------------

// React uses arrow functions
// React uses destructuring
// React uses spread
// So this is foundation
