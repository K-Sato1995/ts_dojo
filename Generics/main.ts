// Basics
function identity<T>(arg: T): T {
  return arg;
}
/* The T allows us to capture the type the user provides */
console.log(identity<string>("K-Sato"));
console.log(identity<number>(2));
console.log(identity("K-Sato"));

// Working with arrays
function arr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
arr<number>([2, 3, 4]);
