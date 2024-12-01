/*
 * Introduction to Web technologies
 * 
 * JavaScript - Event target
 * 
 * https://github.com/egalli64/web-intro
 */

/**
 * Assuming element with id 'target' and 'go' are present in the DOM
 */
let target = document.getElementById('target')

function go() {
    // firstly, clean the target up
    // version 1
    // target.innerHTML = ''

    // version 2 - imperative
    while (target.firstChild) {
        target.removeChild(target.firstChild)
    }

    let counter = document.getElementById('counter').value
    // TODO: improve input validation
    counter = counter > 20 ? 20 : counter

    for (let i = 0; i < counter; i++) {
        // version 1
        // target.innerHTML += `<li>${i + 1}</li>`

        // version 2
            let node = document.createElement("li")
            node.appendChild(document.createTextNode(i + 1))
            target.appendChild(node)
    }
}
