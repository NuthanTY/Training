function shouldServeDrinks(age,leave){
  
return (leave === true || age < 18)?false:true;

}

console.log(shouldServeDrinks(17,true));
console.log(shouldServeDrinks(19,false));
console.log(shouldServeDrinks(30,true));
