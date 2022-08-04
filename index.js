fetch('https://mockend.com/nwTarrant/fetch-work/posts/1')
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(() => console.log("Request failed"));