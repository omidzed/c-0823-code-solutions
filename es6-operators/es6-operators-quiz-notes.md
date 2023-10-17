# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  Setting default values, shortcircuiting.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Returning a value while evaluating data sets for truthy or falsy from left to right.
  The || operator will return the first truthy value of all the operands, or simply the last value if all of them are falsy.
  The && operator will return the value of the opperand as soon as it gets any falsy value and will return the last true value if all the values are truthy.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It does not return true/false, it returns operand values, and it does not categorize null and undefined, the same way || does. || considers null and undefined as falsey and it does the same thing to false, NaN, 0, -0, 0n, "", document.all

For example, this is how ?? handles these evaluations:
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

whereas || would return the right operand in both cases.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  Ternary operator syntax is like
  condition ? exprIfTrue : exprIfFalse
  if condition is true, return exprIfTrue, if false, return exprIfFalse

Ternary operatore are more concise. They return expressions, which their values can be used elsewhere, whereas if/else are statements, they do not return anything.

Readability: For very simple conditions, the ternary operator can be clearer. However, for more complex conditions, the if/else statement is usually more readable.

Scope: Variables declared inside an if block (or any block) using let or const will have block scope, and they won't be accessible outside that block. In the context of the ternary operator, since there's no block, there's no such block scope.

- What is the `?.` (optional chaining) operator? When would you use it?

The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

- What data types can be spread into an array? Into an object?
  Only iterable values, like Array and String.
  All primitives can be spread in objects. Only strings have enumerable own properties, and spreading anything else doesn't create properties on the new object. so:
  const obj = { ...true, ..."test", ...10 };
  // { '0': 't', '1': 'e', '2': 's', '3': 't' }

- How does spread syntax differ from rest syntax?
  Purpose:

Spread: Used to expand an array into its elements or an object into its properties.
Rest: Used to collect the remaining elements or properties into an array or object.
Usage Context:

Spread: Commonly used when creating a new array or object.
Rest: Commonly used in function parameters to gather extra arguments.
Direction:

Spread: "Expands" or "spreads out" elements/properties.
Rest: "Gathers" or "collects" elements/properties.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
