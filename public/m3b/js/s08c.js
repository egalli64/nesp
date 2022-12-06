/**
 * Used from the page, could be loaded before or after
 */
function random(choice) {
    // Math.trunc() is an ES 6 feature. Use floor() or maybe "| 0" for backward compability
    return Math.trunc(Math.random() * choice);
}

let changeBackColor = () => {
    let colors = ['white', 'red', 'green', 'blue', 'yellow'];
    document.getElementsByTagName('body')[0].style.backgroundColor = colors[random(colors.length)];
};

let changeBackColorFull = () => {
    let color = 'rgb(' + random(256) + ',' + random(256) + ',' + random(256) + ')';
    document.querySelector('body').style.backgroundColor = color;
};
