const newArrivals = [
  {
    new__title: "Haunted House",
    new__subtitle: "Accessory",
    imgSrs: "assets/img/new1-img.png",
    price: "$14.99",
    discountPrice: "$29.99",
  },
  {
    new__title: "Halloween Candle",
    new__subtitle: "Accessory",
    imgSrs: "assets/img/new2-img.png",
    price: "$14.99",
    discountPrice: "$29.99",
  },
  {
    new__title: "Witch Hat",
    new__subtitle: "Accessory",
    imgSrs: "assets/img/new3-img.png",
    price: "$14.99",
    discountPrice: "$29.99",
  },
  {
    new__title: "Rip",
    new__subtitle: "Accessory",
    imgSrs: "assets/img/new4-img.png",
    price: "$14.99",
    discountPrice: "$29.99",
  },
  {
    new__title: "Terrifying Crystal Ball",
    new__subtitle: "Accessory",
    imgSrs: "assets/img/new5-img.png",
    price: "$14.99",
    discountPrice: "$29.99",
  },
  {
    new__title: "Witch Broom",
    new__subtitle: "Accessory",
    imgSrs: "assets/img/new6-img.png",
    price: "$14.99",
    discountPrice: "$29.99",
  },
];

function generateNewArrivalCard({
  new__title,
  new__subtitle,
  imgSrs,
  price,
  discountPrice,
}) {
  const newContentElement = document.createElement("div");
  newContentElement.classList.add("swiper-slide", "new__content");

  const newTagElement = document.createElement("div");
  newTagElement.classList.add("new__tag");
  newTagElement.textContent = "New";

  const newImgElement = document.createElement("img");
  newImgElement.alt = new__title;
  newImgElement.src = imgSrs;
  newImgElement.classList.add("new__img");

  const newTitleElement = document.createElement("h3");
  newTitleElement.textContent = new__title;
  newTitleElement.classList.add("new__title");

  const newSubtitleElement = document.createElement("span");
  newSubtitleElement.classList.add("new__subtitle");
  newSubtitleElement.textContent = new__subtitle;

  const newPricesElement = document.createElement("div");
  newPricesElement.classList.add("new__prices");

  const newPrice = document.createElement("span");
  newPrice.classList.add("new__price");
  newPrice.textContent = price;

  const newDiscount = document.createElement("span");
  newDiscount.classList.add("new__discount");
  newDiscount.textContent = discountPrice;

  newPricesElement.appendChild(newPrice);
  newPricesElement.appendChild(newDiscount);

  const newButtonElement = document.createElement("button");
  newButtonElement.classList.add("new__button", "button");

  const newIconElement = document.createElement("i");
  newIconElement.classList.add("bx", "bx-cart-alt", "new__icon");

  newButtonElement.appendChild(newIconElement);

  newIconElement.appendChild(newTagElement);
  newIconElement.appendChild(newImgElement);
  newIconElement.appendChild(newTitleElement);
  newIconElement.appendChild(newSubtitleElement);
  newIconElement.appendChild(newPricesElement);
  newIconElement.appendChild(newButtonElement);
}

newArrivals.forEach((newArrival) => generateNewArrivalCard(newArrival));
