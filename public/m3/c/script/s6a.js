/*
 * Introduction to Web technologies
 * 
 * JavaScript - on event
 * 
 * https://github.com/egalli64/web-intro
 */

/**
 * A function called on submit
 */
function check() {
    if (document.getElementById('x').value.length == 0) {
        console.log('x is empty!');
        return false;
    }
    return true;
}