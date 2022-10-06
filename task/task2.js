function checkLandscape(height,width){
    return width > height ? true:false;
}

var height =+prompt('Enter height');
var width =+prompt("Enter width");

console.log(checkLandscape(height,width));