function getInfo() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.onerror = errorHandler;

    let url = document.getElementById('url').value;
    request.open("GET", url);
    request.send();
}

function errorHandler() {
    let target = document.getElementById('target');
    target.value += "Something bad happened, please check browser log for more details\n";
    if (this.status == 0 && this.readyState == 4) {
        target.value += "Do you have a CORS problem?\n"
    }
}

function callback() {
    let target = document.getElementById('target');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
    } else {
        let json = JSON.parse(this.responseText);

        target.value += json.name + '\n';
        target.value += json.job.title + '\n';
        target.value += json.job.languages + '\n';
    }
}
