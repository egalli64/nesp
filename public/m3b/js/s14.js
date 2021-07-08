// DOM assumed already loaded

const APP_NAME = 'nesp';

let localRadio = document.getElementById('local');
let target = document.getElementById('target');
let keyInput = document.getElementById('set');
let valueInput = document.getElementById('value');
let delInput = document.getElementById('del');
let msgInput = document.getElementById('msg');

function selectedStorage() {
    return localRadio.checked ? localStorage : sessionStorage;
}

document.getElementById('btnAll').addEventListener('click', function () {
    let storage = selectedStorage();
    target.value += 'Number of items currently in selected storage: ' + storage.length + '\n';
    for (let i = 0; i < storage.length; i++) {
        let key = storage.key(i);
        target.value += key + ' -> ' + storage.getItem(key) + '\n';
    }
});

document.getElementById('btnClear').addEventListener('click', function () {
    selectedStorage().clear();
});

document.getElementById('btnSet').addEventListener('click', function () {
    let key = APP_NAME + '.' + keyInput.value;
    let value = valueInput.value;
    console.log('set', key, value);
    selectedStorage().setItem(key, value);
});

document.getElementById('btnDel').addEventListener('click', function () {
    let key = APP_NAME + '.' + delInput.value;
    console.log('remove', key);
    selectedStorage().removeItem(key);
});

document.getElementById('btnMsg').addEventListener('click', function () {
    let key = APP_NAME + '.message';
    let obj = {
        recipient: "Bob",
        msg: msgInput.value
    };

    console.log('set', key, obj);
    selectedStorage().setItem(key, JSON.stringify(obj));
});
