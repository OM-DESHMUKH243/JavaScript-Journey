//string
let greetingMessage = "Hello JavaScript";
console.log(greetingMessage);

//string lenght
let languageName = "JavaScript";
console.log(languageName.length); // 10

//access characters in string
let wordExample = "Solana";

console.log(wordExample[0]); // S
console.log(wordExample[5]); // a

//IMP String Methods
//. /toUpperCase() /toLowerCase()
let mixedCaseText = "JaVaScRiPt";

console.log(mixedCaseText.toUpperCase());
console.log(mixedCaseText.toLowerCase());

//. includes()
let emailText = "om@gmail.com";

console.log(emailText.includes("@")); // true

//. startsWith() / endsWith()
let websiteURL = "https://solana.com";

console.log(websiteURL.startsWith("https"));
console.log(websiteURL.endsWith(".com"));

//. slice()
let blockchainName = "JavaScript";

console.log(blockchainName.slice(0, 4)); // Java
console.log(blockchainName.slice(4));    // Script

//. trim()
let userInputText = "   hello world   ";
console.log(userInputText.trim());

//LOOP through Strings
//.Basic Math
let numberValue = 7.6;

console.log(Math.floor(numberValue)); // 7
console.log(Math.ceil(numberValue));  // 8
console.log(Math.round(numberValue)); // 8

//. Random Numbers
let randomValue = Math.random(); // 0 to 1
console.log(randomValue);
//.Random number btw 1 and 10
let randomBetweenOneAndTen = Math.floor(Math.random() * 10) + 1;
console.log(randomBetweenOneAndTen);




