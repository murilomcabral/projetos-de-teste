const apiUrl = 'https://www.google.com/finance/quote/USD-BRL'

async function getUSDBRL() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
}

getUSDBRL()