// resolve(value) — if the job finished successfully, with result value.
// reject(error) — if an error occurred, error is the error object.

const promiseResolved = new Promise<string>((resolve, reject) => {
  resolve("Hello");
});

promiseResolved.then(value => {
  console.log("resolved", value); //=> resolved Hello
});

const promiseRejected = new Promise<string>((resolve, reject) => {
  reject(new Error("Whoops!"));
});

promiseRejected.catch(error => {
  console.log("rejected", error); //=> rejected Error: Whoops!
});
