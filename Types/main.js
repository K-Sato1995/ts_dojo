// Basic Types
var nickName = "K-Sato";
var age = 24;
var male = true;
var extraInfo = { natinality: "Japan", pet: "Dog" };
console.log(nickName, age, male, extraInfo); //=> K-Sato 123 true { natinality: 'Japan', pet: 'Dog' }
// Arrays
var strArray = ["A", "B"];
var numArray = [1, 2, 3];
var numArray2 = [1, 2, 3];
console.log(strArray, numArray, numArray2); ///=> [ 'A', 'B' ] [ 1, 2, 3 ] [ 1, 2, 3 ]
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); //=> 0
// Union Type
var year;
year = 24;
year = "24";
console.log(typeof year);
function me(info) {
    console.log(info);
}
console.log(me("K-Sato")); //=> K-Sato
console.log(me(24)); //=> 24
// Tuple Type
var person = ["K-Sato", 234];
console.log(person); //=> [ 'K-Sato', 234 ]
var log = 2;
console.log(log); //=> 2
