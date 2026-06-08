# HW3 - Interactive Dynamic Multiplication Table

COMP 4610 GUI I

**Author:** Khaled Abdelrahman
**Email:** khaled_abdelrahman@student.uml.edu

## Links (fill these in after you upload to GitHub)

- **Live application (github.io):** http://YOURUSERNAME.github.io/REPOSITORYNAME/index.html
- **GitHub repository:** https://github.com/YOURUSERNAME/REPOSITORYNAME

## What this app does

A single-page web app that builds a multiplication table from four numbers
entered into a form: the minimum and maximum column values (the multipliers
across the top) and the minimum and maximum row values (the multiplicands down
the side). The table is generated dynamically with JavaScript.

## Files

- `index.html` — the page and the input form
- `css/style.css` — all styling, including the sticky top row and first column
- `js/script.js` — reads the form, validates input, and builds the table

## Error handling

Input is validated in JavaScript and any problems are shown in a message box on
the page (never a popup). The app reports:

- empty fields
- values that are not numbers
- values that are not whole numbers
- values outside the allowed range of -50 to 50
- a minimum value that is larger than its matching maximum value

Limiting values to the -50 to 50 range also keeps the page responsive, because
an enormous table is never built in the first place.

## How to run

Open `index.html` in any modern web browser, enter four numbers, and click
**Generate Table**.
