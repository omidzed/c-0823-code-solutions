const $pikachuCircle = document.querySelector('#pikachu-circle');
const $charmanderCircle = document.querySelector('#charmander-circle');
const $squirtleCircle = document.querySelector('#squirtle-circle');
const $bulbasaurCircle = document.querySelector('#bulbasaur-circle');
const $jigglypuffCircle = document.querySelector('#jigglypuff-circle');
const $leftChevron = document.querySelector('#left-chevron');
const $rightChevron = document.querySelector('#right-chevron');
const $image = document.querySelector('.pokemon-image');

const images = [
  './images/025.png',
  './images/004.png',
  './images/007.png',
  './images/001.png',
  './images/039.png',
];
const circles = [
  $pikachuCircle,
  $charmanderCircle,
  $squirtleCircle,
  $bulbasaurCircle,
  $jigglypuffCircle,
];

let currentIndex = 0;

function changePokemon(direction = 1) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  $image.src = images[currentIndex];

  for (let index = 0; index < circles.length; index++) {
    const circle = circles[index];
    if (index === currentIndex) {
      circle.querySelector('i').className = 'fa-solid fa-circle';
    } else {
      circle.querySelector('i').className = 'fa-regular fa-circle';
    }
  }
}

$leftChevron.addEventListener('click', function (event) {
  event.preventDefault();
  changePokemon(-1);
});

$rightChevron.addEventListener('click', function (event) {
  event.preventDefault();
  changePokemon();
});

setInterval(changePokemon, 3000);
