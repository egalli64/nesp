// The DOM should be already loaded!
const target = document.getElementById('target');

document.getElementById('plain').addEventListener('click', () => {
    let url = document.getElementById('url').value;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Negative response from network: ${response.status}`);
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
});

async function fetchJson(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Negative response from network: ${response.status}`);
    }
    return await response.json();
}

document.getElementById('async').addEventListener('click', async () => {
    let url = document.getElementById('url').value;

    fetchJson(url).then(json => {
        target.value += json.name + '\n';
        target.value += json.job.title + '\n';
        target.value += json.job.languages + '\n';
    }).catch(err => {
        target.value += 'No answer. ' + err + '\n';
    });
});
