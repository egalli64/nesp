/**
 * s32.js
 * 
 * The elements should be in the DOM!
 */

let target = document.getElementById('target');

document.getElementById('backAdd').onclick = () => {
    target.classList.add('back');
};

document.getElementById('backRemove').onclick = () => {
    target.classList.remove('back');
};

document.getElementById('foreToggle').onclick = () => {
    target.classList.toggle('fore');
};

document.getElementById('borderReplace').onclick = () => {
    target.classList.replace('borderA', 'borderB');
};
