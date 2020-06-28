/**
 * Assuming
 *  DOM already loaded
 *  target is an element with a textual content
 */

let target = document.getElementById('target');
target.textContent = 'Current date-time: ' + new Date();
console.log('hello!');
