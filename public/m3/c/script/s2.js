/*
 * Introduction to Web technologies
 * 
 * JavaScript - HTML integration
 * 
 * https://github.com/egalli64/web-intro
 */

/**
 * Assuming
 * <li>DOM already loaded
 * <li>target is an element with a textual content
 */
let target = document.getElementById('target');
target.textContent = 'Current date-time: ' + new Date();

console.log('Dynamic set of target content');
