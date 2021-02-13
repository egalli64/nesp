/**
 * Bind a function on submit to an element -> it should be in the DOM!
 */

// document.getElementById('second').onsubmit = () => {
//     if (document.getElementById('y').value.length == 0) {
//         console.log('y is empty!')
//         return false;
//     }
//     return true;
// };

document.getElementById('second').onsubmit = () => {
    let y = document.getElementById('y');
    let text = y.value;

    if (text.length > 2) {
        return true;
    }

    console.log('y is too short!')
    return false;
};
