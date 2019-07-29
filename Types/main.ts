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
let person: [string, number] = ["K-Sato", 234];

console.log(strs, nums, nums2, person); ///=> [ 'A', 'B' ] [ 1, 2, 3 ] [ 1, 2, 3 ]

// Enums
enum Color {
  Red,
  Green,
  Blue
}

console.log(Color.Red); //=> 0
