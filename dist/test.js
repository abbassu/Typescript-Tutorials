"use strict";
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
console.log("--------------------------");
console.log(addAll(10, 20, 300, 10.5, +true));
//# sourceMappingURL=test.js.map