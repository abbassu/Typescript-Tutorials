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
let fla;
fla = { up: "rrrrr", down: "rrrrrrrrrrr", rigth: "ddddddd", left: "ssss" };
fla.down = "rrrrr1";
fla.rigth = "rrrrr2";
fla.left = "rrrrr3";
function getAction(btn) {
    console.log(`actoin before button up ${btn.up}`);
    console.log(`actoin before button down ${btn.down}`);
    console.log(`actoin before button left ${btn.left}`);
    console.log(`actoin before button right ${btn.rigth}`);
}
function getActionlast(btn) {
    console.log(`actoin before button up ${btn.up}`);
    console.log(`actoin before button down ${btn.down}`);
    console.log(`actoin before button left ${btn.left}`);
    console.log(`actoin before button right ${btn.rigth}`);
    console.log(`actoin xxxxxx ${btn.x}`);
}
console.log(getAction({ up: "go-up", down: "go-right", left: "go-left", rigth: "go-down" }));
console.log(getAction(fla));
console.log(getActionlast({ up: "go-up", down: "go-right", left: "go-left", rigth: "go-down", x: true }));
//# sourceMappingURL=test.js.map