function checkConfirm() {
    let target = document.getElementById('target');
    if (!confirm('confirm?')) {
        target.value += "not ";
    }
    target.value += "confirmed.\n";
}
