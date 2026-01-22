
// Select elements
let headingElementText = document.getElementById("headingText");
let actionButtonElement = document.getElementById("actionButton");

// ----------------------------
// Task 1: Change Text on Click
// ----------------------------
actionButtonElement.addEventListener("click", function () {
  headingElementText.textContent = "Button Clicked!";
});

// ----------------------------
// Task 2: Increase Font Size
// ----------------------------
let currentFontSizeValue = 32;

actionButtonElement.addEventListener("click", function () {
  currentFontSizeValue += 2;
  headingElementText.style.fontSize = currentFontSizeValue + "px";
});

// ----------------------------
// Task 3: Dark Mode Toggle
// ----------------------------
let isDarkModeEnabled = false;

actionButtonElement.addEventListener("click", function () {
  if (isDarkModeEnabled) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white";
  }

  isDarkModeEnabled = !isDarkModeEnabled;
});


