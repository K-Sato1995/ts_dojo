// Partial<T>
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const taro: Partial<Person> = {
  firstName: "Taro",
};

console.log(taro); //=> { firstName: 'Taro' }

// Readonly<T>
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "家の掃除",
};

// Cannot assign to 'title' because it is a read-only property.ts(2540)
// todo.title = "夕飯の買い出し";

// Record<K, T>
interface City {
  name: string;
}

type Country = "Japan" | "France";

const obj: Record<Country, City> = {
  Japan: { name: "Tokyo" },
  France: { name: "Paris" },
};

console.log(obj); //=> { Japan: { name: 'Tokyo' }, France: { name: 'Paris' } }

interface User {
  name: string;
}

type UserList = Record<number, User>;

const list: UserList = { 0: { name: "Taro" }, 1: { name: "Jiro" } };

console.log(list); //=> { '0': { name: 'Taro' }, '1': { name: 'Jiro' } }

// Pick<T, K>
interface Task {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Task, "title" | "completed">;

const preview: TodoPreview = {
  title: "部屋の掃除",
  completed: false,
};

console.log(preview); //=> { title: '部屋の掃除', completed: false }

// Omit<T,U>
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Omit<Todo2, "description">;

const preview2: TodoPreview2 = {
  title: "部屋の掃除",
  completed: false,
};

console.log(preview2); //=> { title: '部屋の掃除', completed: false }

// Exclude<T,U>
interface TypeA {
  id: number;
  name: string;
}

interface TypeB {
  id: number;
  address: string;
}

type ExcludedType = Exclude<keyof TypeA, keyof TypeB>; // "name"
type ExcludedType2 = Exclude<string, number>; // string
type ExcludedType3 = Exclude<string | number, boolean>; // string | number

// ExtractedType
type ExtractedType = Extract<keyof TypeA, keyof TypeB>; // "id"
type ExtractedType2 = Extract<string, number>; // never
type ExtractedType3 = Extract<string | number | boolean, string | boolean>; // string | boolean

const a: ExtractedType3 = true;

console.log(a);

// NonNullable<T>
type Type1 = NonNullable<string | number | undefined>;
type Type2 = NonNullable<string[] | null | undefined>;

// Parameters<T>
const func = (text: string, num: number) => {
  return `${text}${num}`;
};

type Type3 = Parameters<typeof func>;

const v: Type3 = ["test", 2];

// ConstructorParameters<T>
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type Typez = ConstructorParameters<typeof Person>; // [string, number]

// ReturnType

const func2 = (): number => 1;

type TypeK = ReturnType<typeof func2>;

// Required<T>
interface Person2 {
  firstName?: string;
  lastName?: string;
}

// const jiro: Required<Person> = {
//   firstName: "Taro",
// }; // Error: property 'lastName' is missing.

// ThisParameterType
function toHex(this: Number) {
  return this.toString(16);
}

type TypeL = ThisParameterType<typeof toHex>; //Number

//
type TypeN = OmitThisParameter<typeof toHex>; // () => string

// ThisTpe
interface User {
  name: string;
}

interface Greetings {
  hello(): void;
}

const user: Greetings & ThisType<User> = {
  hello() {
    console.log(`${this.name}です。`);
  },
};

user.hello();
