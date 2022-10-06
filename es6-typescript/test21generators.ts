let person3 ={
    fname:"nuthan",
    lname:"ty"
}

person3[Symbol.iterator]= function*(){
    let prop = Object.keys(person3);
   for(let t in person3){
    yield this[t]
   }
};
for(let key of person3){
    console.log(key)

}