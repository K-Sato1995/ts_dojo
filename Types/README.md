# Types

## Union Type

Quite commonly in JavaScript you want to allow a property to be one of multiple types e.g. a string or a number. This is where the union type (denoted by `|` in a type annotation e.g. `string|number`) comes in handy.

```ts
function formatCommandline(command: string[] | string) {
  var line = "";
  if (typeof command === "string") {
    line = command.trim();
  } else {
    line = command.join(" ").trim();
  }

  // Do stuff with line: string
}
```

## Type Alias

TypeScript provides convenient syntax for providing names for type annotations that you would like to use in more than one place. The aliases are created using the type SomeName = someValidTypeAnnotation syntax. An example is demonstrated below:

```ts
type StrOrNum = string | number;

// Usage: just like any other notation
var sample: StrOrNum;
sample = 123;
sample = "123";

// Just checking
sample = true; // Error!
```
