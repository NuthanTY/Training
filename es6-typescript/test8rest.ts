const show = function (message, ...colors) {
    console.log(message);
    for (let i in colors) {
        console.log(colors[i]);
    }
}

let message = "hello there";
show(message, "red", "white");
show(message, "green");
show(message);
