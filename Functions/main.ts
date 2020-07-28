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

const showObject = (ob: { name: string; age: number | string }): any => {
  return { name: ob.name, age: ob.age };
};
console.log(showObject({ name: "test", age: 23 })); //=> { name: 'test', age: 23 }


// Programming language
type Log = (message: string, userId?: string) => void

let log: Log = (
  message,
  userId = "Not Signed in"
) => {
  let time = new Date().toISOString
  console.log(time, message, userId)
}

// オーバーロードされた関数
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
}

let reserve: Reserve = (from: Date, toOrDestination: Date | string, destination?: string) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    // 宿泊旅行を予約する。
  } else if (typeof toOrDestination === 'string') {
    // 日帰り旅行を予約する。
  }
}