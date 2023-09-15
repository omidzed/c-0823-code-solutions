const books = [
  {
    isbn: '9781250279293',
    title: 'Endure: How to Work Hard, Outlast, and Keep Hammering',
    author: 'Cameron Hanes',
  },
  {
    isbn: '9780593234983',
    title: 'You Owe You: Ignite Your Power, Your Purpose, and Your Why',
    author: ' Eric Thomas PhD',
  },
  {
    isbn: '9781401962128',
    title: 'The High 5 Habit: Take Control of Your Life with One Simple Habit',
    author: 'Mel Robbins',
  },
];

console.log('Books array: ', books);
console.log('Type: ', typeof books);

const booksJSON = JSON.stringify(books);
console.log('Books array serialized: ', booksJSON);
console.log('Type: ', typeof booksJSON);

const studentJsonString = `{
  "id": "1234",
  "name": "Omid Asadi"
}`;

console.log('Student JSON: ', studentJsonString);
console.log('Type: ', typeof studentJsonString);

const studentParsed = JSON.parse(studentJsonString);
console.log('Student Parsed: ', studentParsed);
console.log('Type :', typeof studentParsed);
