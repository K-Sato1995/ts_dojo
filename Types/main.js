// Basic Types
var nickName = "K-Sato";
var age = 123;
var male = true;
var nationality = "";
console.log(nickName, age, male, nationality); //=> K-Sato 123 true
// Arrays
var strs = ["A", "B"];
var nums = [1, 2, 3];
var nums2 = [1, 2, 3];
console.log(strs, nums, nums2); ///=> [ 'A', 'B' ] [ 1, 2, 3 ] [ 1, 2, 3 ]
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); //=> 0
// Union Type
function me(info) {
    console.log(info);
}
console.log(me("K-Sato"));
console.log(me(562));
// Tuple Type
var person = ["K-Sato", 234];
console.log(person);
var log = 2;
console.log(log); //=>
