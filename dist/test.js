"use strict";
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
console.log("--------------------------");
console.log(addAll(10, 20, 300, 10.5, +true));
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(4, 22));
const addArrow = (num1, num2) => {
    return num1 + num2;
};
console.log(addArrow(77, 22));
let name1 = "abbas";
name1 = "ahmad";
let m1 = "ddddddd";
m1 = 55;
function getHardSecond() {
    return 3;
}
var kids;
(function (kids) {
    kids[kids["five"] = 5] = "five";
    kids[kids["seven"] = 7] = "seven";
    kids[kids["ten"] = 10] = "ten";
})(kids || (kids = {}));
var level;
(function (level) {
    level[level["Easy"] = 5] = "Easy";
    level[level["medium"] = getHardSecond()] = "medium";
})(level || (level = {}));
function getAction(btn) {
    console.log(`hello ${btn.one}`);
    console.log(`hello ${btn.two}`);
    console.log(`hello ${btn.three}`);
    console.log(`hello ${btn.four}`);
}
function getActionNow(btn) {
    console.log(`hello ${btn.one}`);
    console.log(`hello ${btn.two}`);
    console.log(`hello ${btn.three}`);
    console.log(`hello ${btn.five}`);
}
getAction({ one: "stgin", two: 100, three: true, four: false });
getActionNow({ one: "stgin", two: 100, three: true, five: false });
//# sourceMappingURL=test.js.map