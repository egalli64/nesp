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