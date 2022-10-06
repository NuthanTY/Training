let person2 = {
    fname: "nuthan",
    lname: "ty"
};
person2[Symbol.iterator] = function () {
    let prop = Object.keys(person2);
    let count = 0;
    let isdone = false;
    let next = () => {
        if (count >= prop.length) {
            isdone = true;
        }
        return { done: isdone, value: this[prop[count++]] };
    };
    return { next };
};
for (let key of person2) {
    console.log(key);
}
//# sourceMappingURL=test20iterators.js.map