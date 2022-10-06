var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["white"] = 2] = "white";
})(color || (color = {}));
;
let me = color.green;
console.log(me);
//# sourceMappingURL=test22enum.js.map