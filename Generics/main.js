// Basics
function identity(arg) {
    return arg;
}
/* The T allows us to capture the type the user provides */
console.log(identity("K-Sato"));
console.log(identity(2));
console.log(identity("K-Sato"));
// Working with arrays
function arr(arg) {
    console.log(arg.length);
    return arg;
}
arr([2, 3, 4]);
var myIdentity = identity;
console.log(myIdentity(2));
