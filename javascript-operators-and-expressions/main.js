const width = 4;
const height = 7;

const area = width * height;
console.log(area);
console.log(typeof area);

const bill = 17;
const payment = 30;

const change = payment - bill;

console.log('value of change:', change);
console.log('type of change:', typeof change);

const quizzes = 20;
const midterm = 35;
const final = 45;

const grade = (quizzes + midterm + final) / 3;
console.log('Grade:', grade);
console.log('Type of Grade:', typeof grade);

const firstName = 'Omid';
const lastName = 'Asadi';
const fullName = firstName + ' ' + lastName;
console.log('FUll Name:', fullName);
console.log('Type of fullName:', typeof fullName);

const pH = 8;
const isAcidic = pH < 7;
console.log('Acidic:', isAcidic);
console.log('Type of isAcidic:', typeof isAcidic);

const headCount = 1000;
const isSparta = headCount === 300;
console.log('is Sparta?', isSparta);
console.log('Type of isSparta:', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT!';
console.log('Motto:', motto);
console.log('Type of motto:', typeof motto);
