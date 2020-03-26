class Pet {
  public type: string;
  protected name: string;
  private age: number;

  constructor(type: string, name: string, age: number) {
    this.type = type;
    this.name = name;
    this.age = age;
  }

  private lick() {
    console.log("Lick Lick Lick");
  }
}

let taro = new Pet("mammal", "Taro", 50);
console.log(taro.type); //=> mammal
taro.type = "reptile";
console.log(taro.type); //=> reptile

class SpecialPet extends Pet {
  roar(): void {
    console.log(`${this.name}!!!!!!!!!`); //=> Property 'name' is private and only accessible within class 'Pet'
  }
}

let goro = new SpecialPet("mammal", "Goro", 50);
goro.roar(); //=> "Goro!!!!!!!!!"
