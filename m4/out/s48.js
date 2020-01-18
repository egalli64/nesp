"use strict";
function reverseCopy(data) {
    var result = [];
    for (var i_1 = data.length - 1; i_1 >= 0; i_1--) {
        result.push(data[i_1]);
    }
    return result;
}
var nbrs = [3, 5, 7, 12];
console.log('original', nbrs);
nbrs.reverse();
console.log('reversed', nbrs);
console.log('reversed copy of reversed', reverseCopy(nbrs));
console.log('reversed original unchanged', nbrs);
//# sourceMappingURL=s48.js.map