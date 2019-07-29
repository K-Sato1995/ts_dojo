// Basic Types
var nickName: string = "K-Sato";
const age: number = 123;
let male: boolean = true;
let nationality: any = "";

console.log(nickName, age, male, nationality); //=> K-Sato 123 true

// Arrays
var strs: string[] = ["A", "B"];
let nums: number[] = [1, 2, 3];
let nums2: Array<number> = [1, 2, 3];

console.log(strs, nums, nums2); ///=> [ 'A', 'B' ] [ 1, 2, 3 ] [ 1, 2, 3 ]

// Enums
enum Color {
  Red,
  Green,
  Blue
}

console.log(Color.Red); //=> 0

// Union Type
function me(info: string | number): void {
  console.log(info);
}

console.log(me("K-Sato"));
console.log(me(562));

// Tuple Type
let person: [string, number] = ["K-Sato", 234];
console.log(person); //=> [ 'K-Sato', 234 ]

// Type Alias
type StNum = string | number;
var log: StNum = 2;
console.log(log); //=> 2
