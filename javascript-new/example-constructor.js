function ExampleConstructor() {}
Function.getPrototypeOf(ExampleConstructor);
const ExampleConstructorPrototype = ExampleConstructor.prototype;
console.log('type of:', typeof ExampleConstructorPrototype);

const practiceConstructor = new ExampleConstructor();

console.log(
  'Instance of ExampleConstructor?',
  practiceConstructor instanceof ExampleConstructor
);
