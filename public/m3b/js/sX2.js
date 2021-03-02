/*
 * page assumed already loaded in the DOM!
 */

document.getElementById('reset').onclick = setup;
for (let bucket of document.getElementsByClassName("bucket")) {
    bucket.ondrop = drop;
    bucket.ondragover = event => event.preventDefault();
}

function setup() {
    let template = document.createElement('template');
    template.innerHTML = '<div class="box" draggable="true" ondragstart="drag(event)"></div>';

    for (let bucket of document.getElementsByClassName("bucket")) {
        bucket.innerHTML = '';
    }

    let input = document.getElementById("input");
    input.innerHTML = '';
    for (let i = 1; i < 10; i++) {
        let node = template.content.firstChild.cloneNode();
        node.id = i;
        node.innerText = i;
        input.appendChild(node);
    }
};

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    event.preventDefault();
}

setup();