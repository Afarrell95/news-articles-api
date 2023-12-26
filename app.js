async function getArticles() {
  const response = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=iYs7GVUnHNX71roBmJ9Owq79ZAqWwAGC"
  );
  const articles = await response.json();
  console.log(articles);
}

getArticles();
