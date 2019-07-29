// Interfaces
interface Person {
  name: string;
  age?: number; // ? means that the propery is optionable
}

function fullName(person: Person): string {
  return `I'm ${person.name} and I'm ${person.age} years old.`; //=> I'm K-Sato and I'm 25 years old.
}

var person = {
  name: "K-Sato",
  age: 25
};

console.log(fullName(person));

// Array as a property
interface Credential {
  tokens: string[];
}

var items: Credential = {
  tokens: ["token1", "token2"]
};

console.log(items); //=> { tokens: [ 'token1', 'token2' ] }

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
