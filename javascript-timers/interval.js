const $h1divInterval = document.querySelector('h1');
const stopInterval = setInterval(changeH1TextInterval, 1000);

function changeH1TextInterval() {
  if ($h1divInterval.innerText === '4') {
    $h1divInterval.innerText = '3';
  } else if ($h1divInterval.innerText === '3') {
    $h1divInterval.innerText = '2';
  } else if ($h1divInterval.innerText === '2') {
    $h1divInterval.innerText = '1';
  } else if ($h1divInterval.innerText === '1') {
    $h1divInterval.innerText = '~Earth Beeeelooowww Us~';
  }
  return stopInterval;
}

setInterval(changeH1TextInterval, 1000);
clearInterval(stopInterval);
