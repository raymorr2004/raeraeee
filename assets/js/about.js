document.addEventListener("DOMContentLoaded", function () {
    const isAbout = document.body.id === "about-page";
    if (!isAbout) return;
  
    const articles = document.querySelectorAll("#about-page .article-box");
  
    articles.forEach((article) => {
      const header = article.querySelector("h3");
  
      header.addEventListener("click", () => {
        article.classList.toggle("expanded");
      });
    });
  });