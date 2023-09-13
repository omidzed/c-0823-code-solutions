# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
  class

- How do you update the CSS class attribute of an element using JavaScript?
  By setting element.className to a new string name like this:
  let element = document.getElementById('myElement');
  element.className = 'new-class';

- What is the `textContent` property of element objects?
  It is the text content of the node and its descendents.

- How do you update the text within an element using JavaScript?
  By using the textContent property of the node by using getElementById() method of the document object and setting it to be something different.
  document.getElementById("divA").textContent = "This text is different!";

- Is the `event` parameter of an event listener callback always useful?
  It is always useful, but it is not absolutely mandatory due to the global event object.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  In my opinion it would have been more complicated and less clean looking because it would have required us to parse the click count directly into the html and I personally don't like that look and having a variable from the get go makes things so much more straightforward and clean.

- Why is storing information about a program in variables better than only storing it in the DOM?
  Reusability, consistency, and performance, as it more resource intensive and slower to get data from the DOM as opposed to local variables.

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
