/**
 * Bind a function on submit to an element -> it should be in the DOM!
 */

document.getElementById('second').onsubmit = () => {
    if (document.getElementById('y').value.length == 0) {
        console.log('y is empty!')
        return false;
    }
    return true;
};