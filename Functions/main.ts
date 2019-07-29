// Named Function
function add(x: number, y: number): number {
  return x + y;
}
console.log(add(2, 4)); //=> 6

// Arrow Function
const add2 = (x: number, y: number): number => {
  return x + y;
};
console.log(add2(2, 4)); //=> 6

// Optional Parameters
const add3 = (x?: number, y?: number): number => {
  if (y) return x + y;
  else return 100;
};
console.log(add3(2)); //=> 100

// Default Parameters
const add4 = (x: number, y = 10): number => {
  return x + y;
};
console.log(add4(2)); //=> 12

// Object as an argument
const showPost = (thing: { name: string }): string => {
  return thing.name;
};
console.log(showPost({ name: "NAME" })); //=> NAME
