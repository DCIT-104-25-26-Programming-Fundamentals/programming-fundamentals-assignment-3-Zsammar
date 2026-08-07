// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols, label) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let row;
    while (true) {
      const line = readlineSync.question("Enter row " + (i + 1) + (label ? " of matrix " + label : "") + ": ");
      row = line.trim().split(/\s+/).map(Number);

      if (row.length !== cols || row.some(Number.isNaN)) {
        console.log("Please enter exactly " + cols + " number separated by spaces.");

      }
      else {
        break;
      }
    }

    matrix.push(row);
  }
  return matrix;
}


function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].map((val) => String(val).padStart(4)).join(" "));
  }
}

/* TRANSPOSE */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];


  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
}



/* ADDITION */
function addMatrices(a,b) {
  const rows = b.length;
  const cols = a[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(a[i][j] + b[i][j]);
    }
    result.push(newRow);
  }
  return result;
}



/*MULTIPLICATION */
function multiplyMatrices(a, b) {
  const m = a.length;
  const n = b.length;
  const p = b[0].length;
  const result = [];

  for (let i = 0; i < m; i++) {
    const newRow = [];
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }
  return result;
}


/* PART A */
function runTranspose() {
  const rows = readlineSync.questionInt("Enter number of rows: ");
  const cols = readlineSync.questionInt("Enter number of columns: ");
  const matrix = readMatrix(rows, cols, "");

  console.log("\nOriginal Matrix: ");
  printMatrix(matrix);

  console.log("\nTransposed Matrix: ");
}

/* PART B */
function runAddition() {
  const rows = readlineSync.questionInt("Enter number of rows: ");
  const cols = readlineSync.questionInt("Enter number of columns: ");

  console.log("\n-- MATRIX A --");
  const a = readMatrix(rows, cols, "A");

  console.log("\n-- MATRIX B --");
  const b = readMatrix(rows, cols, "B");

  console.log("\nMatrix A: ");
  printMatrix(a);

  console.log("\nMatrix B: ");
  printMatrix(b);

  console.log("\nA + B: ");
  printMatrix(addMatrices(a, b));
}


/* PART C */
function runMultiplication() {
  const m = readlineSync.questionInt("Enter rows of matrix A: ");
  const n = readlineSync.questionInt("Enter coulmns of matrix A: ");
  const p = readlineSync.questionInt("Enter columns of matrix B: ");

  console.log("\n-- MATRIX A --");
  const a = readMatrix(m, n, "A");

  console.log("\n-- MATRIX B --");
  const b = readMatrix(n, p, "B");

  console.log("\nMatrix A: ");
  printMatrix(a);

  console.log("\nMatrix B: ");
  printMatrix(b);

  console.log("\nA x B: ");
  printMatrix(multiplyMatrices(a, b));
}

/* Main program */
function main() {
  console.log("MAtrix Operations");
  console.log("1. Transpose a matrix");
  console.log("2. Add two matrices");
  console.log("3. Multiply two matrices");

  const choice = readlineSync.questionInt("Choose an option from 1 - 3: ");

  console.log("");

  if (choice === 1) {
    runTranspose();
  }
  else if (choice === 2) {
    runAddition();
  }
  else if (choice === 3) {
    runMultiplication();
  }
  else {
    console.log("Error: Please choose 1, 2 or 3.");
  }
}

main();