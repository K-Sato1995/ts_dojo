var one = new Promise(function (resolve, reject) {
    resolve("Hello");
});
one.then(function (value) {
    console.log("resolved", value);
});
