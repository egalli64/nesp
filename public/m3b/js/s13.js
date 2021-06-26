function getInfo() {
    let target = document.getElementById('target');
    let url = document.getElementById('url').value;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Negative response from network');
            }
            return response.json();
        })
        .then(json => {
            target.value += json.name + '\n';
            target.value += json.job.title + '\n';
            target.value += json.job.languages + '\n';
        })
        .catch(err => {
            target.value += 'No answer. ' + err + '\n';
        });
}
