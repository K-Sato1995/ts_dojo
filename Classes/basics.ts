class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  intro(): string {
    return `I'm ${this.name}`;
  }
}

const nick = new Person("Nick");

nick.intro(); //=> I'm Nick

class User extends Person {
  id: number;

  constructor(id: number, name: string) {
    super(name);
    this.id = id;
  }

  showIdName(): void {
    console.log(this.id, this.name);
  }
}

const user1 = new User(1, "John");

user1.intro(); //=> "I'm John"
user1.showIdName(); //=> 1 'John'
