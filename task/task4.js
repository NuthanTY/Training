function checkString(obj){
    for(let key in obj){
        if(typeof obj[key] == 'string'){
            console.log(obj[key])
        }

    }
}



let user ={
    name:'nuthan',
    age: 22,
    sex:'Male',
   
}

checkString(user);