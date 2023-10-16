# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  They are functions that let you "hook into" React state and lifecycle features from function components. Prior to hooks, stateful logic and other features were only possible in class components. With hooks, you can extract stateful logic from a component so it can be tested independently and reused. The most commonly used hooks are useState, useEffect, useContext, among others.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Only Call Hooks at the Top Level, Do not call hooks inside loops, conditions, or nested functions.
  Only Call Hooks from React Functions.

- What is the purpose of state in React?
  State allows React components to change their output over time in response to user actions, network responses, and other factors. In React, a component's state represents any data that might change over the lifetime of the component. When the state changes, the component re-renders.

- Why can't we just maintain state in a local variable?
  If you maintain state in a local variable, it will be lost between renders.

- What two actions happen when you call a `state setter` function?
  React upodates the state, and then it re-renders the component

- When does the local `state variable` get updated with the new value?
  The local state variable (the one you get from useState) gets updated on the next render after you call the state setter function.

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
