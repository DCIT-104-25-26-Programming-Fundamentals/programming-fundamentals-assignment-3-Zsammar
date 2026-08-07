// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");

/* generating first n terms */
function getFibonacci(n) {
  const sequence = [];

  for (let i = 0; i < n; i++) {
    if ( i === 0) {
      sequence.push(0);
    }
    else if ( i === 1) {
      sequence.push(1);
    }
    else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
}


/* Determine whether a number is in Fibonacci sequence. */

function isFibonacci(num) {
  if (num < 0) {
    return false;
  }

  /* prev =  previous and curr = current */
  let prev = 0;
  let curr = 1;

  if (num === 0) {
    return true;
  }

  while (curr < num) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr === num;
}



/* Signals for N and print first N terms. */
function runFirstNTerms() {
  const n = readlineSync.questionInt("How many terms? ");

  if (n <= 0) {
    console.log("Error: N must be a positive integer.");
    return ;
  }

  const sequence = getFibonacci(n);
  console.log("Fibonacci sequence: " + sequence.join(" "));
}

/* check if a number entered is Fibonacci. */
function runCheckMembership() {
  const num = readlineSync.questionInt("Enter a number to chcek: ");

  if (isFibonacci(num)) {
    console.log(num + " is a Fibonacci number.");
  }
  else {
    console.log(num + "is NOT  a Fibonacci number.");
  }
}

/* Main program */
function main() {
  console.log("-- PART A: FIRST N TERMS --");
  runFirstNTerms();

  console.log("\n-- PART B: CHECK MEMBERSHIP --");
  runCheckMembership();
}

main();
