// ============================================
// DAY 10 ASSIGNMENTS (WITH SOLUTIONS)
// ============================================



// ============================================
// TASK 1: setTimeout Practice
// Print:
// Start
// After 2 sec → "Hello after delay"
// End
// ============================================

console.log("Start");

setTimeout(function () {
  console.log("Hello after delay");
}, 2000);

console.log("End");



// ============================================
// TASK 2: Create Your Own Promise
// If marks > 40 → Pass
// else → Fail
// ============================================

let marksValue = 75;

let resultPromise = new Promise(function (resolve, reject) {
  if (marksValue > 40) {
    resolve("Student Passed");
  } else {
    reject("Student Failed");
  }
});

resultPromise
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (err) {
    console.log(err);
  });



// ============================================
// TASK 3: Fetch API Practice
// Fetch posts and print titles
// ============================================

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (postsData) {
    console.log("Post titles:");

    postsData.forEach(function (postItem) {
      console.log(postItem.title);
    });
  })
  .catch(function (error) {
    console.log("Error fetching posts:", error);
  });



// ============================================
// TASK 4 (CHALLENGE): Async/Await Fetch
// Fetch users and print names only
// ============================================

async function fetchUsersNames() {
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    let usersData = await response.json();

    console.log("User Names:");
    usersData.forEach(function (userItem) {
      console.log(userItem.name);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchUsersNames();
