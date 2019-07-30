// Named Function
function add(x, y) {
    return x + y;
}
console.log(add(2, 4)); //=> 6
// Arrow Function
var add2 = function (x, y) {
    return x + y;
};
console.log(add2(2, 4)); //=> 6
// Optional Parameters
var add3 = function (x, y) {
    if (y)
        return x + y;
    else
        return 100;
};
console.log(add3(2)); //=> 100
// Default Parameters
var add4 = function (x, y) {
    if (y === void 0) { y = 10; }
    return x + y;
};
console.log(add4(2)); //=> 12
// Object as an argument
var showPost = function (thing) {
    return thing.name;
};
console.log(showPost({ name: "NAME" })); //=> NAME
