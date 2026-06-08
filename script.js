/*
  COMP 4610 GUI I - HW3: Interactive Dynamic Multiplication Table
  Author:  Khaled Abdelrahman
  Email:   khaled_abdelrahman@student.uml.edu

  This file:
    1. Reads the four numbers from the form when the button is clicked.
    2. Checks the numbers for mistakes and shows useful error messages.
    3. Builds the multiplication table from the numbers and puts it on the page.

  Sources used:
    - MDN Web Docs (document.createElement, addEventListener)
    - Course lecture / grader video
*/

// The assignment requires that the
// program handle at least -50 to 50, so we use that as the limit.
var MIN_ALLOWED = -50;
var MAX_ALLOWED = 50;


// Wait until the page has loaded, then connect the button to our function.
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("generateButton");
  button.addEventListener("click", generateTable);
});


/*
  Main function. Runs when the user clicks "Generate Table".
*/
function generateTable() {
  // Step 1: read the four raw text values from the form.
  var minColText = document.getElementById("minCol").value;
  var maxColText = document.getElementById("maxCol").value;
  var minRowText = document.getElementById("minRow").value;
  var maxRowText = document.getElementById("maxRow").value;

  // Step 2: validate. We collect every problem in a list so we can show the
  // user all of them at once instead of one at a time.
  var errors = [];

  var minCol = checkNumber(minColText, "Minimum Column Value", errors);
  var maxCol = checkNumber(maxColText, "Maximum Column Value", errors);
  var minRow = checkNumber(minRowText, "Minimum Row Value", errors);
  var maxRow = checkNumber(maxRowText, "Maximum Row Value", errors);

  // Only check min-vs-max if those two values were valid numbers.
  if (minCol !== null && maxCol !== null && minCol > maxCol) {
    errors.push("Minimum Column Value must be less than or equal to Maximum Column Value.");
  }
  if (minRow !== null && maxRow !== null && minRow > maxRow) {
    errors.push("Minimum Row Value must be less than or equal to Maximum Row Value.");
  }

  // If anything was wrong, show the messages and stop. No table is built.
  if (errors.length > 0) {
    showErrors(errors);
    clearTable();
    return;
  }

  // Step 3: everything is valid, so clear any old errors and build the table.
  clearErrors();
  buildTable(minCol, maxCol, minRow, maxRow);
}


/*
  Checks one input value.
    - "value"     is the raw text from the input box.
    - "fieldName" is the label, used to write a clear error message.
    - "errors"    is the list we add problems to.
  Returns the number if it is valid, or null if it is not.
*/
function checkNumber(value, fieldName, errors) {
  // Remove leading/trailing spaces.
  var trimmed = value.trim();

  // Is the box empty?
  if (trimmed === "") {
    errors.push("Please enter a value for " + fieldName + ".");
    return null;
  }

  // Turn the text into a number.
  var number = Number(trimmed);

  // Is it actually a number? 
  if (isNaN(number)) {
    errors.push(fieldName + ' must be a number. You entered "' + trimmed + '".');
    return null;
  }

  // Must be a whole number (no decimals), because a multiplication table uses
  // whole numbers along its edges.
  if (number !== Math.floor(number)) {
    errors.push(fieldName + " must be a whole number (no decimals).");
    return null;
  }

  // Must be inside the allowed range.
  if (number < MIN_ALLOWED || number > MAX_ALLOWED) {
    errors.push(fieldName + " must be between " + MIN_ALLOWED + " and " + MAX_ALLOWED + ".");
    return null;
  }

  // Passed every check.
  return number;
}


/*
  Builds the multiplication table and places it in the container on the page.
*/
function buildTable(minCol, maxCol, minRow, maxRow) {
  var table = document.createElement("table");

  // ----- Build the top header row (inside <thead> for sticky CSS) -----
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");

  // The top-left corner cell. We put a "x" in it to show it is a times table.
  var corner = document.createElement("th");
  corner.textContent = "x";
  corner.className = "corner";
  headerRow.appendChild(corner);

  // One header cell for each column value (the multipliers across the top).
  for (var col = minCol; col <= maxCol; col++) {
    var topHeader = document.createElement("th");
    topHeader.textContent = col;
    headerRow.appendChild(topHeader);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // ----- Build one row for each row value (inside <tbody>) -----
  var tbody = document.createElement("tbody");
  for (var row = minRow; row <= maxRow; row++) {
    var tableRow = document.createElement("tr");

    // The first cell in each row is the row value (the multiplicand on the left).
    var rowHeader = document.createElement("th");
    rowHeader.textContent = row;
    rowHeader.className = "row-header";
    tableRow.appendChild(rowHeader);

    // The rest of the cells are the products (row value times column value).
    for (var c = minCol; c <= maxCol; c++) {
      var cell = document.createElement("td");
      cell.textContent = row * c;
      tableRow.appendChild(cell);
    }
    tbody.appendChild(tableRow);
  }
  table.appendChild(tbody);

  // Put the finished table on the page, replacing any earlier table.
  var container = document.getElementById("tableContainer");
  container.innerHTML = "";
  container.appendChild(table);
}


/*
  Shows the list of error messages in the error box (not a popup).
*/
function showErrors(errors) {
  var box = document.getElementById("errorBox");
  box.className = "error-box active";

  // Build a short heading plus a bullet list of the problems.
  var html = "<strong>Please fix the following:</strong><ul>";
  for (var i = 0; i < errors.length; i++) {
    html += "<li>" + errors[i] + "</li>";
  }
  html += "</ul>";

  box.innerHTML = html;
}


/*
  Empties the error box and hides its red styling.
*/
function clearErrors() {
  var box = document.getElementById("errorBox");
  box.className = "error-box";
  box.innerHTML = "";
}


/*
  Removes any table currently on the page.
*/
function clearTable() {
  document.getElementById("tableContainer").innerHTML = "";
}
