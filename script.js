const defaultBackgroundPhoto = 'images/menu.svg';
const services = document.querySelector('.services__container');
const servicesTitle = document.querySelector('.services__title');
const menu = document.querySelector('.menu__nav');
const items = document.querySelectorAll('.menu__item');

for (let item of items) {
  item.addEventListener('mouseenter', function(evt) {
    const name = evt.target.dataset.name;
    menu.style.backgroundImage = `url(images/background/services__subtitle_0.svg)`;

  })

}

