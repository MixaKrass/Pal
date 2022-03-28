const services = document.querySelector('.services__container');
const servicesTitle = document.querySelector('.services__title');
const head = document.querySelector('.header');
const items = document.querySelectorAll('.menu__item');

for (let item of items) {
  item.addEventListener('mouseenter', function(evt) {
    const name = evt.target.dataset.name;
    head.style.backgroundImage = `url(images/background/${name}.svg)`;
    servicesTitle.classList.add(name);
    head.classList.add('white');
    services.classList.add('white');
  })

  item.addEventListener('mouseleave', function() {
    head.style.backgroundImage= '';
    servicesTitle.classList.remove('uslugi', 'works', 'design', 'remont')
    head.classList.remove('white');
    services.classList.remove('white');
  })
}

