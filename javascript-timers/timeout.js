const $h1div = document.querySelector('h1');

function changeH1Text() {
  $h1div.innerText = 'Hello There';
}

setTimeout(changeH1Text, 2000);
