const links = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#candy', text: 'Candy' },
    { href: '#new', text: 'New' }
];

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

generateNavLinks(links, 'nav-ul-menu');

