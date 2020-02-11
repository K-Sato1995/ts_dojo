var promiseResolved = new Promise(function (resolve, reject) {
    resolve("Hello");
});
promiseResolved.then(function (value) {
    console.log("resolved", value); //=> resolved Hello
});
var promiseRejected = new Promise(function (resolve, reject) {
    reject(new Error("Whoops!"));
});
promiseRejected["catch"](function (error) {
    console.log("rejected", error);
});
