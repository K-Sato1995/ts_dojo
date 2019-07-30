# Interfaces

Interfaces have zero runtime JS impact. There is a lot of power in TypeScript interfaces to declare the structure of variables.

The following two are equivalent declarations, the first uses an inline annotation, the second uses an interface:

```ts
// Sample A
declare var myPoint: { x: number; y: number };

// Sample B
interface Point {
  x: number;
  y: number;
}
declare var myPoint: Point;
```

However, the beauty of Sample B is that if someone authors a library that builds on the myPoint library to add new members, they can easily add to the existing declaration of myPoint:

# Function Types

`Interfaces` are also capable of describing function types.

To describe a function type with an interface, we give the interface a call signature

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

Once defined, we can use this function type interface like we would other interfaces.

```ts
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
```

# References

- [Interfaces · TypeScript](https://www.typescriptlang.org/docs/handbook/interfaces.html)
