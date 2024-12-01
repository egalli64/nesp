/*
 * Introduction to Web technologies
 * 
 * JavaScript - BOM
 * 
 * https://github.com/egalli64/web-intro
 */

/**
 * Requires an element with id target to be already present in the DOM
 */
let target = document.getElementById('target');

target.value += `window heights: ${window.outerHeight}, ${window.innerHeight}\n`;
target.value += `window widths: ${window.outerWidth}, ${window.innerWidth}\n`;


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
