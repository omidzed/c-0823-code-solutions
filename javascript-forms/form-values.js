const $form = document.querySelector('#contact-form');

function submitHandler(event) {
  event.preventDefault();
  console.log('submit fired');

  const formValues = {};
  for (let i = 0; i < $form.elements.length; i++) {
    const element = $form.elements[i];

    if (element.type !== 'submit') formValues[element.name] = element.value;
  }
  console.log(formValues);
}

$form.addEventListener('submit', submitHandler);

$form.reset();
