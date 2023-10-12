# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?
  A javascritpt library developed by Facebook in 2013 that uses components as a way to structure its apps, and that is how it makes the process easy to repeat and reuse and has very powerful tooks for front end development that they and companies like Netflix take advantage of.

- What is a React component?
  A react component is typically a small feature within the app. It is up to the development teams discretion to have as many or as few components as possible, but it is a good idea to have more components, as it makes each part more reusable and faster for other devs to borrow from and use for their projects.

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup:
function MyButton() {
return (
<button>I'm a button</button>
);
}

- How do you mount a React app (root component) to the DOM?
  Using ReactDOM.render();
  ReactDOM.render(<App />, document.getElementById('root'));

- What are some other popular frontend frameworks?
  Angular, vue.js

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
