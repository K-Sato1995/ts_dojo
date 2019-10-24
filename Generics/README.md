# Generics

The implementation of generics in Typescript give us the ability to pass in a range of types to a component, adding an extra layer of abstraction and re-usability to your code. Generics can be applied to functions, interfaces and classes in Typescript.

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

We’ve now added a type variable `T` to the identity function. This `T` allows us to capture the type the user provides.

It works over a range of types. Unlike using any, it’s also just as precise (ie, it doesn’t lose any information) as the first identity function that used numbers for the argument and return type.

Once we’ve written the generic identity function, we can call it in one of two ways.

```ts
let output = identity<string>("myString"); // type of output will be 'string'
let output = identity("myString"); // type of output will be 'string'
```

# References

- [Generics explained](https://medium.com/@rossbulat/typescript-generics-explained-15c6493b510f)
- [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html)
