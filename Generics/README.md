# Generics

Instead of using `any` for arguments, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned.
Here, we will use a type variable, a special kind of variable that works on types rather than values.

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

We’ve now added a type variable `T` to the identity function. This `T` allows us to capture the type the user provides.

Once we’ve written the generic identity function, we can call it in one of two ways.

```ts
let output = identity<string>("myString"); // type of output will be 'string'
let output = identity("myString"); // type of output will be 'string'
```
