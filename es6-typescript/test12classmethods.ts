class person{
    constructor(name){
        this.name = name;
        console.log(name +" "+ "its ok brother.")
    }

    static hello(){
        console.log("hello")
    }

    greet(){
        console.log("hey")
    }
}


let p = new person("nuthan");
p.greet();
person.hello();