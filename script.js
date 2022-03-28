const services = document.querySelector('.services__container');
const servicesTitle = document.querySelector('.services__title');
const head = document.querySelector('.header');
const items = document.querySelectorAll('.menu__item');

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector('.form__error');

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

const showError = (input, errorMessage) => {
  input.classList.add('form__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__error_active');
};

const hideError = (input) => {
  input.classList.remove('form__input_type_error');
  formError.textContent;
  formError.classList.remove('form__error_active')
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {
    hideError(formInput);
  }
};

formElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function() {
  checkInputValidity();
});