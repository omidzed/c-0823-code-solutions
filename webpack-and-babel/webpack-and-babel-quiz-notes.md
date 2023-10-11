# webpack-and-babel-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Webpack?
  webpack is a static module bundler for modern JavaScript applications.

- What is the advantage of using Webpack (or a similar bundler)?
  When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles.
  Tree Shaking, it reduces the number of files that need to get downloaded, and makes whatever we use even smaller in size. It also obfuscates code and variables, which is great for times that there may be prying eyes near our code.

- What is Babel?
  Babel is a JavaScript compiler, a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- What is the advantage of using Babel (or a similar transpiler)?
  Transform syntax, polyfill features that are missing in your target environment, Source code transformations

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
