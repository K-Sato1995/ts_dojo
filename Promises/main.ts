const one = new Promise<string>((resolve, reject) => {
  resolve("Hello");
});

one.then(value => {
  console.log("resolved", value); //=> resolved Hello
});
