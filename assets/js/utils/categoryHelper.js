const categories = [
  {
    section__title: "Ghosts",
    srcImg: "assets/img/category1-img.png",
    category__description: "Choose the ghosts, the scariest there are.",
  },
  {
    section__title: "Pumpkins",
    srcImg: "assets/img/category2-img.png",
    category__description: "You look at the scariest pumpkins there is.",
  },
  {
    section__title: "Witch Hat",
    srcImg: "assets/img/category3-img.png",
    category__description: "Pick the most stylish witch hats out there.",
  },
];

function generateCategory({ section__title, srcImg, category__description }) {
  const parentElement = document.querySelector(
    ".category__container.container.grid"
  );
  const categoryDataElement = document.createElement("div");
  categoryDataElement.classList.add("category__data");

  const imgElement = document.createElement("img");
  imgElement.classList.add("category__img");
  imgElement.src = srcImg;
  imgElement.alt = section__title;

  const h3Element = document.createElement("h3");
  h3Element.classList.add("category__title");
  h3Element.textContent = section__title;

  const pElement = document.createElement("p");
  pElement.classList.add("category_description");
  pElement.textContent = category__description;
  categoryDataElement.appendChild(imgElement);
  categoryDataElement.appendChild(h3Element);
  categoryDataElement.appendChild(pElement);

  parentElement.appendChild(categoryDataElement);
}

categories.forEach((category) => generateCategory(category));
