function handleClick(event) {
  console.log('Button Clicked!');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
  clicks++;
  clickCounter.textContent = 'Clicks: ' + clicks;
  console.log(clicks);
  if (clicks < 4) {
    btn.className = 'hot-button cold';
  } else if (clicks < 7 && clicks > 3) {
    btn.className = 'hot-button cool';
  } else if (clicks < 10 && clicks > 6) {
    btn.className = 'hot-button tepid';
  } else if (clicks < 13 && clicks > 9) {
    btn.className = 'hot-button warm';
  } else if (clicks < 16 && clicks > 12) {
    btn.className = 'hot-button hot';
  } else btn.className = 'hot-button nuclear';
}

let clicks = 0;
const btn = document.querySelector('.hot-button');

const clickCounter = document.querySelector('.click-count');
btn.addEventListener('click', handleClick);
