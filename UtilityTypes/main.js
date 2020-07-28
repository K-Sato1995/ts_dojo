var taro = {
    firstName: "Taro"
};
console.log(taro); //=> { firstName: 'Taro' }
var todo = {
    title: "家の掃除"
};
var obj = {
    Japan: { name: "Tokyo" },
    France: { name: "Paris" }
};
console.log(obj); //=> { Japan: { name: 'Tokyo' }, France: { name: 'Paris' } }
var list = { 0: { name: "Taro" }, 1: { name: "Jiro" } };
console.log(list); //=> { '0': { name: 'Taro' }, '1': { name: 'Jiro' } }
var preview = {
    title: "部屋の掃除",
    completed: false
};
console.log(preview); //=> { title: '部屋の掃除', completed: false }
var preview2 = {
    title: "部屋の掃除",
    completed: false
};
console.log(preview2); //=> { title: '部屋の掃除', completed: false }
var a = true;
console.log(a);
// Parameters<T>
var func = function (text, num) {
    return "" + text + num;
};
var v = ["test", 2];
// ConstructorParameters<T>
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// ReturnType
var func2 = function () { return 1; };
// const jiro: Required<Person> = {
//   firstName: "Taro",
// }; // Error: property 'lastName' is missing.
// ThisParameterType
function toHex() {
    return this.toString(16);
}
var user = {
    hello: function () {
        console.log(this.name + "\u3067\u3059\u3002");
    }
};
user.hello("Test");
var helperFunctions = {
    hello: function () {
        this.logError("Error: Something went wrong!");
    }
};
helperFunctions.hello();
