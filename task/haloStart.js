function star(n){
    for (let i=1; 1<=n; i++){
        for (let j=0; j<i; j++){
            if (i===n){
                console.log("*")
            }

            else {
                if (j ==0 || j==i-1){
                console.log("*")
            }
            else {
                console.log(" ")
            }
        }
        }
    }

}

star(3);