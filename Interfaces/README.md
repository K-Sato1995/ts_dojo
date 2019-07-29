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

# References

- [Interfaces · TypeScript](https://www.typescriptlang.org/docs/handbook/interfaces.html)
