# Interfaces

Interfaces are the core way in TypeScript to compose multiple type annotations into a single named annotation. Consider the following example:

```ts
interface Name {
  first: string;
  second: string;
}

var name: Name;
name = {
  first: "John",
  second: "Doe"
};

name = {
  // Error : `second` is missing
  first: "John"
};
name = {
  // Error : `second` is the wrong type
  first: "John",
  second: 1337
};
```
