//sum of array

let numbersForSum = [5, 10, 15, 20];

let totalSum = 0;
for (let i = 0; i < numbersForSum.length; i++) {
  totalSum += numbersForSum[i];
}

console.log("Sum:", totalSum);
console.log("\n-------------\n");

//remove negative numbers

let numbersForFilterNeg = [2, -3, 5, -1, 6];

let positiveNumbers = numbersForFilterNeg.filter(
  (num) => num >= 0
);

console.log("Positive numbers:", positiveNumbers);

//find second largest

let numbersForSecondMax = [10, 40, 30, 20];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbersForSecondMax.length; i++) {
  let current = numbersForSecondMax[i];

  if (current > largest) {
    secondLargest = largest;
    largest = current;
  } else if (current > secondLargest && current !== largest) {
    secondLargest = current;
  }
}

console.log("Second Largest:", secondLargest);

