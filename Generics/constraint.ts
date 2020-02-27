interface argTypes {
  name: string;
}

function getName<T extends argTypes>(arg: T): string {
  return arg.name;
}

getName({ name: "鈴木一郎" });
