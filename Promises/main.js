// resolve(value) — if the job finished successfully, with result value.
// reject(error) — if an error occurred, error is the error object.
// Resolve And Reject
var promiseResolved = new Promise(function (resolve, reject) {
    resolve("Hello");
    reject("Error Occured");
});
promiseResolved.then(function (value) {
    console.log("resolved", value); //=> resolved Hello
});
var promiseRejected = new Promise(function (resolve, reject) {
    reject(new Error("Whoops!"));
    resolve("Nothing ever happed");
});
promiseRejected["catch"](function (error) {
    console.log("rejected", error); //=> rejected Error: Whoops!
});
// Chaining Promises
var promise1 = new Promise(function (resolve, reject) {
    resolve(5);
});
var promise2 = function (num) {
    return new Promise(function (resolve, reject) {
        resolve(num + 5);
    });
};
promise1.then(function (result) {
    promise2(result).then(function (result) {
        console.log(result); //=> 10
    });
});
