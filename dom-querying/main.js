console.log('hello, world');

const $heading = document.querySelector('h1');

console.log('$heading: ', $heading);
console.dir('h1');

const $explanation = document.querySelector('#explanation');
console.log('$explanation: ', $explanation);

console.dir($explanation);

const $hint = document.querySelector('.hint');
console.log('$hint: ', $hint);
console.dir($hint);

const $paragraphs = document.querySelectorAll('.p');
console.log('$paragraphs: ', $paragraphs);

const $exampleLink = document.querySelectorAll('.example-link');
console.log('$exampleLink: ', $exampleLink);
