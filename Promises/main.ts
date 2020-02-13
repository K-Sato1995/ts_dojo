// resolve(value) — if the job finished successfully, with result value.
// reject(error) — if an error occurred, error is the error object.

// Resolve And Reject
const promiseResolved = new Promise<string>((resolve, reject):
  | string
  | void => {
  resolve("Hello");
  reject("Error Occured");
});

promiseResolved.then(value => {
  console.log("resolved", value); //=> resolved Hello
});

const promiseRejected = new Promise<string>((resolve, reject):
  | string
  | void => {
  reject(new Error("Whoops!"));
  resolve("Nothing ever happed");
});

promiseRejected.catch(error => {
  console.log("rejected", error); //=> rejected Error: Whoops!
});

// Chaining Promises
const promise1 = new Promise<number>((resolve, reject): number | void => {
  resolve(5);
});

const promise2 = (num: number): Promise<number> => {
  return new Promise<number>((resolve, reject): number | void => {
    resolve(num + 5);
  });
};

promise1.then(result => {
  promise2(result).then(result => {
    console.log(result); //=> 10
  });
});
