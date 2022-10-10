function length(string){
    if(string === ""){
       return 0
    }
    
    else {
        return length(string.substring(1)) + 1;
    }
}

console.log(length("apple"));
console.log(length("nuthan"));
console.log(length("aisiri Raj"));
console.log(length("sangam"));
console.log(length("dimple"));
