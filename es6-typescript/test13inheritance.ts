class person1 {
    constructor(name) {

        console.log(name + " " + "its ok brother.")
    }

}

class employee extends person1 {
    constructor(name) {
        super(name);
        console.log(name + " " + "hello")
    }
}

let per = new employee("nuthan");
