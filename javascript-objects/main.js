const student = { firstName: 'Omid', lastName: 'Asadi', age: 36 };
const fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Amazon fool';
console.log('Lives in Irvine?', student.livesInIrvine);
console.log('Previous job:', student.previousOccupation);

const vehicle = { Make: 'Nissan', Model: 'Sentra', Year: 2014 };
vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;
console.log('Color:', vehicle.color);
console.log('Convertible?', vehicle.isConvertible);
console.log('Vehicle', vehicle);

const pet = { name: 'Simba', type: 'dog' };
delete pet.name;
delete pet.type;
console.log('Pet object : ', pet);
