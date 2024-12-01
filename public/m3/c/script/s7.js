/*
 * Introduction to Web technologies
 * 
 * JavaScript - addEventListener()
 * 
 * https://github.com/egalli64/web-intro
 */

/**
 * Bind a function on submit to an element -> it should be in the DOM!
 */
document.getElementById('second').addEventListener('submit', event => {
    if (document.getElementById('y').value.length == 0) {
        console.log('y is empty!');
        event.preventDefault();
    }
});