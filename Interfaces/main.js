var ken = {
    name: "K-Sato",
    age: 25
};
function fullName(p) {
    return "I'm " + p.name + " and I'm " + p.age + " years old."; //=> I'm K-Sato and I'm 25 years old.
}
var john = {
    name: "John",
    age: 23,
    intro: function () {
        console.log("Hi");
    }
};
console.log(fullName(ken));
console.log(john.intro());
var items = {
    id: 2,
    tokens: ["token1", "token2"]
};
console.log(items); //=> { id: 2, tokens: [ 'token1', 'token2' ] }
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
