// Basics
function identity<T>(arg: T): T {
  return arg;
}
/* The T allows us to capture the type the user provides */
console.log(identity<string>("K-Sato"));
console.log(identity<number>(2));
console.log(identity<boolean>(true));
console.log(identity("K-Sato"));
interface Article {
  title: string;
  views: number;
}
console.log(identity<Article>({ title: "title", views: 2 }));

// Working with arrays
function arr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

arr<number>([2, 3, 4]);
arr<string>(["A", "B"]);

// Generic Types
interface GenericIntentity {
  <T>(arg: T): T;
}
let myIdentity: GenericIntentity = identity;
console.log(myIdentity<number>(2));

// Generic Interfaces
interface Identities<V, W> {
  id1: V;
  id2: W;
}

function showIdentities<T, U>(arg1: T, arg2: U): Identities<T, U> {
  let values: Identities<T, U> = {
    id1: arg1,
    id2: arg2
  };
  return values;
}
console.log(showIdentities(<string>"test", <number>2)); //=> { id1: 'test', id2: 2 }
