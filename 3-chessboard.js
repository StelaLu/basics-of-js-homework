/**
 * CHESSBOARD
 *
 * to run code from this file use: npx nodemon 3-chessboard
 *
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 *
 * When you have a program that generates this pattern, define a binding size = 8 and change the program so
 * that it works for any size, outputting a grid of the given width and height.
 *
 */

let width = Number(prompt('Set the width'));
let height = Number(prompt('Set the height'));
let result = '';

function chessboard(width, height) {
if (width && height) {
    for (let i = 1; i <= height; i++) {
      if (i % 2 === 0) {
        result += ' #'.repeat(width) + '\n';
      } else if (i < height) {
        result += '# '.repeat(width) + '\n';
      } else {
        result += '# '.repeat(width);
      }
    }
    console.log(result);
  } else {
    console.log('You didn\'t set the width and height or they are not numbers');
  }
}

chessboard(width, height);
