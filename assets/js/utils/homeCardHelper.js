const homeData = [
  {
    imgSrc: "assets/img/home1-img.png",
    imgAlt: "pam ken",
    detailsTitle: "The Labu “Reiza”",
    detailsSubtitle: "The Living Pumpkin",
    subtitle: "#1 Top Scariest Ghost",
    title: "UOOOO <br> TRICK OR <br> TREAT!!",
    description:
      'Hi, I\'m Reiza, people call me "El Labu". I am currently trying to learn something new, building my own bike with parts made only in Malaysia.',
    button1Text: "Book Now",
    button1Link: "#",
    button2Text: "Track Record",
    button2Link: "#",
  },
  {
    imgSrc: "assets/img/home2-img.png",
    imgAlt: "ghost",
    detailsTitle: "Adino & Grahami",
    detailsSubtitle: "No words can describe them",
    subtitle: "#2 top Best duo",
    title: "BRING BACK <br> MY COTTON <br> CANDY",
    description:
      "Adino steals cotton candy from his brother and eats them all in one bite, \n" +
      "a hungry beast. Grahami can no longer contain his anger towards Adino.",
    button1Text: "Book Now",
    button1Link: "#",
    button2Text: "Track Record",
    button2Link: "#",
  },
];

function generateHomeCard({
  imgSrc,
  imgAlt,
  detailsTitle,
  detailsSubtitle,
  subtitle,
  title,
  description,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
}) {
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");

  const swiperSlide = document.createElement("section");
  swiperSlide.classList.add("swiper-slide");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home__content", "grid");

  const homeGroup = document.createElement("div");
  homeGroup.classList.add("home__group");

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  img.classList.add("home__img");

  const homeIndicator = document.createElement("div");
  homeIndicator.classList.add("home__indicator");

  const homeDetailsImg = document.createElement("div");
  homeDetailsImg.classList.add("home__details-img");

  const detailsTitleElement = document.createElement("h4");
  detailsTitleElement.classList.add("home__details-title");
  detailsTitleElement.textContent = detailsTitle;

  const detailsSubtitleElement = document.createElement("span");
  detailsSubtitleElement.classList.add("home__details-subtitle");
  detailsSubtitleElement.textContent = detailsSubtitle;

  homeDetailsImg.appendChild(detailsTitleElement);
  homeDetailsImg.appendChild(detailsSubtitleElement);

  homeGroup.appendChild(img);
  homeGroup.appendChild(homeIndicator);
  homeGroup.appendChild(homeDetailsImg);

  const homeData = document.createElement("div");
  homeData.classList.add("home__data");

  const subtitleElement = document.createElement("h3");
  subtitleElement.classList.add("home__subtitle");
  subtitleElement.textContent = subtitle;

  const titleElement = document.createElement("h1");
  titleElement.classList.add("home__title");
  titleElement.innerHTML = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("home__description");
  descriptionElement.textContent = description;

  const buttons = document.createElement("div");
  buttons.classList.add("home__buttons");

  const button1Element = document.createElement("a");
  button1Element.href = button1Link;
  button1Element.classList.add("button");
  button1Element.textContent = button1Text;

  const button2Element = document.createElement("a");
  button2Element.href = button2Link;
  button2Element.classList.add("button--link", "button--flex");
  button2Element.textContent = button2Text;

  const buttonIcon = document.createElement("i");
  buttonIcon.classList.add("bx", "bx-right-arrow-alt", "button__icon");

  button2Element.appendChild(buttonIcon);

  buttons.appendChild(button1Element);
  buttons.appendChild(button2Element);

  homeData.appendChild(subtitleElement);
  homeData.appendChild(titleElement);
  homeData.appendChild(descriptionElement);
  homeData.appendChild(buttons);

  homeContent.appendChild(homeGroup);
  homeContent.appendChild(homeData);

  swiperSlide.appendChild(homeContent);

  swiperWrapper.appendChild(swiperSlide);

  const parentElement = document.querySelector(".swiper.home-swiper");
  parentElement.appendChild(swiperWrapper);
}

generateHomeCard(
  "assets/img/home1-img.png",
  "pam ken",
  "The Labu “Reiza”",
  "The Living Pumpkin",
  "#1 Top Scariest Ghost",
  "UOOOO <br> TRICK OR <br> TREAT!!",
  'Hi, I\'m Reiza, people call me "El Labu". I am currently trying to learn something new, building my own bike with parts made only in Malaysia.',
  "Book Now",
  "#",
  "Track Record",
  "#"
);
