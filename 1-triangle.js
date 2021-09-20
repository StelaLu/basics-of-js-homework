/**
 * LOOPING A TRIANGLE
 *
 * to run code from this file use: npx nodemon 1-triangle
 *
 * Write a loop that makes seven calls to console.log to output the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 *
 * Try to find the most optimal way to do this.
 *
 */

console.log('Loop that makes seven calls to console.log');
for (let i = 1; i < 8; i++) {
    console.log('#'.repeat(i));
  }

console.log('Loop and one call to console.log');
let str = '';
for (let i = 1; i < 8; i++) {
    str += '#'.repeat(i) + '\n';
  }

console.log(str);
