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
