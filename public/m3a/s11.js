/**
 * Loops
 */

for (let i = 0; i < 3; i++) {
    console.log('for', i);
}

let i = 0;
while (i < 3) {
    console.log('while', i);
    i += 1;
}

i = 10;
do {
    if (i < 0 || i > 3) {
        i = 0;
        continue;
    }
    console.log('do-while', i);
    i++;
} while (i < 3);
