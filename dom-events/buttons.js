function handleClick(event) {
  console.log('Button Clicked!');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

document.addEventListener('click', () => {
  const btn = document.querySelector('.click-button');
  btn.addEventListener('click', handleClick);
});

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

document.addEventListener('mouseover', () => {
  const hoverBtn = document.querySelector('.hover-button');
  hoverBtn.addEventListener('mouseover', handleMouseover);
});

function handledblclick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

document.addEventListener('dblclick', () => {
  const dblclick = document.querySelector('.double-click-button');
  dblclick.addEventListener('dblclick', handledblclick);
});
