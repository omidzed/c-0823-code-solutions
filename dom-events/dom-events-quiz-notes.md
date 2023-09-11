# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debuggin purposes.

- What is the purpose of events and event handling?
  Events signal to the DOM when a certain script and action need to take place. That is why we create Event Handlers to listen for events, and fire off their functions only at that appropriate time.

- Are all possible parameters required to use a JavaScript method or function?
  No, youc can use as many as you need, not all.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  eventListeners

- What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- What object is passed into an event listener callback when the event fires?
  Event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  HTML element that triggered the event. IF unsure you could use console.log() like console.log(event.target);

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  In the first one 'handleClick' is a reference to a function that has been called, and it would provide the results of that function callback as a parameter.
  In the second one, the callback function itself is being passed as the second parameter.

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
