fetch('https://mockend.com/nwTarrant/fetch-work/foods/2')
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(() => console.log("Request failed"));