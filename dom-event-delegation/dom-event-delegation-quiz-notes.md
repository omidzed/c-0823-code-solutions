# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  Event.target refers to where the event takes place, not necessarily which element the eventListener was attached to. This is useful for when we attack our eventListener to a parent element, but the event actually takes place in a child element.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  It is possible because of the concept of event bubbling.

- What DOM element property tells you what type of element it is?
  tagName

- What does the `element.closest()` method take as its argument and what does it return?
  It takes selectors as argument and it returns the closest ancestor element, and if there is no match null.

- How can you remove an element from the DOM?
  Using 'remove' and removeChild'

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Using event delegation, by adding an event listener to the parent element, and using event.target to determine which element the event takes place in.

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
