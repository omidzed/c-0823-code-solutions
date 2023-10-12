# react-jsx-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSX?
  In my own words I would describe it as React's version of HTML.
  JSX stands for "JavaScript XML". It allows us to write HTML-like code within our JavaScript code. This makes it easier to create React components, because you can describe the UI in a way that looks familiar if you've ever worked with HTML.

- How does React use JSX to render components?
  You write a component using JSX.
  JSX gets transformed into JavaScript calls.
  React uses these calls to create a virtual DOM.
  When there's a change, React compares the old and new virtual DOMs.
  Only the necessary parts of the real DOM get updated.
  That is a summary of how JSX becomes rendered on the frontend into reusable components that appear in the UI and the user gets to interact with while using the SPA that is built by React.

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
