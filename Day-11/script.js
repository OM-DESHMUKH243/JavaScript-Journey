// select elements
let priceButtonElement = document.getElementById("priceButton");
let priceDisplayElement = document.getElementById("priceDisplay");

// click event
priceButtonElement.addEventListener("click", getBitcoinPrice);

// async function
async function getBitcoinPrice() {
  priceDisplayElement.textContent = "Fetching price...";

  try {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/simple/priceी पrice?ids=bitcoin&vs_currencies=usd"
    );

    let data = await response.json();

    let price = data.bitcoin.usd;

    priceDisplayElement.textContent =
      "Bitcoin Price: $" + price;
  } catch (error) {
    priceDisplayElement.textContent = "Error fetching price";
  }
}
