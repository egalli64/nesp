let s = 'Hello World!';
let re = /orl/;

console.log('"orl" position in string ...', s.search(re)); // 7

console.log('Is "orl" in string?', re.test(s)); // true

let reWorld = /world/;
let reWorldI = /world/i;

console.log('"world" in s?', reWorld.test(s)); // false
console.log('"world" _case insensitive_ in s?', reWorldI.test(s)); // true

let reVowel = /[aeiou]/;
console.log('First vowel', s.search(reVowel)); // 1

let reAlphaLower = /[a-z]/;
console.log('First alpha lowercase', s.search(reAlphaLower)); // 1

let s2 = 'hello 2 you!';

let reCipher = /\d/;
console.log('First cipher', s2.search(reCipher)); // 6

let s3 = '42x24';
let reNotCipher = /[^0-9]/;
let reNotCipher2 = /^\d/;
console.log('First not-cipher', s3.search(reNotCipher)); // 2
console.log('First not-cipher (v2)', s3.search(reNotCipher)); // 2

let s4 = "let's say hello";
let reDoubleL = /l{2}/;
console.log('Double l in string', s4.search(reDoubleL)); // 12

let reOneOrTwoL = /l{1,2}/;
console.log("One or two l's in string", s4.search(reOneOrTwoL)); // 0

let reAtLeast3L = /l{3,}/;
console.log('At least 3 l in string', s4.search(reAtLeast3L)); // -1

let s5 = "let's say hellllo";
console.log('At least 3 l in string', s5.search(reAtLeast3L)); // 12
console.log('Double l in string', s5.search(reDoubleL)); // 12

let s6a = "Is slf4j available?";
let s6b = "What about log4j?";

let reJavaLogger = /[a-z]*4j/;
console.log(s6a, s6a.search(reJavaLogger)); // 3
console.log(s6b, s6b.search(reJavaLogger)); // 11

let reCDC = /[a-z]?\d[a-z]?/;
let s7a = "a2a";
let s7b = "aa2";
let s7c = "2aa";
let s7d = "aa";

console.log(s7a, s7a.search(reCDC)); // 0
console.log(s7b, s7b.search(reCDC)); // 1
console.log(s7c, s7c.search(reCDC)); // 0
console.log(s7d, s7d.search(reCDC)); // -1

let reAnyInCiphers = /^\d.*\d$/;
let s8a = '5sfd dfdf3';
let s8b = '5sfd dfdf3a';

console.log(s8a, reAnyInCiphers.test(s8a));
console.log(s8b, reAnyInCiphers.test(s8b));

