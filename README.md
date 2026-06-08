# HW3 - Interactive Dynamic Multiplication Table

COMP 4610 GUI I

**Author:** Khaled Abdelrahman
**Email:** khaled_abdelrahman@student.uml.edu

## Links (fill these in after you upload to GitHub)

- **Live application:** https://khaledabdel-dev.github.io/interactive-dynamic-table/
- **GitHub repository:** https://github.com/KhaledAbdel-Dev/interactive-dynamic-table

## What this app does

A single-page web app that builds a multiplication table from four numbers
entered into a form: the minimum and maximum column values (the multipliers
across the top) and the minimum and maximum row values (the multiplicands down
the side). The table is generated dynamically with JavaScript.

## Files

- `index.html` — the page and the input form
- `style.css` — all styling, including the sticky top row and first column
- `script.js` — reads the form, validates input, and builds the table

## Error handling

Input is validated in JavaScript and any problems are shown in a message box on
the page (never a popup). The app reports:

- empty fields
- values that are not numbers
- values that are not whole numbers
- values outside the allowed range of -50 to 50
- a minimum value that is larger than its matching maximum value
