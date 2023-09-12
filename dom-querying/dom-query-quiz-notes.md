# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To see how our code ran. How far did it get into the code we wrote, did it work properly or not? Using this we can find out if there is a problem, what the problem is, and where, and that helps debug our code.

- What is a "model"?
  The representation of a document's structure and content in memory.

- Which "document" is being referred to in the phrase Document Object Model?
  The HTML document, or webpage that you're interacting with in a web browser.

- What is the word "object" referring to in the phrase Document Object Model?
  The elements or components that make up the webpage. These objects can be things like paragraphs, headings, links, images, lists, etc.

- What is a DOM Tree?
  A way to organize and represent the elements on a webpage in a hierarchical structure, much like a tree with branches and leaves.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  queryselector, getDocumentbyID
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll
- Why might you want to assign the return value of a DOM query to a variable?
  To be able to reuse it over and over again

- What `console` method allows you to inspect the properties of a DOM element object?
  .dir method

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  So that all the HTML content can be parsed through and be ready for the script to run on.

- What does `document.querySelector()` take as its argument and what does it return?
  Takes a CSS selector as argument, and return the first element that matches that argument.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  Takes a CSS selector as argument, and return the node list of all elements that matches that argument.

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
