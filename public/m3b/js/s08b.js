/**
 * Bind to elements -> they should be in the DOM!
 */

document.getElementById('f').addEventListener('submit', event => {
    console.log('never submit this form!');
    event.preventDefault();
});

let inputX = document.getElementById('x');

inputX.addEventListener('focus', () => console.log('x on focus'));
inputX.addEventListener('blur', () => console.log('x blurred'));
inputX.addEventListener('change', () => console.log('x changed'));

let box = document.getElementById('box');

box.addEventListener('click', event => console.log('Click on box', event.screenX, event.screenY));
box.addEventListener('dblclick', event => console.log('Double click on box', event.screenX, event.screenY));
box.addEventListener('mouseover', event => console.log('Mouse over the box', event.screenX, event.screenY));
box.addEventListener('mouseout', event => console.log('Mouse out of the box', event.screenX, event.screenY));
