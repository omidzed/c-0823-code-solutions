function handleFocus(event) {
  console.log('Focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('Name of event: ' + event.target.name);
  console.log('Value of : ' + event.target.value);
}

const $myForm = document.querySelector('#myForm').elements;
console.log($myForm);

const $userName = document.querySelector('#user-name');
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

const $userEmail = document.querySelector('#user-email');
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

const $userMessage = document.querySelector('#user-message');
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
