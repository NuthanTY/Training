let user ={
    name:'nuthan',
    id:23,
    call: function(){
        setTimeout(() => console.log(this.name),3000);
    }

}

user.call();
