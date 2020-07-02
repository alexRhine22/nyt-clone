let articleBtn = document.getElementById("article-btn");

articleBtn.addEventListener("click", showArticle);

function showArticle() {
  let hiddenContent = document.getElementsByClassName(
    "article__hidden-content"
  );

  for (let i = 0; i < hiddenContent.length; i++) {
    hiddenContent[i].classList.add("active");
    articleBtn.classList.add("active");
  }
}
