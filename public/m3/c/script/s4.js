/*
 * Introduction to Web technologies
 * 
 * JavaScript - DOM
 * 
 * https://github.com/egalli64/web-intro
 */

document.title += '!';

let target = document.getElementById('target');
target.value += `Current URL is ${document.URL}\n`;

let ones = document.getElementsByClassName('one');
target.value += `${ones.length} element(s) of class one\n`;

let buttons = document.getElementsByTagName('button');
target.value += `${buttons.length} button(s)\n`;

let sel = document.querySelectorAll('div>button');
target.value += `${sel.length} button(s) in div\n`;
