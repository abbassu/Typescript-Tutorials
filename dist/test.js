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
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
    }
}
class Amazon extends Player {
    constructor(name, spearc) {
        super(name);
        this.spearc = spearc;
    }
    attack() {
        console.log("attaking amazon");
        this.spearc -= 1;
    }
}
class Barbian extends Player {
    constructor(name, axe) {
        super(name);
        this.axe = axe;
    }
    attack() {
        console.log("attaking amazon");
        this.axe -= 1;
    }
}
let bar = new Barbian("elzero", 55);
console.log(bar.name);
bar.attack();
console.log(bar.axe);
//# sourceMappingURL=test.js.map