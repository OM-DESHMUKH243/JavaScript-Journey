//sqaure of a number 

function square(num) {
  return num * num;
}

console.log(square(4)); // 16
console.log("\n-------------\n");

//solution with arrow function

const squared = (num) => num * num;

console.log(squared(4)); // 16
console.log("\n-------------\n");

//check voting eligibility

function checkEligibility(age) {
  if (age >= 18) {
    return "Eligible";
  }
  return "Not Eligible";
}

console.log(checkEligibility(20));
console.log(checkEligibility(15));
console.log("\n-------------\n");

//count vowels

function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript")); // 3
console.log("\n-------------\n");
