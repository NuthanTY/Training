let arr = [1, { age: 23 }, 3, 4, 5, 6];
for (let item of arr) {
    if (typeof item === "number") {
        console.log(item * 2);
    }
    else {
        console.log(item.age * 2);
    }
}
//# sourceMappingURL=test11forof.js.map