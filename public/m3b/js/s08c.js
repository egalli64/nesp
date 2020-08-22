/**
 * Used from the page, could be loaded before or after
 */
function random(choice) {
    // Math.trunc() is an ES 6 feature. Use floor() or maybe "| 0" for backward compability
    return Math.trunc(Math.random() * choice);
}

let changeBackColorAmongThree = () => {
    let colors = ['red', 'green', 'blue'];
    document.getElementsByTagName('body')[0].style.backgroundColor = colors[random(colors.length)];
};

let changeBackColor = () => {
    let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
};
