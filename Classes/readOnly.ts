class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  s() {
    return 2;
  }
}

const jenny = new Person("Jenny");
jenny.name;
jenny.name = "Jaz"; // Cannot assign to 'name' because it is a read-only property.
