# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  An "event" in React is like an action that occurs, especially user actions like clicking a button, typing in an input field, or moving the mouse. React wraps these DOM events to provide a consistent API across different browsers.

- What is an "event handler"? Which component declares the handler?
  An "event handler" is a function in JavaScript that gets called when a specific event occurs. In React, the component that needs to respond to an event will declare the handler.

- How do you pass an event handler to a React component?
  You pass an event handler to a React component through props.

- What is the naming convention for event handlers?
  'handle' + eventName(click for example) = handleClick

- What is an "event handler prop"? Which component declares the prop?
  An "event handler prop" is a prop that receives an event handler function. The child component (like Button in our previous example) declares this prop to let the parent component (like App) pass down the event handler.

- What are some custom event handler props a component may wish to define?
  It could be anthing,like customizing a button or an action, as long as it serves a custom purpose

- What is the naming convention for custom event handler props?

on + event, for example onChange, onClick

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
