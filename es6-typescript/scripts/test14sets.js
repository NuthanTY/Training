let myset = new Set([1, 2, 3, 4, 3, 3, 3, 5, 7, 5, 6, 7]);
let newset = myset.values();
let count = 0;
console.log(myset.values().next());
while (count <= myset.size) {
    console.log(newset.next());
    count++;
}
//# sourceMappingURL=test14sets.js.map