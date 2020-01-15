// Basics
function identity(arg) {
    return arg;
}
/* The T allows us to capture the type the user provides */
console.log(identity("K-Sato"));
console.log(identity(2));
console.log(identity(true));
console.log(identity("K-Sato"));
console.log(identity({ title: "title", views: 2 }));
// More than one arguments
function twoIdentities(arg1, arg2) {
    return [arg1, arg2];
}
console.log(twoIdentities("String", true));
// Working with arrays
function arr(arg) {
    console.log(arg.length);
    return arg;
}
arr([2, 3, 4]);
arr(["A", "B"]);
var myIdentity = identity;
console.log(myIdentity(2));
function showIdentities(arg1, arg2) {
    var values = {
        id1: arg1,
        id2: arg2
    };
    return values;
}
console.log(showIdentities("test", 2)); //=> { id1: 'test', id2: 2 }
