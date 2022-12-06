/**
 * Bind to f, x, clickable, and resizable elements -> they should be in the DOM!
 */

document.getElementById('f').addEventListener('submit', event => {
    console.log('never submit this form!');
    event.preventDefault();
});

let x = document.getElementById('x');

x.addEventListener('focus', () => console.log('x on focus'));
x.addEventListener('blur', () => console.log('x blurred'));
x.addEventListener('change', () => console.log('x changed'));

let clickable = document.getElementById('clickable');

clickable.addEventListener('click', event => console.log('Click on clickable box', event.screenX, event.screenY));
clickable.addEventListener('dblclick', event => console.log('Double click on clickable box', event.screenX, event.screenY));
clickable.addEventListener('mouseover', event => console.log('Mouse over the clickable box', event.screenX, event.screenY));
clickable.addEventListener('mouseout', event => console.log('Mouse out of the clickable box', event.screenX, event.screenY));

let resizable = document.getElementById('resizable');
let baseWidth = resizable.offsetWidth;
let baseHeight = resizable.offsetHeight;

resizable.addEventListener('mouseover', () => {
    resizable.style.width = (baseWidth * 2) + 'px';
    resizable.style.height = (baseHeight * 2) + 'px';
});
resizable.addEventListener('mouseout', () => {
    resizable.style.width = baseWidth + 'px';
    resizable.style.height = baseHeight + 'px';
});
