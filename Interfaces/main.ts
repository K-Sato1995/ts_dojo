// Interfaces
interface Person {
  name: string;
  age?: number; // ? means that the propery is optionable
}

var ken: Person = {
  name: "K-Sato",
  age: 25
};

function fullName(p: Person): string {
  return `I'm ${p.name} and I'm ${p.age} years old.`; //=> I'm K-Sato and I'm 25 years old.
}

console.log(fullName(ken));

// Array as a property
interface CredentialInfo {
  id: number;
  tokens: string[];
}

var items: CredentialInfo = {
  id: 2,
  tokens: ["token1", "token2"]
};

console.log(items); //=> { id: 2, tokens: [ 'token1', 'token2' ] }

// Array of object as a property
interface Post {
  title: string;
  content: string;
}
interface User {
  id: number;
  name: string;
  posts: Post[];
}

var post1: Post = {
  title: "Title",
  content: "BORING"
};
var post2: Post = {
  title: "Title",
  content: "BORING"
};

var currentUser: User = {
  id: 1,
  name: "K-Sato",
  posts: [post1, post2]
};

console.log(currentUser);
// => { id: 1, name: 'K-Sato', posts: [ { title: 'Title', content: 'BORING' }, { title: 'Title', content: 'BORING' } ] }

// Function Interfaces
interface satoFunc {
  (name: string, age: number): string;
}

let myFunc: satoFunc;
myFunc = function(name: string, age: number) {
  return `I'm ${name}, I'm ${age}`;
};
console.log(myFunc("K-Sato", 24));
