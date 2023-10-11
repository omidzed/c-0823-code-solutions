# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  package manager for node.js, npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

- What is a package?
  a modular unit of code bundled together for distribution. It provides specific functionality that developers can install and use in their projects to avoid reinventing the wheel. Packages can be easily managed and installed using package managers like npm in the JavaScript ecosystem.

- What are some other popular package managers?
  npm, yarn

- How can you create a `package.json` with `npm`?
  cd /path/to/package
  npm init --yes

- What is a dependency and how do you add one to a package?
  A dependency is another package that your project needs to run correctly. Think of it like a recipe, a dependency being an ingredient within the larger recipe. You can add dependencies using npm like this:
  npm install [package-name] --save

- What happens when you add a dependency to a package with `npm`?
  package.json gets updated

- What is a devDependency and how do you add one to a package?
  A package that's needed for development tasks or to build the project, but not for running the actual application. Examples might include tools for testing, minifying code, or compiling from one format to another.
  You add one to a package by:
  -Navigating to your project's directory in the terminal.
  -add a devDependency, type:
  example: npm install [package-name] --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  You can define them by going to your package.json file, to the section called "scripts" and defining your scripts there. Like the 'hello' script we made for this assignment. You can run it with command: 'npm run <script-name>'
  Scripts are useful because of their simplicity: instead of remembering and typing long commands, you can use short script names. Consistency: everyone working on the project uses the same command, reducing mistakes and differences between developers.
  Flexibility: You can chain multiple commands, have different scripts for development and production environments, and more.
  Portability: By using scripts, you can avoid platform-specific commands and ensure that developers on different platforms (like Windows, macOS, Linux) can run the same npm script commands without issues.

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
