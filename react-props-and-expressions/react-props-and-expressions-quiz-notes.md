# react-props-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are props in React?
  React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

- How do you declare and access props in a component?
  You don't need to explicitly declare props in a component. They are automatically available to functional components as the first parameter and can be accessed using the props keyword or by destructuring them. For example:
  Using the props object directly
  function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
  }

or by using destructuring
function Welcome({ name }) {
return <h1>Hello, {name}!</h1>;
}

- How do you pass props to a component?
  You can pass props to a component when you use the component, inside its <> tags. Here's how:
  In JSX, you can pass a prop to a component similar to how you'd set an attribute on an HTML element:
  <Welcome name="React" />

- How do you write JavaScript expressions in JSX?
  By using curly braces { }, the js goes inside them.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
