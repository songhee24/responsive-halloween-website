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
    imgSrc: "assets/img/trick-treat2-img.png",
  },
  {
    trick__title: "Candy Cane",
    trick__subtitle: "Candy",
    price: "8.99",
    imgSrc: "assets/img/trick-treat3-img.png",
  },
  {
    trick__title: "Pumpkin",
    trick__subtitle: "Accessory",
    price: "23.99",
    imgSrc: "assets/img/trick-treat4-img.png",
  },
  {
    trick__title: "Ghost",
    trick__subtitle: "Accessory",
    price: "32.99",
    imgSrc: "assets/img/trick-treat4-img.png",
  },
];

function generateTrickOrTreat({
  trick__title,
  trick__subtitle,
  price,
  imgSrc,
}) {
  const getParentElement = document.querySelector(
    ".trick__container.container.grid"
  );

  const h3Element = document.createElement("h3");
  h3Element.classList.add("trick__title");
  h3Element.textContent = trick__title;
  const spanElement1 = document.createElement("p");
}
