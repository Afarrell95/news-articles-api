const container = document.querySelector(".articles-container");

async function getArticles() {
  const response = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=iYs7GVUnHNX71roBmJ9Owq79ZAqWwAGC"
  );
  const data = await response.json();
  console.log(data);

  const articles = data.results;

  articles.forEach((article) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = article.title;

    const abstract = document.createElement("p");
    abstract.textContent = article.abstract;

    card.appendChild(title);
    card.appendChild(abstract);

    container.appendChild(card);
  });
}

getArticles();
