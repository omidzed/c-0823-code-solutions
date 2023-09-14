let isLightOn = false;

const circle = document.getElementById('circle');
const circle2 = document.getElementById('circle2');
const body = document.querySelector('body');

circle.addEventListener('click', function () {
  if (!isLightOn) {
    circle.style.background = 'rgb(250,234,132)';
    circle2.style.background = 'rgb(254,243,194)';
    body.style.background = 'rgb(254,249,241)';
    circle.style.boxShadow = '-2px -14px 6px rgb(254,249,241)';
    isLightOn = true;
  } else {
    circle.style.background = 'rgb(11, 11, 11)';
    circle2.style.background = 'rgb(33, 33, 35)';
    body.style.background = 'rgb(17, 17, 17)';
    circle.style.boxShadow = '-2px -14px 6px rgb(6,6,6)';
    isLightOn = false;
  }
});
