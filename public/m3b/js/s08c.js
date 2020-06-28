/**
 * Used from the page, could be loaded before or after
 */

let changeBackColor = () => {
    let colors = ['red', 'green', 'blue'];
    document.getElementsByTagName('body')[0].style.backgroundColor = colors[(Math.random() * colors.length) | 0];
};
