function max(a,b){
    return a>b ? `A is greater: ${a}`: `B is greater: ${b}` ;
}

var a =+prompt('Enter A');
var b =+prompt("Enter B");

console.log(max(a,b));