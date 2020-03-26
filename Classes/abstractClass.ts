abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  scream(): void {
    console.log("AAAAAAAAAA");
  }

  // Abstract method
  // It must be implemented in the derived class.
  abstract shout(): void;
}

class Dog extends Animal {
  shout(): void {
    console.log("OOOOOOO");
  }
}

const dog1 = new Dog("Yoppy");
dog1.scream(); //=> AAAAAAAAAA
dog1.shout(); //=> OOOOOOO
