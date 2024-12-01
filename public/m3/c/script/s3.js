/*
 * Introduction to Web technologies
 * 
 * JavaScript - BOM
 * 
 * https://github.com/egalli64/web-intro
 */

/**
 * Example for the confirm() function in the BOM
 */
function checkConfirm() {
	let target = document.getElementById('target');
	if (!confirm('confirm?')) {
		target.value += "not ";
	}
	target.value += "confirmed.\n";
}
