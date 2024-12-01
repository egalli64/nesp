/*
 * Introduction to Web technologies
 * 
 * JavaScript - on event
 * 
 * https://github.com/egalli64/web-intro
 */

/**
 * Bind a function on submit to an element - assumed in the DOM!
 */
document.getElementById('second').onsubmit = () => {
    // check in a verbose way
    let y = document.getElementById('y');
    let text = y.value;

    if (text.length > 2) {
        return true;
    }

    // !!! same code as above, just in a more compact form !!!
//    if (document.getElementById('y').value.length > 2) {
//        return true;
//    }

    console.log('y is too short!')
    return false;
};
