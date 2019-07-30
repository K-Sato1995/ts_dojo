function fullName(person) {
    return "I'm " + person.name + " and I'm " + person.age + " years old."; //=> I'm K-Sato and I'm 25 years old.
}
var person = {
    name: "K-Sato",
    age: 25
};
console.log(fullName(person));
var items = {
    tokens: ["token1", "token2"]
};
console.log(items); //=> { tokens: [ 'token1', 'token2' ] }
var post1 = {
    title: "Title",
    content: "BORING"
};
var post2 = {
    title: "Title",
    content: "BORING"
};
var currentUser = {
    id: 1,
    name: "K-Sato",
    posts: [post1, post2]
};
console.log(currentUser);
var myFunc;
myFunc = function (name, age) {
    return "I'm " + name + ", I'm " + age;
};
console.log(myFunc("K-Sato", 24));
