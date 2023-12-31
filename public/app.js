const container = document.querySelector(".articles-container");

async function getKey() {
  try {
    const response = await fetch("/api/key");
    const keyData = await response.text();

    return keyData.trim();
  } catch (error) {
    console.error("Error fetching API key:", error);
    return null;
  }
}

async function getArticles() {
  const key = await getKey();
  if (!key) {
    console.error("API key not available");
    return;
  }

  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`
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
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
}

getArticles();
