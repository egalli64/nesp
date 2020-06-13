/**
 * Bind to elements -> they should be in the DOM!
 */

document.getElementById('f').onsubmit = () => {
    console.log('never submit this form!')
    return false;
};

let inputX = document.getElementById('x');

inputX.onfocus = () => {
    console.log('x on focus')
};

inputX.onblur = () => {
    console.log('x blurred')
};

inputX.onchange = () => {
    console.log('x changed')
};

let box = document.getElementById('box');

box.onclick = (event) => {
    console.log('Click on box', event.screenX, event.screenY);
};

box.ondblclick = (event) => {
    console.log('Double click on box', event.screenX, event.screenY);
};

box.onmouseover = (event) => {
    console.log('Mouse over the box', event.screenX, event.screenY);
};

box.onmouseout = (event) => {
    console.log('Mouse out of the box', event.screenX, event.screenY);
};