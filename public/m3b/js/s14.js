const APP_NAME = 'nesp';

function selectedStorage() {
    return document.getElementById('local').checked ? localStorage : sessionStorage;
}

function clearStorage() {
    selectedStorage().clear();
}

function getAllItems() {
    let storage = selectedStorage();
    let target = document.getElementById('target');
    target.value += 'Number of items currently in selected storage: ' + storage.length + '\n';
    for (let i = 0; i < storage.length; i++) {
        let key = storage.key(i);
        target.value += key + ' -> ' + storage.getItem(key) + '\n';
    }
}

function setItem() {
    let key = APP_NAME + '.' + document.getElementById('set').value;
    let value = document.getElementById('value').value;
    console.log('set', key, value);
    selectedStorage().setItem(key, value);
}

function removeItem() {
    let key = APP_NAME + '.' + document.getElementById('del').value;
    console.log('remove', key);
    selectedStorage().removeItem(key);
}

function setMessage() {
    let key = APP_NAME + '.message';
    let obj = {
        recipient: "Bob",
        msg: document.getElementById('msg').value
    };

    console.log('set', key, obj);
    selectedStorage().setItem(key, JSON.stringify({
        recipient: 'Bob',
        msg: document.getElementById('msg').value
    }));
}