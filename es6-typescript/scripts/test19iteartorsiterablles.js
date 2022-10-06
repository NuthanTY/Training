let it = [1, 2, 3, 4];
function itr(arr) {
    let count = 0;
    return {
        next: () => {
            return count < Array.length ? { value: arr[count]++ } : { value: undefined, done: true };
        }
    };
}
let myit = itr(it);
console.log(myit.next());
//# sourceMappingURL=test19iteartorsiterablles.js.map