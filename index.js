fetch('https://mockend.com/nwTarrant/fetch-work/recipes')
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(() => console.log("Request failed"));