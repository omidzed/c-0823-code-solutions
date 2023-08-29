function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('Converted to seconds:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hello ' + name;
}
console.log('Greeting message:', greet('Bob'));

function getArea(width, height) {
  return width * height;
}
console.log('Area of rectangle:', getArea(2, 5));

const person1 = {
  firstName: 'David',
  lastName: 'Beckham',
};
function getFirstName(person) {
  return person.firstName;
}
console.log("Person's first name:", getFirstName(person1));

const arr1 = [1, 2, 3, 4, 5];
function getLastElement(array) {
  return arr1.length - 1;
}
console.log('Last element of this array:', getLastElement(arr1));
