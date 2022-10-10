function speedLimit(speed){
    
    if(speed<70){
        return "Good Safe Driving";
    }

    else if(speed>70){
        let value = Math.round((speed - 70)/5);
        if(value>=10){
            return 'Licence Suspended'
        }
        return `Speed limit crossed by penaty point ${value}`


    }

}
// let speed = +prompt('Speed');
console.log(speedLimit(80));
console.log(speedLimit(130));
console.log(speedLimit(30));
console.log(speedLimit(74));
console.log(speedLimit(90));
console.log(speedLimit(120));
