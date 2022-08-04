fetch('https://mockend.com/nwTarrant/fetch-work/foods')
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(() => console.log("Request failed"));