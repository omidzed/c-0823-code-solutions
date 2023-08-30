const num1 = 91;
const num2 = 107;
const num3 = 29;

const maximumValue = Math.max(num1, num2, num3);
console.log('Largest one of my 3 numbers:', maximumValue);

const heroes = ['Superman', 'Wolverine', 'Batman', 'Spiderman'];

let randomNumber = Math.random();
randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('Random index:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('Random heroe:', randomHero);

const library = [
  { title: 'Never Finished', author: 'David Goggins' },
  { title: 'The Big Picture', author: 'Sean Carroll' },
  { title: 'Outlive', author: 'Peter Attia' },
];

const lastBook = library.pop();
console.log('The last book:', lastBook);

const firstBook = library.shift();
console.log('The first book:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('The library:', library);

const fullName = 'Omid Asadi';
const firstAndLastName = fullName.split(' ');
console.log('First and last name:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('My name:', sayMyName);
