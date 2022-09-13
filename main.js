const currencies = {
  BTC: "Bitcoin", 
  USD: "United States Dollar" 
};

window.onload=function(){
  document.getElementById("btn-convert").addEventListener("click", exchange);  
  fetchCurrencies();
}

function exchange() { 
  const rate = document.getElementById("rate").value;
  const amount = document.getElementById("amount").value;
  const res =  amount / rate;
  document.getElementById("result-text").innerHTML = "You can buy " + res +" BTC";  
  document.getElementById("result").setAttribute("style", "display:block");
}

function fetchCurrencies() {  
  fetch("https://api1.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {      
      displayCurrency(data.price);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function displayCurrency(data) {
  document.getElementById("binance-currency-rate").innerText = data;
}
