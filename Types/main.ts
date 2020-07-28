// Basic Types
var nickName: string = "K-Sato";
const age: number = 24;
let male: boolean = true;
const anything: any = "Anything";
let extraInfo: { nationality: string; pet: string } = {
  nationality: "Japan",
  pet: "Dog",
};

console.log(nickName, age, male, anything, extraInfo); //=> K-Sato 24 true Anything { nationality: 'Japan', pet: 'Dog' }

// Arrays
const strArray: string[] = ["A", "B"];
let numArray: number[] = [1, 2, 3];
let numArray2: Array<number> = [1, 2, 3];

console.log(strArray, numArray, numArray2); ///=> [ 'A', 'B' ] [ 1, 2, 3 ] [ 1, 2, 3 ]

// Enums
enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color.Red); //=> 0

// Union Type
let year: string | number;
year = 24;
year = "24";
console.log(typeof year); //=> string

function me(info: string | number): void {
  console.log(info);
}
console.log(me("K-Sato")); //=> K-Sato
console.log(me(24)); //=> 24

// Tuple Type
let person: [string, number] = ["K-Sato", 234];
console.log(person); //=> [ 'K-Sato', 234 ]

// Type Alias
type StNum = string | number;
var log: StNum = 2;
console.log(log); //=> 2

export { nickName, age };
