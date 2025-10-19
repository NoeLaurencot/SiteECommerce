slider = document.querySelector("#vente-slider");
const articleNumber = 21;

let articleSize = 400;

function showDescription(id) {
  let popup = document.getElementById(id);
  popup.classList.toggle("vente-show");
}

slider.oninput = function (e) {
  articleSize = this.value;
  console.log(this.value);
  updateArticleSize();
}

function updateArticleSize() {
  for (var i = 1; i <= articleNumber; i++) {
    let article = document.getElementById("vente-" + i.toString());
    article.style.width = articleSize.toString()+"px";
    article.style.height = articleSize.toString()+"px";

  }
}