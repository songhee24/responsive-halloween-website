const trickOrTreat = [
  {
    trick__title: "Toffee",
    trick__subtitle: "Candy",
    price: "11.99",
    imgSrc: "assets/img/trick-treat1-img.png",
  },
  {
    trick__title: "Scarecrow",
    trick__subtitle: "Accessory",
    price: "51.99",
    imgSrc: "assets/img/trick-treat3-img.png",
  },
  {
    trick__title: "Candy Cane",
    trick__subtitle: "Candy",
    price: "8.99",
    imgSrc: "assets/img/trick-treat4-img.png",
  },
  {
    trick__title: "Pumpkin",
    trick__subtitle: "Accessory",
    price: "23.99",
    imgSrc: "assets/img/trick-treat5-img.png",
  },
  {
    trick__title: "Ghost",
    trick__subtitle: "Accessory",
    price: "32.99",
    imgSrc: "assets/img/trick-treat6-img.png",
  },
];

function generateTrickOrTreat({
  trick__title,
  trick__subtitle,
  price,
  imgSrc,
}) {
  const parentElement = document.querySelector(
    ".trick__container.container.grid"
  );

  const trickContent = document.createElement("div");
  trickContent.classList.add("trick__content");

  const imgElement = document.createElement("img");
  imgElement.classList.add("trick__img");
  imgElement.alt = trick__title;
  imgElement.src = imgSrc;

  const h3Element = document.createElement("h3");
  h3Element.classList.add("trick__title");
  h3Element.textContent = trick__title;
  const spanElement1 = document.createElement("span");
  spanElement1.classList.add("trick__subtitle");
  spanElement1.textContent = trick__subtitle;
  const spanElement2 = document.createElement("span");
  spanElement2.textContent = price;
  spanElement2.classList.add("trick__price");

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("button", "trick__button");

  const iElement = document.createElement("i");
  iElement.classList.add("bx", "bx-cart-alt", "trick__icon");

  buttonElement.appendChild(iElement);

  // <button className="button trick__button">
  //     <i className="bx bx-cart-alt trick__icon"></i>
  // </button>

  trickContent.appendChild(imgElement);
  trickContent.appendChild(h3Element);
  trickContent.appendChild(spanElement1);
  trickContent.appendChild(spanElement2);
  trickContent.appendChild(buttonElement);

  parentElement.appendChild(trickContent);
}

trickOrTreat.forEach((trickOrTreat) => generateTrickOrTreat(trickOrTreat));
