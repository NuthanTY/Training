let firstname = "a";
let lastname = "b";

let obj1 = {
    firstname,
    lastname
}

let add = function (firstname, lastname, age) {
    let fullname = firstname + "" + lastname;
    return { firstname, lastname, fullname, senior: () => age > 30 };
}

let pa = add("hh", "bb", 76);
console.log(pa.senior());