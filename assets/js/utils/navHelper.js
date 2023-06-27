function generateNavLinks(links, parentElementId) {
    const parentElement = document.getElementById(parentElementId);

    links.forEach(link => {
        const liElement = document.createElement('li');
        liElement.classList.add('nav__item');

        const aElement = document.createElement('a');
        aElement.href = link.href;
        aElement.classList.add('nav__link');
        aElement.textContent = link.text;

        liElement.appendChild(aElement);
        parentElement.appendChild(liElement);
    });
}
