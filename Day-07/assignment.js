// Count Vowels
let textForVowelCount = "javascript";
let vowelCount = 0;
let vowelSet = "aeiou";

for (let i = 0; i < textForVowelCount.length; i++) {
  if (vowelSet.includes(textForVowelCount[i])) {
    vowelCount++;
  }
}

console.log("Vowel Count:", vowelCount);


//Username Generator
let firstNameText = "Om";
let randomNumberValue = Math.floor(Math.random() * 100);

let usernameGenerated = firstNameText.toLowerCase() + randomNumberValue;
console.log("Username:", usernameGenerated);


//Reverse a String
let originalTextForReverse = "hello";
let reversedTextResult = "";

for (let i = originalTextForReverse.length - 1; i >= 0; i--) {
  reversedTextResult += originalTextForReverse[i];
}

console.log("Reversed String:", reversedTextResult);


//Palindrome Check
let textForPalindromeCheck = "madam";
let reversedPalindromeText = "";

for (let i = textForPalindromeCheck.length - 1; i >= 0; i--) {
  reversedPalindromeText += textForPalindromeCheck[i];
}

let isPalindromeResult =
  textForPalindromeCheck === reversedPalindromeText;

console.log("Is Palindrome:", isPalindromeResult);


//Password Strength Checker 
let passwordInputText = "pass1234";

let hasMinimumLength = passwordInputText.length >= 8;
let hasNumber = false;

for (let i = 0; i < passwordInputText.length; i++) {
  if (!isNaN(passwordInputText[i])) {
    hasNumber = true;
    break;
  }
}

if (hasMinimumLength && hasNumber) {
  console.log("Strong");
} else {
  console.log("Weak");
}
