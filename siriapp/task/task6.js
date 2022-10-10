function includes(arr,element){
    for(let key of arr){
        if(key.toLowerCase() == element.toLowerCase()){
            return true;
            break;
        }
    }
    return false;
}

let arr = ['a','B','c','d'];
let element= 'C';
console.log(includes(arr,element));