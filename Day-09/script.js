/* let userFormElement = document.getElementById("userForm");
let nameInputElement = document.getElementById("nameInput");
let ageInputElement = document.getElementById("ageInput");
let resultMessageElement = document.getElementById("resultMessage");

userFormElement.addEventListener("submit", function (event) {
  event.preventDefault(); // VERY IMPORTANT

  let enteredName = nameInputElement.value;
  let enteredAge = ageInputElement.value;

  console.log(enteredName, enteredAge);
});

//Reading Input 
let enteredName = nameInputElement.value;
let enteredAge = ageInputElement.value;

//Simple Validation
if (enteredName === "" || enteredAge === "") {
  resultMessageElement.textContent = "All fields are required";
  resultMessageElement.style.color = "red";
  return;
}

//Age Validation Example
if (enteredAge < 18) {
  resultMessageElement.textContent = "Not eligible";
  resultMessageElement.style.color = "red";
} else {
  resultMessageElement.textContent =
    "Welcome " + enteredName + ", you are eligible!";
  resultMessageElement.style.color = "green";
}

 */


// ==============================
// TASK 1: LOGIN FORM VALIDATION
// ==============================

let loginFormElement = document.getElementById("loginFormElement");
let usernameInputElement = document.getElementById("usernameInputElement");
let passwordInputElement = document.getElementById("passwordInputElement");
let loginMessageElement = document.getElementById("loginMessageElement");

loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  let enteredUsername = usernameInputElement.value;
  let enteredPassword = passwordInputElement.value;

  if (enteredUsername === "" || enteredPassword === "") {
    loginMessageElement.textContent = "All fields are required";
    loginMessageElement.style.color = "red";
    return;
  }

  if (enteredUsername === "admin" && enteredPassword === "1234") {
    loginMessageElement.textContent = "Login Successful";
    loginMessageElement.style.color = "green";
  } else {
    loginMessageElement.textContent = "Invalid credentials";
    loginMessageElement.style.color = "red";
  }
});

// ==============================
// TASK 2: EMAIL VALIDATION
// ==============================

let emailInputElement = document.getElementById("emailInputElement");
let emailCheckButtonElement = document.getElementById("emailCheckButtonElement");
let emailMessageElement = document.getElementById("emailMessageElement");

emailCheckButtonElement.addEventListener("click", function () {
  let emailValue = emailInputElement.value;

  if (emailValue.includes("@")) {
    emailMessageElement.textContent = "Valid Email";
    emailMessageElement.style.color = "green";
  } else {
    emailMessageElement.textContent = "Invalid Email";
    emailMessageElement.style.color = "red";
  }
});

// ==============================
// TASK 3: CHARACTER COUNTER
// ==============================

let textAreaInputElement = document.getElementById("textAreaInputElement");
let charCountDisplayElement = document.getElementById("charCountDisplayElement");

textAreaInputElement.addEventListener("input", function () {
  let textLength = textAreaInputElement.value.length;
  charCountDisplayElement.textContent = "Characters: " + textLength;
});
