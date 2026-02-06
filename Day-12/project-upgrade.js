// ============================================
// DAY 12 — PROJECT LOGIC PRACTICE
// ============================================

// Simulating crypto data fetch

async function getCryptoPrices() {
  console.log("Fetching crypto prices...");

  try {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
    );

    let data = await response.json();

    let btcPrice = data.bitcoin.usd;
    let ethPrice = data.ethereum.usd;
    let solPrice = data.solana.usd;

    console.log("Bitcoin:", btcPrice);
    console.log("Ethereum:", ethPrice);
    console.log("Solana:", solPrice);

  } catch (error) {
    console.log("Error fetching crypto:", error);
  }
}

getCryptoPrices();
