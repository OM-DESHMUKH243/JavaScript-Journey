// ============================================
// DAY 10: ASYNC JAVASCRIPT (MOST IMPORTANT)
// ============================================

// Till now, JS was synchronous:
// One line executes after another.

// But real world = APIs, databases, blockchain
// These take TIME → so we use ASYNC JS



// ============================================
// 1. SYNCHRONOUS EXAMPLE
// ============================================

console.log("Start");
console.log("Middle");
console.log("End");

// Output order always same
// because JS runs line by line



// ============================================
// 2. WHY ASYNC IS NEEDED
// ============================================

// Example: Fetch data from server
// It takes time → JS should NOT freeze

console.log("Start fetching...");

setTimeout(function () {
  console.log("Data received after 3 seconds");
}, 3000);

console.log("End");

// JS does not wait → runs next line
// setTimeout runs later



// ============================================
// 3. CALLBACK FUNCTION
// ============================================

// A function passed inside another function

function greetUser(name, callbackFunction) {
  console.log("Hello " + name);
  callbackFunction();
}

function afterGreeting() {
  console.log("Greeting completed");
}

greetUser("Om", afterGreeting);



// ============================================
// 4. PROMISES (VERY IMPORTANT)
// ============================================

// Promise = future result
// pending → resolved → rejected

let learningPromise = new Promise(function (resolve, reject) {
  let learningCompleted = true;

  if (learningCompleted) {
    resolve("JavaScript learned successfully");
  } else {
    reject("Learning failed");
  }
});

learningPromise
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });



// ============================================
// 5. FETCH API (REAL WORLD)
// ============================================

// Fetch data from internet (API)

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("User data received:");
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });



// ============================================
// 6. ASYNC AWAIT (MODERN WAY)
// ============================================

async function fetchUserData() {
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    let data = await response.json();

    console.log("Data using async/await:");
    console.log(data);
  } catch (error) {
    console.log("Error occurred:", error);
  }
}

fetchUserData();



// ============================================
// WHY THIS DAY IS IMPORTANT
// ============================================

// APIs use async
// Backend uses async
// Solana/Web3 uses async
// React uses async

// If you master this → you become real dev
