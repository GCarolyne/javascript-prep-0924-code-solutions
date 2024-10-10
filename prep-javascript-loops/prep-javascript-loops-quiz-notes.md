# prep-javascript-loops-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the **condition** expression in the `for` and `while` loops?
  It is a expression evaluated before each pass through the loop. To check for true or false execution.

- When is the first expression in the parentheses for a `for` loop (known as the **initialization**) evaluated?
  The initialization expression is evaluated once before the loop starts running.

- When is the second expression in the parentheses for a `for` loop (known as the **condition**) evaluated?
  The conditional expression is evaluated once before each iteration of the loop, including after the initialization expression and each time the final expression runs.

- When is the third expression in the parentheses for a `for` loop (known as the **final expression**) evaluated?
  The final expression of a for loop is evaluated after the work of the loop is complete.

- What is the purpose of the **final expression** in a `for` loop?
  Most often it is used to increment or decrement the index variable value, although any valid expression can be run once the work of the loop is complete.
- What types of data should the `for...in` loop be used on?
  for .. in loops are designed to be used to loop over objects.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';

A function whileloop1 is being defined by no parameters a opening curly brace. A new array is being assigned to the variable newArray. The value 0 is being assigned to the variable counter. A while loop is evaluating the expression counter is equal to or less than ten.
The push method of the new array object is being called with one argument counter. Counter plus plus. Closing bracket for a whileloop. The ob


function whileLoop1() {
  let newArray = [];
  let counter = 0;
  while (counter <= 9) {
    newArray.push(counter);
    counter++;
  }
  return newArray;
}
console.log('whileLoop1', whileLoop1());

// create your loops here.
function forLoop1() {
  const newArray = [];
  for (let i = 0; i <= 9; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log('forLoop1:', forLoop1());d
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
